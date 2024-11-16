import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-new.png";
import Cloudy from "../../assets/cloudy.png";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [weatherData, setWeatherData] = useState({ temp: null, description: "" });
  const [locationError, setLocationError] = useState(null);

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
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
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

  return (
    <>
      <header className="bg-[#4f6557] backdrop-filter backdrop-blur-md p-2 flex justify-between items-center h-24 sticky top-0 z-50">
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

        <div className="flex items-center mr-5 md:hidden">
          <button
            className="text-white focus:outline-none ml-2"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <MdMenu className="text-white w-6 h-6" />
          </button>
        </div>

        <nav
          className={`${isNavOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            } transition-all duration-500 ease-in-out overflow-hidden md:flex items-center text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-primary md:bg-transparent md:space-x-11 text-center md:opacity-100 md:max-h-full`}
        >
          <a
            href="/"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Home
          </a>
          <a
            href="/Feature"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-Inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Features
          </a>
          <a
            href="/Articlespage"
            className="block md:inline-block mx-auto py-2 md:py-0 text-[#DFEDC0] font-inter font-bold transition duration-700ms ease-in-out hover:text-[#ffffff] hover:underline hover:underline-offset-4"
          >
            Articles
          </a>
        </nav>

        <div className="hidden md:flex items-center font-poppins">
          <div className="flex items-center mr-3 lg:mr-5">
            <div className="flex flex-col text-right mr-2">
              <h2 className="text-sm md:text-2xl font-poppins text-white -mx-0">
                {weatherData.temp !== null ? `${weatherData.temp}°C` : locationError || "Loading..."}
              </h2>
              <span className="text-xs md:text-xs -mt-1 text-white -mx-0">
                {weatherData.description || locationError || "Loading..."}
              </span>
            </div>
            <img
              src={Cloudy}
              alt="Cloudy Icon"
              className="w-6 h-6 md:w-10 md:h-10 mr-5"
            />
            <div className="flex items-center gap-4">
              <a
                className="hover:bg-white bg-bgLogin text-white font-semibold hover:text-green-700 rounded-md mx-2 px-6 py-2 duration-200 hidden md:block"
                href="/login"
              >
                Log In
              </a>

              <a
                className="hover:bg-customColor text-white font-semibold hover:text-white rounded-md  border-2 border-slate-50 px-4 py-2 duration-200 hidden md:block"
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
