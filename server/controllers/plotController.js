const { Plot } = require("../models");

exports.createPlot = async (req, res) => {
  const { plot_name, area } = req.body;

  try {
    const plot = await Plot.create({
      plot_name,
      area,
      user: req.user.id,
    });
    res.status(201).json({ message: "Plot created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating plot", error: error.message });
  }
};

exports.getPlot = async (req, res) => {
  try {
    const plot = await Plot.findAll();
    res.json(plot);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching plot", Error: error.message });
  }
};

exports.updatePlot = async (req, res) => {
  const { plot_id } = req.params;
  const { plot_name, area } = req.body;

  try {
    const plot = await Plot.findByPk(plot_id);
    if (!plot) {
      return res.status(404).json({ message: "Plot not found" });
    }
    plot.plot_name = plot_name;
    plot.area = area;
    await plot.save();

    res.json({ message: "Plot updated successfully", plot });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating plot", Error: error.message });
  }
};

exports.deletePlot = async (req, res) => {
  const { plot_id } = req.params;

  try {
    const plot = await Plot.findByPk(plot_id);
    if (!plot) {
      return res.status(404).json({ message: "Plot not found" });
    }
    await plot.destroy();
    res.json({ message: "Plot deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting plot", error: error.message });
  }
};
