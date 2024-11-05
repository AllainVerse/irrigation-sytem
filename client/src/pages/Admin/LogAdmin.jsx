import React, { useState } from "react";
import Logo from "../../assets/logo-removebg-preview.png";
import Cloudy from "../../assets/cloudy.png";
import UserProfile from "../../assets/logo-user.png";
import SearchIcon from "../../assets/search.png";

const LogAdmin = () => {
  return (
    <>
      <section className="flex flex-col items-center py-8 md:py-10 mb-10">
        {" "}
        {/* Menambahkan margin-bottom */}
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
          <table className="w-full text-left text-black">
            <thead>
              <tr className="border-b-2 border-black">
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
              <tr className="border-b border-black">
                <td className="py-2 px-2 md:px-3 font-poppins">7 Juni</td>
                <td className="py-2 px-2 md:px-3 font-poppins">4:00 PM</td>
                <td className="py-2 px-2 md:px-3 font-poppins">5:00 PM</td>
                <td className="py-2 px-2 md:px-3 font-poppins">10 L</td>
              </tr>
              <tr className="border-b border-black">
                <td className="py-2 px-2 md:px-3 font-poppins">8 Juni</td>
                <td className="py-2 px-2 md:px-3 font-poppins">4:00 PM</td>
                <td className="py-2 px-2 md:px-3 font-poppins">5:00 PM</td>
                <td className="py-2 px-2 md:px-3 font-poppins">15 L</td>
              </tr>
              <tr className="border-b border-black">
                <td className="py-2 px-2 md:px-3 font-poppins">10 Juni</td>
                <td className="py-2 px-2 md:px-3 font-poppins">7:00 AM</td>
                <td className="py-2 px-2 md:px-3 font-poppins">8:00 AM</td>
                <td className="py-2 px-2 md:px-5 font-poppins">5 L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default LogAdmin;
