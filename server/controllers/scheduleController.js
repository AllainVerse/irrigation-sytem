const { Schedule, IrrigationLog } = require("../models"); // Adjust the path as necessary
const cron = require("node-cron");
const cronJobManager = require("./cronJobManager");
const { Op } = require("sequelize");
const moment = require("moment-timezone");

// Controller function to create a new Schedule
exports.createSchedule = async (req, res) => {
  const { plot_id } = req.params;
  const { start_time, end_time, frequency } = req.body;

  // Validate frequency input
  const validFrequencies = ["daily", "weekly", "monthly"];
  if (!validFrequencies.includes(frequency)) {
    return res.status(400).json({
      message:
        "Invalid frequency. Allowed values are 'daily', 'weekly', or 'monthly'.",
    });
  }

  try {
    // Convert start_time and end_time to just HH:mm format
    const startTimeWIB = moment
      .tz(start_time, "HH:mm", "Asia/Jakarta")
      .format("HH:mm");
    const endTimeWIB = moment
      .tz(end_time, "HH:mm", "Asia/Jakarta")
      .format("HH:mm");

    // Create the schedule in the database
    const schedule = await Schedule.create({
      plot_id: plot_id,
      start_time: startTimeWIB,
      end_time: endTimeWIB,
      frequency: frequency, // Store frequency as it is (daily, weekly, or monthly)
    });

    res
      .status(201)
      .json({ message: "Schedule created successfully", schedule });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating schedule", error: error.message });
  }
};

// Fungsi untuk menjalankan cron job
const executeIrrigationTask = async () => {
  try {
    const currentTimeWIB = moment().tz("Asia/Jakarta").format("HH:mm");
    const currentDay = moment().tz("Asia/Jakarta").format("dddd");
    const currentDate = moment().tz("Asia/Jakarta").date();

    console.log("Current Time WIB:", currentTimeWIB); // Debug: Cetak waktu saat ini
    console.log("Current Day:", currentDay); // Debug: Cetak hari saat ini
    console.log("Current Date:", currentDate); // Debug: Cetak tanggal saat ini

    // Menyaring jadwal berdasarkan waktu yang sesuai dengan currentTimeWIB
    const schedules = await Schedule.findAll({
      where: {
        start_time: {
          [Op.lte]: currentTimeWIB, // Start time kurang dari atau sama dengan current time
        },
        end_time: {
          [Op.gte]: currentTimeWIB, // End time lebih besar atau sama dengan current time
        },
      },
    });

    // Debug: Lihat apakah schedules ditemukan
    console.log("Schedules found:", schedules.length);

    for (const schedule of schedules) {
      console.log(
        `Checking schedule: Start Time - ${schedule.start_time}, End Time - ${schedule.end_time}`
      ); // Debug: Lihat jadwal yang sedang diproses

      let shouldExecute = false;

      if (schedule.frequency === "daily") {
        shouldExecute = true;
      } else if (schedule.frequency === "weekly" && currentDay === "Monday") {
        shouldExecute = true;
      } else if (schedule.frequency === "monthly" && currentDate === 1) {
        shouldExecute = true;
      }

      if (shouldExecute) {
        const existingLog = await IrrigationLog.findOne({
          where: {
            schedule_id: schedule.schedule_id,
            log_date: moment().tz("Asia/Jakarta").format("YYYY-MM-DD"),
            start_time: schedule.start_time,
            end_time: schedule.end_time,
          },
        });

        // Debug: Jika log sudah ada atau belum
        if (!existingLog) {
          const durationInHours = moment(schedule.end_time, "HH:mm").diff(
            moment(schedule.start_time, "HH:mm"),
            "hours",
            true
          );

          const waterUsed = durationInHours * 5; // Asumsi 5 liter per jam

          await IrrigationLog.create({
            schedule_id: schedule.schedule_id,
            plot_id: schedule.plot_id,
            log_date: moment().tz("Asia/Jakarta").format("YYYY-MM-DD"),
            start_time: schedule.start_time,
            end_time: schedule.end_time,
            water_used: waterUsed,
          });

          console.log(
            `Irrigation log created for Schedule ID: ${schedule.schedule_id}, Water used: ${waterUsed} liters`
          );
        } else {
          console.log("Irrigation log already exists for this schedule.");
        }
      } else {
        console.log("Schedule doesn't meet the criteria for execution.");
      }
    }
  } catch (error) {
    console.error("Error in irrigation logging process:", error);
  }
};

// Controller untuk memulai cron job
exports.startCronJob = (req, res) => {
  console.log("Attempting to start cron job");
  cronJobManager.start(executeIrrigationTask);
  const status = cronJobManager.isRunning() ? "running" : "stopped";
  res.json({ status: `Cron job status: ${status}` });
};

// Controller untuk menghentikan cron job
exports.stopCronJob = (req, res) => {
  cronJobManager.stop();
  res.json({ status: "Cron job stopped" });
};

// Controller untuk mengecek status cron job
exports.getCronJobStatus = (req, res) => {
  const status = cronJobManager.isRunning() ? "running" : "stopped";
  res.json({ status });
};

exports.getIrrigationLog = async (req, res) => {
  try {
    const log = await IrrigationLog.findAll();
    res.json(log);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching irrigation log", error: error.message });
  }
};

// Controller to get schedules
exports.getSchedules = async (req, res) => {
  const { plot_id } = req.params;

  try {
    let schedules;
    if (req.user.role === "admin") {
      // Admin can see all schedules
      schedules = await Schedule.findAll();
    } else if (req.user.role === "farmer") {
      // Farmer can only see their own schedules
      schedules = await Schedule.findAll({
        where: { plot_id: plot_id },
      });
    } else {
      return res.status(403).json({ message: "Access denied" });
    }
    res.json(schedules);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Controller to update a schedule
exports.updateSchedule = async (req, res) => {
  const { schedule_id } = req.params;
  const { start_time, end_time, frequency } = req.body;

  // Validate frequency input
  const validFrequencies = ["daily", "weekly", "monthly"];
  if (!validFrequencies.includes(frequency)) {
    return res.status(400).json({
      message:
        "Invalid frequency. Allowed values are 'daily', 'weekly', or 'monthly'.",
    });
  }

  try {
    const schedule = await Schedule.findByPk(schedule_id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    // Convert start_time and end_time to HH:mm format
    const startTimeWIB = moment
      .tz(start_time, "HH:mm", "Asia/Jakarta")
      .format("HH:mm");
    const endTimeWIB = moment
      .tz(end_time, "HH:mm", "Asia/Jakarta")
      .format("HH:mm");

    // Update the schedule
    schedule.start_time = startTimeWIB;
    schedule.end_time = endTimeWIB;
    schedule.frequency = frequency;
    await schedule.save();

    res.json({ message: "Schedule updated successfully", schedule });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Controller to delete a schedule
exports.deleteSchedule = async (req, res) => {
  const { schedule_id } = req.params;

  try {
    const schedule = await Schedule.findByPk(schedule_id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    await schedule.destroy();
    res.json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
