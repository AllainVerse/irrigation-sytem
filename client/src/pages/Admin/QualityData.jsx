import React, { useState, useEffect } from "react";
import axios from "axios";

const QualityData = () => {
  const [plots, setPlots] = useState([]); // Untuk menyimpan daftar plot
  const [plotsData, setPlotsData] = useState([]); // Untuk menyimpan data semua plot
  const token = localStorage.getItem("token");

  // Fungsi untuk mengambil daftar plot
  const fetchPlots = async () => {
    try {
      const response = await axios.get("http://localhost:3000/plots", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetched Plots:", response.data);
      setPlots(response.data);

      // Setelah mendapatkan daftar plot, ambil data untuk setiap plot
      const plotsDataPromises = response.data.map((plot) =>
        axios.get(`http://localhost:3000/plots/${plot.plot_id}/data`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      );

      // Tunggu semua request selesai
      const responses = await Promise.all(plotsDataPromises);

      // Gabungkan data plot dengan data kualitas tanah
      const allPlotsData = response.data.map((plot, index) => ({
        ...plot,
        ...responses[index].data,
      }));

      console.log("All Plots Data:", allPlotsData);
      setPlotsData(allPlotsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPlots();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center md:py-10 mb-10">
        <div className="w-full max-w-3xl md:max-w-5xl bg-[#DFEDC0] p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
              Land Quality Data
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-black mb-12">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    No.
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Plot Name
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Nitrogen
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Phospor
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Potassium
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Temperature
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Humidity
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    pH
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Rainfall
                  </th>
                </tr>
              </thead>
              <tbody>
                {plotsData.map((plot, index) => (
                  <tr key={plot.plot_id} className="border-b border-black">
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {index + 1}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins font-medium">
                      {plot.plot_name}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.nitrogen}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.phosphorus}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.potassium}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.temperature}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.humidity}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.ph}
                    </td>
                    <td className="py-2 px-2 md:px-3 font-poppins">
                      {plot.rainfall}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityData;
