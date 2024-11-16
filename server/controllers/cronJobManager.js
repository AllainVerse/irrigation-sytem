// cronJobManager.js
const cron = require("node-cron");

class CronJobManager {
  constructor() {
    this.cronJob = null;
  }

  start(scheduleTask) {
    if (!this.cronJob || !this.cronJob.running) {
      this.cronJob = cron.schedule(
        "* * * * *",
        async () => {
          console.log("Cron job execution started");
          await scheduleTask();
        },
        {
          scheduled: true,
        }
      );
      this.cronJob.running = true;
      console.log("Cron job has been started.");
    } else {
      console.log("Cron job is already running.");
    }
  }

  stop() {
    if (this.cronJob && this.cronJob.running) {
      this.cronJob.stop();
      this.cronJob.running = false;
      console.log("Cron job has been stopped.");
    } else {
      console.log("Cron job is not running.");
    }
  }

  isRunning() {
    return this.cronJob && this.cronJob.running;
  }
}

module.exports = new CronJobManager();
