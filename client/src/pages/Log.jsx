import React, { useState } from "react";
import Logo from "../assets/logo-removebg-preview.png";
import Cloudy from "../assets/cloudy.png";
import UserProfile from "../assets/logo-user.png";
import SearchIcon from "../assets/search.png";
import Footer from "../components/Footer/Footer";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const Log = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      {/* Navbar */}
      <header >
      <NavbarLoggedin />
        {/* Logo dan Nama Aplikasi */}
        {/* <div className="flex items-center">
          <img src={Logo} alt="Irrigo Logo" className="w-16 h-16 md:w-20 md:h-20 mr-2 -mt-2" />
          <div>
            <h1 className="text-lg text-[#DFEDC0] md:text-xl font-lilita -ml-3">IRRIGO</h1>
          </div>
        </div> */}

        {/* Hamburger Button for Mobile */}
        {/* <button
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
        </button> */}

        {/* Navigasi */}
        {/* <nav
          className={`${isNavOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:flex items-center text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-[rgba(171,181,152,0.38)] md:bg-transparent md:space-x-11 text-center md:opacity-100 md:max-h-full`}
        >
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4 focus:bg-transparent focus:text-[#ffffff] focus:shadow-lg focus:shadow-[#00000055] active:shadow-sm active:scale-95"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-Inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4 focus:bg-transparent focus:text-[#ffffff] focus:shadow-lg focus:shadow-[#00000055] active:shadow-sm active:scale-95"
          >
            Features
          </a>
          <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4 focus:bg-transparent focus:text-[#ffffff] focus:shadow-lg focus:shadow-[#00000055] active:shadow-sm active:scale-95"
          >
            Articles
          </a>
        </nav> */}

        {/* Informasi Cuaca dan Profil Pengguna */}
        {/* <div className="hidden md:flex items-center font-poppins">
          <div className="flex items-center mr-3 lg:mr-5">
            <div className="flex flex-col text-right mr-3">
              <h2 className="text-sm md:text-2xl font-poppins -mx-0">30°</h2>
              <span className="text-xs md:text-xs -mt-1 -mx-0">Cloudy</span>
            </div>
            <img src={Cloudy} alt="Cloudy Icon" className="w-6 h-6 md:w-10 md:h-10 ml-1" />
          </div>
          <span className="text-xs font-instrument md:text-sm ml-4">Ale Perdana</span>
          <img
            src={UserProfile} 
            alt="User Profile"
            className="w-4 h-4 md:w-8 md:h-8 ml-4 mr-4 rounded-full"
          />
        </div> */}
      </header>

      {/* Irrigation Log Section */}
      <section className="flex flex-col items-center py-8 md:py-10 mb-20 mt-20"> {/* Menambahkan margin-bottom */}
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
          <table className="w-full text-center text-black mb-12">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">Tanggal</th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">Waktu Mulai</th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">Waktu Selesai</th>
                <th className="py-2 px-2 md:px-3 font-poppins font-medium">Water Used</th>
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Log;
