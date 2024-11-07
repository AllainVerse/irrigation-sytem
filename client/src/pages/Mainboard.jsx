import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import Ph from "../assets/ph.png";
import Nitrogen from "../assets/nitrogen.png";
import Phosphor from "../assets/phosphor.png";
import Potasium from "../assets/potasium.png";
import Rainfall from "../assets/rainfall.png";
import Temperature from "../assets/temperature.png";
import Humidity from "../assets/humidity.png";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const Mainboard = () => {
  const { plot_id } = useParams();
  const [plots, setPlots] = useState([]);
  const [selectedPlotId, setSelectedPlotId] = useState("");
  const [plotData, setPlotData] = useState(null); // State to store specific plot data
  const navigate = useNavigate();

  useEffect(() => {
    fetchPlots();
  }, []);

  useEffect(() => {
    if (plot_id) {
      fetchPlotData(plot_id);
    }
  }, [plot_id]);

  const fetchPlots = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/plots", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched Plots:", response.data);
      setPlots(response.data);
    } catch (error) {
      console.error("Error fetching plots:", error);
    }
  };

  const fetchPlotData = async (plot_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/plots/${plot_id}/data`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPlotData(response.data); // Set plot data yang diambil
    } catch (error) {
      console.error("Error fetching plot data:", error);
    }
  };

  const handlePlotChange = (event) => {
    const selectedPlotId = event.target.value;
    setSelectedPlotId(selectedPlotId);
    fetchPlotData(selectedPlotId); // Fetch data ketika plot baru dipilih

    // Update URL untuk plot_id baru
    navigate(`/Mainboard/${selectedPlotId}`);
  };

  const handleInputDataClick = () => {
    if (selectedPlotId) {
      navigate(`/plots/${selectedPlotId}/predict`);
    } else {
      alert("Please select a plot first.");
    }
  };

  const upperBoxData = [
    { label: "pH Condition", value: plotData?.ph || "N/A", icon: Ph },
    { label: "Humidity", value: plotData?.humidity || "N/A", icon: Humidity },
    {
      label: "Temperature",
      value: plotData?.temperature || "N/A",
      icon: Temperature,
    },
    {
      label: "Phosphor Level",
      value: plotData?.phosphorus || "N/A",
      icon: Phosphor,
    },
  ];

  const lowerBoxData = [
    {
      label: "Potassium Level",
      value: plotData?.potassium || "N/A",
      icon: Potasium,
    },
    {
      label: "Nitrogen Level",
      value: plotData?.nitrogen || "N/A",
      icon: Nitrogen,
    },
    {
      label: "Rainfall Rate",
      value: plotData?.rainfall || "N/A",
      icon: Rainfall,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <NavbarLoggedin />

      {/* Form Pilihan */}
      <div className="p-8 flex flex-col items-center justify-center mt-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-screen-lg">
          <select
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center"
            onChange={handlePlotChange}
            value={selectedPlotId}
          >
            <option value="">Pilih Petak</option>
            {plots.map((plot) => (
              <option key={plot.plot_id} value={plot.plot_id}>
                {plot.plot_name}
              </option>
            ))}
          </select>

          <select className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center">
            <option>Pilih Frekuensi Irigasi</option>
            <option>1x per Hari</option>
            <option>2x per Hari</option>
          </select>

          <select className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center">
            <option>Pilih Sensor</option>
            <option>Sensor 1</option>
            <option>Sensor 2</option>
          </select>

          <input
            type="time"
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold col-start-1 sm:col-start-2 text-center"
            placeholder="Alarm"
          />

          <div className="flex justify-start col-start-1">
            <button
              onClick={handleInputDataClick}
              className="bg-[#F5F5DC] text-black font-poppins font-semibold p-2 rounded-lg w-2/3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Input Data
            </button>
          </div>

          <input
            type="text"
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold col-start-1 sm:col-start-2 w-full"
            placeholder="Jenis Tanaman"
          />
        </div>
      </div>

      {/* Kotak Informasi Atas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F5FFDE] p-4 lg:p-8 mt-14 mx-auto max-w-full justify-items-center">
        {upperBoxData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-6 bg-[#DFEDC0] rounded-lg shadow-lg text-center outline outline-4 outline-black w-full"
            style={{ aspectRatio: "1/1", maxWidth: "220px" }}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="absolute top-0 left-0 w-12 h-12 m-2"
            />
            <h3 className="text-6xl font-bold text-black mt-16">
              {item.value}
              {item.label === "Temperature" && (
                <span className="text-3xl relative -top-7">°C</span>
              )}
            </h3>
            <p className="text-lg text-black font-semibold mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Kotak Informasi Bawah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5FFDE] p-4 lg:p-8 mx-auto max-w-full justify-items-center mb-32">
        {lowerBoxData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-6 bg-[#DFEDC0] rounded-lg shadow-lg text-center outline outline-4 outline-black w-full"
            style={{ aspectRatio: "1/1", maxWidth: "220px" }}
          >
            <img
              src={item.icon}
              alt={item.label}
              className="absolute top-0 left-0 w-12 h-12 m-2"
            />
            <h3 className="text-6xl font-bold text-black font-poppins mt-16">
              {item.value}
            </h3>
            <p className="text-lg text-black font-semibold mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainboard;
