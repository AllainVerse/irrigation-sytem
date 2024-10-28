const express = require("express");
const { predictPlants, getDataPlot } = require("../controllers/dataController");
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.router();

router.post(
  "/:plot_id/predict",
  authenticateToken,
  checkRole(["admin", "farmer"]),
  predictPlant
);

router.get(
  "/:plot_id/data",
  authenticateToken,
  checkRole(["admin", "farmer"]),
  getDataPlot
);

module.exports = router;
