import React, { useState } from "react";
import logo from "../../assets/logo-new.png";
import Cloudy from "../../assets/cloudy.png";
import UserProfile from "../../assets/logo-user.png";
import { useLogin } from "@/pages/Auth/useLogin";

const NavbarLoggedin = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const username = useLogin();

  return (
    <>
      {/* Navbar */}
      <header className="bg-[rgba(171,181,152,0.38)] backdrop-filter backdrop-blur-md p-2 flex justify-between items-center h-24 sticky top-0 z-50">
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
          <a
            href="/user-profile"
            className="text-xs font-instrument ml-4 cursor-pointer hover:underline"
          >
            {username}
          </a>
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
          {/* <a
            href="#"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              window.location.href = "/";
            }}
          >
            Logout
          </a> */}
        </nav>

        {/* Informasi Cuaca dan Profil Pengguna */}
        <div className="hidden md:flex items-center font-poppins">
          <div className="flex items-center mr-3 lg:mr-5">
            <div className="flex flex-col text-right mr-3">
              <h2 className="text-sm md:text-2xl font-poppins -mx-0">30°</h2>
              <span className="text-xs md:text-xs -mt-1 -mx-0">Cloudy</span>
            </div>
            <img
              src={Cloudy}
              alt="Cloudy Icon"
              className="w-6 h-6 md:w-10 md:h-10 ml-1"
            />
          </div>

          <a
            href="/user-profile"
            className="text-xs font-instrument md:text-sm ml-4 cursor-pointer hover:underline"
          >
            {username}
          </a>

          <a href="/user-profile">
            <img
              src={UserProfile}
              alt="User Profile"
              className="w-4 h-4 md:w-8 md:h-8 ml-4 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110 active:scale-90"
            />
          </a>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="text-xs font-instrument md:text-sm mt-2 mr-4 ml-1 cursor-pointer hover:underline"
                id="logout-dropdown-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() =>
                  document
                    .getElementById("logout-dropdown")
                    .classList.toggle("hidden")
                }
              >
                <span className="sr-only">Open logout dropdown</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
              id="logout-dropdown"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="logout-dropdown-button"
            >
              <button
                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("name");
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarLoggedin;
