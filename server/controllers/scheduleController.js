const { Schedule } = require('../models'); // Adjust the path as necessary

// Controller function to create a new Schedule
exports.createSchedule = async (req, res) => {
    const { plot_id } = req.params;
    const { start_time, end_time, frequency } = req.body;
    // const user_id = req.user.user_id; // Assuming user_id is available in the request object

    try {
        const schedule = await Schedule.create({
            plot_id: plot_id,
            start_time,
            end_time,
            frequency,
        });
        res.status(201).json({ message: "Schedule created successfully", schedule });
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error: error.message });
    }
};

// Controller to get schedules
exports.getSchedules = async (req, res) => {
    const { userId } = req.params;

    try {
        let schedules;
        if (req.user.role === 'admin') {
            // Admin can see all schedules
            schedules = await Schedule.findAll();
        } else if (req.user.role === 'farmer') {
            // Farmer can only see their own schedules
            schedules = await Schedule.findAll({ where: { user_id: userId } });
        } else {
            return res.status(403).json({ message: 'Access denied' });
        }
        res.json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Controller to update a schedule
exports.updateSchedule = async (req, res) => {
    const { scheduleId } = req.params;
    const { start_time, end_time, frequency } = req.body;

    // Check user role
    if (req.user.role !== 'farmer') {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        const schedule = await Schedule.findByPk(scheduleId);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        // Update schedule
        schedule.start_time = start_time;
        schedule.end_time = end_time;
        schedule.frequency = frequency;
        await schedule.save();

        res.json({ message: "Schedule updated successfully", schedule });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Controller to delete a schedule
exports.deleteSchedule = async (req, res) => {
    const { scheduleId } = req.params;

    // Check user role
    if (req.user.role !== 'farmer') {
        return res.status(403).json({ message: 'Access denied' });
    }

    try {
        const schedule = await Schedule.findByPk(scheduleId);
        if (!schedule) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        await schedule.destroy();
        res.json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};