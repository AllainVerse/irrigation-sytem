const express = require("express");
const {
  createDevice,
  updateDevice,
  deleteDevice,
  getDevices,
} = require("../controllers/deviceController");
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

router.post(
  "/:plot_id/devices/",
  authenticateToken,
  checkRole(["admin"]),
  createDevice
);
router.get(
  "/:plot_id/devices/",
  authenticateToken,
  checkRole(["admin", "farmer"]),
  getDevices
);
router.put(
  "/:plot_id/devices/:device_id",
  authenticateToken,
  checkRole(["admin"]),
  updateDevice
);
router.delete(
  "/:plot_id/devices/:device_id",
  authenticateToken,
  checkRole(["admin"]),
  deleteDevice
);

module.exports = router;
