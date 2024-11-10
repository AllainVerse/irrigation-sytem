import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import Ph from "../assets/ph.png";
import Nitrogen from "../assets/nitrogen.png";
import Phosphor from "../assets/phosphor.png";
import Potasium from "../assets/potasium.png";
import Rainfall from "../assets/rainfall.png";
import SearchIcon from "../assets/search.png";
import Temperature from "../assets/temperature.png";
import Humidity from "../assets/humidity.png";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const Mainboard = () => {
  const { plot_id } = useParams();
  const [plots, setPlots] = useState([]);
  const [selectedPlotId, setSelectedPlotId] = useState("");
  const [plotData, setPlotData] = useState(null);
  const [scheduleId, setScheduleId] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchPlots();
  }, []);

  useEffect(() => {
    if (plot_id) {
      fetchPlotData(plot_id);
      fetchIrrigationSchedule(plot_id);
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

  const fetchIrrigationSchedule = async (plot_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/plots/${plot_id}/schedule`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSchedules(response.data); // Perbaiki ini, jangan atur `setPlotData`
    } catch (error) {
      console.error("Error fetching schedule:", error);
      setSchedules([]); // Tetapkan array kosong jika ada error
    }
  };

  const handlePlotChange = (event) => {
    const selectedPlotId = event.target.value;
    setSelectedPlotId(selectedPlotId);
    fetchPlotData(selectedPlotId); // Fetch data ketika plot baru dipilih
    fetchIrrigationSchedule(selectedPlotId);

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

  const handleCreateSchedule = async () => {
    if (!selectedPlotId || !startTime || !endTime || !selectedFrequency) {
      alert("Please complete all fields to create a schedule.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/plots/${selectedPlotId}/schedule`,
        {
          start_time: startTime,
          end_time: endTime,
          frequency: selectedFrequency,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Schedule created successfully!");
      console.log("Created schedule:", response.data);
      await fetchIrrigationSchedule(selectedPlotId);
    } catch (error) {
      console.error("Error creating schedule:", error);
      alert("Failed to create schedule. Please try again.");
    }
  };

  const handleEditSchedule = (schedule) => {
    setStartTime(schedule.start_time);
    setEndTime(schedule.end_time);
    setSelectedFrequency(schedule.frequency);
    setScheduleId(schedule.schedule_id); // tambahkan baris ini untuk menyimpan id jadwal
  };

  const handleUpdateSchedule = async () => {
    if (!startTime || !endTime || !selectedFrequency) {
      alert("Please complete all fields before updating the schedule.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost:3000/plots/${selectedPlotId}/schedule/${scheduleId}`,
        {
          start_time: startTime,
          end_time: endTime,
          frequency: selectedFrequency,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Schedule updated successfully!");
      await fetchIrrigationSchedule(selectedPlotId); // Refresh the list of schedules
    } catch (error) {
      console.error("Error updating schedule:", error);
      alert("Failed to update schedule. Please try again.");
    }
  };

  const handleDeleteSchedule = async (scheduleId, plotId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/plots/${plotId}/schedule/${scheduleId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("Schedule deleted successfully:", response.data);
      await fetchIrrigationSchedule(selectedPlotId);
    } catch (error) {
      console.error("Error deleting schedule:", error);
    }
  };

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

          <select
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center"
            onChange={(e) => setSelectedFrequency(e.target.value)}
            value={selectedFrequency}
          >
            <option value="">Pilih Frekuensi Irigasi</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <select className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center">
            <option>Pilih Sensor</option>
            <option>Sensor 1</option>
            <option>Sensor 2</option>
          </select>

          <input
            type="time"
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold col-start-1 sm:col-start-2 text-center"
            placeholder="Start Time"
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
          />

          <input
            type="text"
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold w-full"
            placeholder="Jenis Tanaman"
          />

          <input
            type="time"
            className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold col-start-1 sm:col-start-2 text-center"
            placeholder="End Time"
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
          />

          <div className="flex justify-start col-start-1">
            <button
              onClick={handleInputDataClick}
              className="bg-[#F5F5DC] text-black font-poppins font-semibold p-2 rounded-lg w-2/3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Input Data
            </button>
          </div>

          <div className="flex justify-between col-start-1 sm:col-start-2 w-full">
            <button
              onClick={handleCreateSchedule}
              className="bg-[#F5F5DC] text-black font-poppins font-semibold p-2 rounded-lg w-[48%] transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Create Schedule
            </button>

            <button
              onClick={handleUpdateSchedule}
              className="bg-[#F5F5DC] text-black font-poppins font-semibold p-2 rounded-lg w-[48%] transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              Update Schedule
            </button>
          </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5FFDE] p-4 lg:p-8 mx-auto max-w-full justify-items-center mb-10">
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

      {/* tabel data frekuensi irigasi */}
      <section className="flex flex-col md:flex-row items-start justify-center py-8 md:py-10 gap-4 mb-10">
        {/* Left Section - Table */}
        <div className="w-full max-w-lg md:max-w-3xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
              Irrigation Frequency
            </h1>
            <div className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Cari Sensor"
                className="bg-white text-black p-2 pl-4 rounded-full shadow-md text-xs md:text-sm w-56 md:w-64"
              />
              <img
                src={SearchIcon}
                alt="Search Icon"
                className="absolute right-3 top-3 w-4 h-4"
              />
            </div>
          </div>

          {/* Table Content */}
          <table className="w-full text-left text-black">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                  No.
                </th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                  Frekuensi
                </th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                  Start Time
                </th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                  End Time
                </th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {(schedules || []).map((schedule, index) => (
                <tr key={index} className="border-b border-black">
                  <td className="py-2 px-2 md:px-3">{index + 1}</td>
                  <td className="py-2 px-2 md:px-3">{schedule.frequency}</td>
                  <td className="py-2 px-2 md:px-3">{schedule.start_time}</td>
                  <td className="py-2 px-2 md:px-3">{schedule.end_time}</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">
                    <button
                      onClick={() => handleEditSchedule(schedule)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded-md mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        handleDeleteSchedule(
                          schedule.schedule_id,
                          selectedPlotId
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md mr-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainboard;
