const { Device } = require("../models");

exports.createDevice = async (req, res) => {
  const { plot_id } = req.params;
  const { device_name } = req.body;

  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const device = await Device.create({
      device_name,
      user_id: req.user.id,
      plot_id: plot_id,
    });

    res.status(201).json({ message: "Device created successfully", device });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating device", error: error.message });
  }
};

exports.getDevices = async (req, res) => {
  const { plot_id } = req.params;

  try {
    const device = await Device.findAll({
      where: {
        plot_id: plot_id,
      },
    });
    res.json(device);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching device", error: error.message });
  }
};

exports.updateDevice = async (req, res) => {
  const { device_id } = req.params;
  const { device_name } = req.body;

  try {
    const device = await Device.findByPk(device_id);
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    device.device_name = device_name;
    await device.save();

    res.json({ message: "Device updated successfully", device });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating device", error: error.message });
  }
};

exports.deleteDevice = async (req, res) => {
  const { device_id } = req.params;

  try {
    const device = await Device.findByPk(device_id);
    if (!device) {
      return res.status(404).json({ message: "Device not found" });
    }
    await device.destroy();
    res.json({ message: "Device deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting device", error: error.message });
  }
};
