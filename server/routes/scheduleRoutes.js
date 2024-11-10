const express = require("express");
const {
  createSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
} = require("../controllers/scheduleController");
const router = express.Router();
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

// Farmer bisa membuat schedule
router.post(
  "/:plot_id/schedule",
  authenticateToken,
  checkRole(["farmer"]),
  createSchedule
);

// farmer dan admin bisa melihat schedule
router.get(
  "/:plot_id/schedule",
  authenticateToken,
  checkRole(["farmer"]),
  getSchedules
);

// Farmer bisa update schedule
router.put(
  "/:plot_id/schedule/:schedule_id",
  authenticateToken,
  checkRole(["farmer"]),
  updateSchedule
);

// Farmer bisa menghapus schedule
router.delete(
  "/:plot_id/schedule/:schedule_id",
  authenticateToken,
  checkRole(["farmer"]),
  deleteSchedule
);

module.exports = router;
