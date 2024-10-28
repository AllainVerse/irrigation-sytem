const { SensorData } = require("../models");
const axios = require("axios");

exports.predictPlant = async (req, res) => {
  const { plot_id } = req.params; // Ambil plot_id dari parameter URL
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
    const fastApiResponse = await await axios.post(
      "http://127.0.0.1:8000/predict",
      {
        N: nitrogen,
        P: phosphorus,
        K: potassium,
        temperature: temperature,
        humidity: humidity,
        ph: ph,
        rainfall: rainfall,
      }
    );

    const predictedLabel = fastApiResponse.data.prediction;

    const newSensorData = await SensorData.create({
      plot_id: plot_id,
      nitrogen: nitrogen,
      phosphorus: phosphorus,
      potassium: potassium,
      temperature: temperature,
      humidity: humidity,
      ph: ph,
      rainfall: rainfall,
      label: predictedLabel, // Simpan hasil prediksi dari FastAPI
    });

    res.status(200).json({
      message: "Data berhasil disimpan",
      labelPredicted: newSensorData.label,
    });
  } catch (error) {
    console.error("Error: ", error);
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
