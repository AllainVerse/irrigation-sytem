const { PlantNeeds } = require("../models");

exports.createPlantNeed = async (req, res) => {
  const { plot_id } = req.params;
  const { crop_name, optimal_moisture, water_requirement } = req.body;

  try {
    const plantNeed = await PlantNeeds.create({
      plot_id: plot_id,
      crop_name,
      optimal_moisture,
      water_requirement,
    });

    res
      .status(201)
      .json({ message: "Plant need created successfully", plantNeed });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating plant need", error: error.message });
  }
};

exports.getPlantNeeds = async (req, res) => {
  const { plot_id } = req.params;
  try {
    const plantNeeds = await PlantNeeds.findAll({
      where: {
        plot_id: plot_id,
      },
    });
    res.json(plantNeeds);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching plant needs", error: error.message });
  }
};

exports.updatePlantNeed = async (req, res) => {
  const { crop_id } = req.params;
  const { crop_name, optimal_moisture, water_requirement } = req.body;

  try {
    const plantNeed = await PlantNeeds.findByPk(crop_id);
    if (!plantNeed) {
      return res.status(404).json({ message: "Plant need not found" });
    }
    plantNeed.crop_name = crop_name;
    plantNeed.optimal_moisture = optimal_moisture;
    plantNeed.water_requirement = water_requirement;
    await plantNeed.save();

    res.json({ message: "Plant need updated successfully", plantNeed });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating plant need", error: error.message });
  }
};

exports.deletePlantNeed = async (req, res) => {
  const { crop_id } = req.params;

  try {
    const plantNeed = await PlantNeeds.findByPk(crop_id);
    if (!plantNeed) {
      return res.status(404).json({ message: "Plant need not found" });
    }
    await plantNeed.destroy();
    res.json({ message: "Plant need deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting plant need", error: error.message });
  }
};
