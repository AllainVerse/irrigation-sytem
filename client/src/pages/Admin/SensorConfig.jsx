import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SensorConfig = () => {
  const [plots, setPlots] = useState([]);
  const [selectedPlotId, setSelectedPlotId] = useState("");

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

  useEffect(() => {
    fetchPlots();
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-start justify-center py-8 md:py-10 gap-4 mb-10">
      {/* Left Section - Table */}
      <div className="w-full max-w-lg md:max-w-3xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
            Sensor Device Configuration
          </h1>
        </div>

        {/* Table Content */}
        <table className="w-full text-left text-black">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                No.
              </th>
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                Nama Sensor
              </th>
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">1.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 1</td>
              <td className="py-2 px-2 md:px-3 font-poppins">
                <div className="flex gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded-md">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">2.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 2</td>
              <td className="py-2 px-2 md:px-3 font-poppins">
                <div className="flex gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded-md">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">3.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 3</td>
              <td className="py-2 px-2 md:px-3 font-poppins">
                <div className="flex gap-2">
                  <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded-md">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Section - Form */}
      <div className="w-full max-w-sm bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-poppins font-bold text-black mb-4">
          Configuration
        </h2>
        <form className="flex flex-col gap-3">
          <label htmlFor="plotSelect" className="font-poppins text-black">
            Pilih Petak
          </label>
          <select
            id="plotSelect"
            className="p-2 rounded-xl bg-white text-black border border-gray-300"
            value={selectedPlotId}
            onChange={(e) => setSelectedPlotId(e.target.value)}
          >
            {plots.map((plot) => (
              <option key={plot.plot_id} value={plot.plot_id}>
                {plot.plot_name}
              </option>
            ))}
          </select>
          <label htmlFor="plotName" className="font-poppins text-black">
            Nama Sensor
          </label>
          <input
            type="text"
            placeholder="Nama Sensor"
            className="p-2 rounded-xl bg-white text-black border border-gray-300"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SensorConfig;
