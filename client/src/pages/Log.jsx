import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "../assets/search.png";
import Footer from "../components/Footer/Footer";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const Log = () => {
  const [logs, setLogs] = useState([]); // Initialize logs as an empty array
  const [loading, setLoading] = useState(true); // Loading state

  const fetchIrrigationLog = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/irrigation-log/schedule-log", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      // Ensure data is an array before setting it to logs
      setLogs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      setLogs([]); // Set logs to an empty array on error
    } finally {
      setLoading(false); // Update loading state
    }
  };

  useEffect(() => {
    fetchIrrigationLog(); // Fetch logs on component mount
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      {/* Navbar */}
      <NavbarLoggedin />

      {/* Irrigation Log Section */}
      <section className="flex flex-col items-center mb-28 mt-28">
        <div className="w-full max-w-3xl md:max-w-5xl bg-[#DFEDC0] p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
              Irrigation Log
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pilih Petak"
                  className="bg-white text-black p-2 pl-4 rounded-full shadow-md text-xs md:text-sm w-56 md:w-64"
                />
                <img
                  src={SearchIcon}
                  alt="Search Icon"
                  className="absolute right-3 top-3 w-4 h-4"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pilih Tahun"
                  className="bg-white text-black p-2 pl-4 rounded-full shadow-md text-xs md:text-sm w-56 md:w-64"
                />
                <img
                  src={SearchIcon}
                  alt="Search Icon"
                  className="absolute right-3 top-3 w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Tabel Log Irigasi */}
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-black text-center">Loading...</p>
            ) : (
              <table className="w-full text-center text-black mb-12">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                      Plot ID
                    </th>
                    <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                      Tanggal
                    </th>
                    <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                      Waktu Mulai
                    </th>
                    <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                      Waktu Selesai
                    </th>
                    <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                      Water Used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((log, index) => (
                    <tr key={index} className="border-b border-black">
                      <td className="py-2 px-2 md:px-3 font-poppins">
                        {log.plot_id}
                      </td>
                      <td className="py-2 px-2 md:px-3 font-poppins">
                        {log.log_date}
                      </td>
                      <td className="py-2 px-2 md:px-3 font-poppins">
                        {log.start_time}
                      </td>
                      <td className="py-2 px-2 md:px-3 font-poppins">
                        {log.end_time}
                      </td>
                      <td className="py-2 px-2 md:px-3 font-poppins">
                        {log.water_used} L
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Log;
