import React, { useState } from "react";
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
  const upperBoxData = [
    { label: "pH Condition", value: "37", icon: Ph },
    { label: "Humidity", value: "37", icon: Humidity },
    { label: "Temperature", value: "30", icon: Temperature },
    { label: "Phosphor Level", value: "37", icon: Phosphor },
  ];

  const lowerBoxData = [
    { label: "Potassium Level", value: "37", icon: Potasium },
    { label: "Nitrogen Level", value: "37", icon: Nitrogen },
    { label: "Rainfall Rate", value: "37", icon: Rainfall },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <NavbarLoggedin />

      {/* Form Pilihan */}
      <div className="p-8 flex flex-col items-center justify-center mt-6 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-screen-lg">
          <select className="p-2 rounded-lg bg-[#F5F5DC] text-black font-poppins font-semibold text-center">
            <option>Pilih Petak</option>
            <option>Petak 1</option>
            <option>Petak 2</option>
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
              className="bg-[#F5F5DC] text-black font-poppins font-semibold p-2 rounded-lg w-2/3 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              onClick={() => alert('Data telah diinput')}
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
            style={{
              aspectRatio: "1/1",
              maxWidth: "220px",
            }}
          >
            {/* Image */}
            <img
              src={item.icon}
              alt={item.label}
              className="absolute top-0 left-0 w-12 h-12 m-2"
            />
            {item.label === "Temperature" ? (
              <h3 className="text-6xl font-bold text-black mt-16">
                {item.value}
                <span className="text-3xl relative -top-7">°C</span>
              </h3>
            ) : (
              <h3 className="text-6xl font-bold text-black mt-16">
                {item.value}
              </h3>
            )}
            <p className="text-lg text-black font-semibold mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Kotak Informasi Bawah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#F5FFDE] p-4 lg:p-8 mx-auto max-w-full justify-items-center mb-32">
        {lowerBoxData.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center p-6 bg-[#DFEDC0] rounded-lg shadow-lg text-center outline outline-4 outline-black w-full"
            style={{
              aspectRatio: "1/1",
              maxWidth: "220px",
            }}
          >
            {/* Image */}
            <img
              src={item.icon}
              alt={item.label}
              className="absolute top-0 left-0 w-12 h-12 m-2"
            />
            <h3 className="text-6xl font-bold text-black font-poppins mt-16">
              {item.value}
            </h3>
            <p className="text-lg text-black font-semibold mt-2">{item.label}</p>
          </div>
        ))}
      </div>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Mainboard;
