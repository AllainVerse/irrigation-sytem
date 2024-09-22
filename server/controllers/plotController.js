const { Plot } = require("../models");

exports.createPlot = async (req, res) => {
  const { plot_name, area } = req.body;

  try {
    // Pastikan req.user.id ada
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const plot = await Plot.create({
      plot_name,
      area,
      user_id: req.user.id, // Ubah 'user' menjadi 'user_id'
    });

    res.status(201).json({ message: "Plot created successfully", plot });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating plot", error: error.message });
  }
};

// Ubah nama fungsi ini dari getPlot menjadi getPlots
exports.getPlots = async (req, res) => {
  try {
    const plots = await Plot.findAll(); // Ambil semua plot
    res.json(plots);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching plots", error: error.message });
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
      .json({ message: "Error updating plot", error: error.message });
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
