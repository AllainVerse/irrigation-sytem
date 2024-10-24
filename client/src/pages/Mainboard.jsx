import React, { useState } from "react";
import Logo from "../assets/logo-removebg-preview.png";
import Cloudy from "../assets/cloudy.png";
import UserProfile from "../assets/logo-user.png";
import Footer from "@/components/Footer/Footer";
import Ph from "../assets/ph.png";
import Nitrogen from "../assets/nitrogen.png";
import Phosphor from "../assets/phosphor.png";
import Potasium from "../assets/potasium.png";
import Rainfall from "../assets/rainfall.png";
import Temperature from "../assets/temperature.png";
import Humidity from "../assets/humidity.png";

const Mainboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      {/* Navbar */}
      <header className="bg-[rgba(171,181,152,0.38)] p-2 flex justify-between items-center h-20">
        {/* Logo dan Nama Aplikasi */}
        <div className="flex items-center">
          <img src={Logo} alt="Irrigo Logo" className="w-24 h-24 md:w-28 md:h-28 mr-2 -mt-2" />
          <div>
            <h1 className="text-lg text-[#DFEDC0] md:text-xl font-lilita -ml-3">IRRIGO</h1>
          </div>
        </div>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigasi */}
        <nav
          className={`${isNavOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:flex items-center text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-[rgba(171,181,152,0.38)] md:bg-transparent md:space-x-11 text-center md:opacity-100 md:max-h-full`}
        >
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-Inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Features
          </a>
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Articles
          </a>
        </nav>

        {/* Informasi Cuaca dan Profil Pengguna */}
        <div className="hidden md:flex items-center font-poppins">
          <div className="flex items-center mr-3 lg:mr-5">
            <div className="flex flex-col text-right mr-3">
              <h2 className="text-sm md:text-2xl font-poppins -mx-0">30°</h2>
              <span className="text-xs md:text-xs -mt-1 -mx-0">Cloudy</span>
            </div>
            <img src={Cloudy} alt="Cloudy Icon" className="w-6 h-6 md:w-10 md:h-10 ml-1" />
          </div>

          <a href="/user-profile" className="text-xs font-instrument md:text-sm ml-4 cursor-pointer hover:underline">
            Ale Perdana
          </a>
          
          <a href="/user-profile">
            <img
              src={UserProfile}
              alt="User Profile"
              className="w-4 h-4 md:w-8 md:h-8 ml-4 mr-4 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110 active:scale-90"
            />
          </a>
        </div>
      </header>

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
