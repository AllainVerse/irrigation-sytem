const express = require("express");
const {
  createPlot,
  getPlots,
  updatePlot,
  deletePlot,
} = require("../controllers/plotController");
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

// Farmer hanya dapat melihat data plot (GET)
router.get("/", authenticateToken, checkRole(["farmer", "admin"]), getPlots);

// Admin dapat membuat, mengupdate, dan menghapus plot
router.post("/", authenticateToken, checkRole(["admin"]), createPlot);
router.put("/:plot_id", authenticateToken, checkRole(["admin"]), updatePlot);
router.delete("/:plot_id", authenticateToken, checkRole(["admin"]), deletePlot);

module.exports = router;
