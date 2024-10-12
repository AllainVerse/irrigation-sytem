const express = require("express");
const {
  createPlantNeed,
  getPlantNeeds,
  updatePlantNeed,
  deletePlantNeed,
} = require("../controllers/plantController");

const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const checkRole = require("../middlewares/checkRole");

// Farmer dapat membuat, mengupdate, dan menghapus plant needs
router.post(
  "/:plot_id/plant-needs",
  authenticateToken,
  checkRole(["farmer"]),
  createPlantNeed
);
router.get(
  "/:plot_id/plant-needs",
  authenticateToken,
  checkRole(["farmer"]),
  getPlantNeeds
);
router.put(
  "/:plot_id/plant-needs/:crop_id",
  authenticateToken,
  checkRole(["farmer"]),
  updatePlantNeed
);
router.delete(
  "/:plot_id/plant-needs/:crop_id",
  authenticateToken,
  checkRole(["farmer"]),
  deletePlantNeed
);

module.exports = router;
