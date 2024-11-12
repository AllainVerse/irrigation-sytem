const express = require("express");
const {
  startCronJob,
  stopCronJob,
  getCronJobStatus,
  getIrrigationLog,
} = require("../controllers/scheduleController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

router.post(
  "/start-cron",
  authenticateToken,
  checkRole(["admin"]),
  startCronJob
);

router.post("/stop-cron", authenticateToken, checkRole(["admin"]), stopCronJob);

router.get(
  "/status-cron",
  authenticateToken,
  checkRole(["admin"]),
  getCronJobStatus
);

router.get(
  "/schedule-log",
  authenticateToken,
  checkRole(["admin"]),
  getIrrigationLog
);

module.exports = router;
