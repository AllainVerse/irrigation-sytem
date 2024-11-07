import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const DataForm = () => {
  const { plot_id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [predictedLabel, setPredictedLabel] = useState("");

  // Fungsi untuk mengupdate nilai setiap input di form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Mengirim data ke FastAPI untuk mendapatkan prediksi
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        N: parseFloat(formData.nitrogen),
        P: parseFloat(formData.phosphorus),
        K: parseFloat(formData.potassium),
        temperature: parseFloat(formData.temperature),
        humidity: parseFloat(formData.humidity),
        ph: parseFloat(formData.ph),
        rainfall: parseFloat(formData.rainfall),
      });

      const prediction = response.data.prediction;
      setPredictedLabel(prediction);

      // Mengirim data dan prediksi ke server untuk disimpan di database
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:3000/plots/${plot_id}/predict`,
        {
          nitrogen: formData.nitrogen,
          phosphorus: formData.phosphorus,
          potassium: formData.potassium,
          temperature: formData.temperature,
          humidity: formData.humidity,
          ph: formData.ph,
          rainfall: formData.rainfall,
          prediction: prediction, // Menyimpan hasil prediksi
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Data berhasil disimpan dengan label prediksi: " + prediction);
      navigate(`/Mainboard/${plot_id}`);
    } catch (error) {
      console.error("Error: ", error);
      alert("Terjadi kesalahan pada server");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <NavbarLoggedin />

      <div className="w-full max-w-5xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg mx-auto mt-10 mb-10">
        <h2 className="text-lg font-poppins font-bold text-black mb-4">
          Configuration
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-3">
            <label htmlFor="temperature" className="font-poppins text-black">
              Temperature
            </label>
            <input
              type="text"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Temperature"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="phosphorus" className="font-poppins text-black">
              Phosphor
            </label>
            <input
              type="text"
              name="phosphorus"
              value={formData.phosphorus}
              onChange={handleChange}
              placeholder="Phosphor"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="nitrogen" className="font-poppins text-black">
              Nitrogen
            </label>
            <input
              type="text"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              placeholder="Nitrogen"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="potassium" className="font-poppins text-black">
              Potassium
            </label>
            <input
              type="text"
              name="potassium"
              value={formData.potassium}
              onChange={handleChange}
              placeholder="Potassium"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-3">
            <label htmlFor="humidity" className="font-poppins text-black">
              Humidity
            </label>
            <input
              type="text"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              placeholder="Humidity"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="ph" className="font-poppins text-black">
              pH
            </label>
            <input
              type="text"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              placeholder="pH"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="rainfall" className="font-poppins text-black">
              Curah Hujan
            </label>
            <input
              type="text"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              placeholder="Curah Hujan"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />
          </div>

          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>

        {predictedLabel && (
          <p className="text-black mt-4 font-poppins">
            Label Prediksi: {predictedLabel}
          </p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DataForm;
