import React, { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo-new.png";
import Cloudy from "../../assets/cloudy.png";
import { NavbarMenu } from "../../mockData/data";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <header className="bg-[#4f6557] backdrop-filter backdrop-blur-md p-2 flex justify-between items-center h-24 sticky top-0 z-50 ">
        {/* Logo dan Nama Aplikasi */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Irrigo Logo"
            className="w-12 h-12 md:w-14 md:h-14 mr-2 -mt-2 mx-4"
          />
          <div className="mx-4">
            <h1 className="text-lg text-[#DFEDC0] md:text-xl font-lilita -ml-3">
              IRRIGO
            </h1>
          </div>
        </div>

        {/* Tampilkan username saat tampilan mobile dan tombol hamburger */}
        <div className="flex items-center mr-5 md:hidden">
          <button
            className="text-white focus:outline-none ml-2"
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
                d={
                  isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigasi */}
        <nav
          className={`${
            isNavOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-500 ease-in-out overflow-hidden md:flex items-center text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent md:space-x-11 text-center md:opacity-100 md:max-h-full`}
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
            <div className="flex flex-col text-right mr-2">
              <h2 className="text-sm md:text-2xl font-poppins -mx-0">30°</h2>
              <span className="text-xs md:text-xs -mt-1 -mx-0">Cloudy</span>
            </div>
            <img
              src={Cloudy}
              alt="Cloudy Icon"
              className="w-6 h-6 md:w-10 md:h-10 mr-5"
            />
            <div className="flex items-center gap-4">
              {/* <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button> */}
              <a
                className="hover:bg-white bg-bgLogin text-white font-semibold hover:text-green-700 rounded-md border-2  mx-2 px-6 py-2 duration-200 hidden md:block"
                href="/login"
              >
                Log In
              </a>
              <a
                className="hover:bg-customColor text-white font-semibold hover:text-white rounded-md border-2 border-white px-6 py-2 duration-200 hidden md:block"
                href="/register"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
