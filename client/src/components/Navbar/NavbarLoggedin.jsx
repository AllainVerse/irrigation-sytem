import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-new.png";
import Cloudy from "../../assets/cloudy.png"; 
import Rainy from "../../assets/rainny.png";   
import Clear from "../../assets/clear.png";    
import UserProfile from "../../assets/logo-user.png";
import { useLogin } from "@/pages/Auth/useLogin";

const NavbarLoggedin = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({ temp: null, description: "", main: "" });
  const [locationError, setLocationError] = useState(null);
  const username = useLogin();

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      const apiKey = "672910821ead9c520f88606a4bdaef7d";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=id`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Gagal mengambil data cuaca");
        }
        const data = await response.json();
        setWeatherData({
          temp: data.main.temp,
          description: data.weather[0].description,
          main: data.weather[0].main, 
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            setLocationError("Tidak dapat mengambil lokasi. Mohon periksa izin lokasi di browser.");
          }
        );
      } else {
        setLocationError("Geolocation tidak didukung di browser ini.");
      }
    };

    getLocation();
  }, []);


  const weatherIconMapping = {
    Clear: Clear,    
    Clouds: Cloudy, 
    Rain: Rainy,     
  };

  const weatherIcon = weatherIconMapping[weatherData.main] || Cloudy; 

  return (
    <>
      <header className="bg-[rgba(171,181,152,0.38)] backdrop-filter backdrop-blur-md p-2 flex justify-between items-center h-24 sticky top-0 z-50">
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

        {/* Mobile View */}
        <div className="flex items-center mr-5 md:hidden">
          <a
            href="/profile"
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
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        <nav
          className={`${isNavOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:flex items-center text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent md:space-x-11 text-center md:opacity-100 md:max-h-full`}
        >
          <a href="/Mainboard" className="text-[#DFEDC0] font-inter font-bold hover:underline">
            Home
          </a>
          <a href="/Feature" className="text-[#DFEDC0] font-inter font-bold hover:underline">
            Features
          </a>
          <a href="/Articlespage" className="text-[#DFEDC0] font-inter font-bold hover:underline">
            Articles
          </a>

          {/* Weather data Responsive View */}
          <div className="block md:hidden text-[#DFEDC0] my-4">
            <h2 className="text-lg font-semibold">
              {weatherData.temp !== null ? `${Math.round(weatherData.temp)}°C` : locationError || "Loading..."}
            </h2>
            <span className="text-sm">
              {weatherData.description || locationError || "Loading..."}
            </span>
            <img
              src={weatherIcon}
              alt="Weather Icon"
              className="w-6 h-6 md:w-10 md:h-10 mx-auto mt-1"
            />
          </div>
        </nav>

        {/* Desktop View */}
        <div className="hidden md:flex items-center font-poppins">
          <div className="flex items-center mr-3 lg:mr-5">
            <div className="flex flex-col text-right mr-3">
              <h2 className="text-lg md:text-2x1">
                {weatherData.temp !== null ? `${Math.round(weatherData.temp)}°C` : locationError || "Loading..."}
              </h2>
              <span className="text-lg md:text-sm -mt-1 -mx-0">
                {weatherData.description || locationError || "Loading..."}
              </span>
            </div>
            <img
              src={weatherIcon}
              alt="Weather Icon"
              className="w-6 h-6 md:w-10 md:h-10 ml-1"
            />
          </div>

          <a href="/profile" className="text-xs font-instrument md:text-sm ml-4 hover:underline">
            {username}
          </a>

          <a href="/profile">
            <img
              src={UserProfile}
              alt="User Profile"
              className="w-4 h-4 md:w-8 md:h-8 ml-4 rounded-full hover:scale-110"
            />
          </a>

          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-xs font-instrument md:text-sm mt-2 mr-4 ml-1 hover:underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <button
                  className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("name");
                    window.location.href = "/";
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarLoggedin;
