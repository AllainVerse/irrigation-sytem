const express = require("express");
const {
  createPlot,
  getPlots,
  updatePlot,
  deletePlot,
  predictPlant,
} = require("../controllers/plotController");
const {
  createDevice,
  updateDevice,
  deleteDevice,
  getDevices,
} = require("../controllers/deviceController");
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

// Farmer hanya dapat melihat data plot (GET)
router.get("/", authenticateToken, checkRole(["farmer", "admin"]), getPlots);

// Admin dapat membuat, mengupdate, dan menghapus plot
router.post("/", authenticateToken, checkRole(["admin"]), createPlot);
router.put("/:plot_id", authenticateToken, checkRole(["admin"]), updatePlot);
router.delete("/:plot_id", authenticateToken, checkRole(["admin"]), deletePlot);
router.post(
  "/:plot_id/predict",
  authenticateToken,
  checkRole(["admin", "farmer"]),
  predictPlant
);
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
