const express = require("express");
const {
  predictPlant,
  getDataPlot,
  getAllData,
} = require("../controllers/dataController");
const checkRole = require("../middlewares/checkRole");
const authenticateToken = require("../middlewares/authenticateToken");

const router = express.Router();

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

router.get("/all", authenticateToken, checkRole(["admin"]), getAllData);

module.exports = router;
