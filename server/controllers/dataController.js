const { SensorData } = require("../models");
const axios = require("axios");

exports.predictPlant = async (req, res) => {
  const { plot_id } = req.params;
  const {
    nitrogen,
    phosphorus,
    potassium,
    temperature,
    humidity,
    ph,
    rainfall,
  } = req.body;

  try {
    const fastApiResponse = await axios.post("http://127.0.0.1:8000/predict", {
      N: nitrogen,
      P: phosphorus,
      K: potassium,
      temperature: temperature,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
    });

    const predictedLabel = fastApiResponse.data.prediction;

    const updateSensorData = await SensorData.findOne({
      where: { plot_id: plot_id },
    });

    if (updateSensorData) {
      updateSensorData.nitrogen = nitrogen;
      updateSensorData.phosphorus = phosphorus;
      updateSensorData.potassium = potassium;
      updateSensorData.temperature = temperature;
      updateSensorData.humidity = humidity;
      updateSensorData.ph = ph;
      updateSensorData.rainfall = rainfall;
      updateSensorData.label = predictedLabel;
      await updateSensorData.save();

      res.json({
        message: "Plot data updated successfully",
        labelPredicted: updateSensorData.label,
      });
      return;
    }

    const newSensorData = await SensorData.create({
      plot_id: plot_id,
      nitrogen: nitrogen,
      phosphorus: phosphorus,
      potassium: potassium,
      temperature: temperature,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
      label: predictedLabel,
    });

    res.status(200).json({
      message: "Data berhasil disimpan",
      labelPredicted: newSensorData.label,
    });
  } catch (error) {
    console.error("Error: ", error.response || error.message);
    res.status(500).json({ error: "Terjadi kesalahan pada server" });
  }
};

exports.getDataPlot = async (req, res) => {
  const { plot_id } = req.params;

  try {
    const data = await SensorData.findOne({ where: { plot_id: plot_id } });
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Data Plot", error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const data = await SensorData.findAll();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching Data Plot", error: error.message });
  }
};
