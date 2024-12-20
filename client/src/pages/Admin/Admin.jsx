import React, { useState } from "react";
import Navbar from "../../components/Navbar/NavbarLoggedin";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import LogAdmin from "./LogAdmin";
import PlotConfig from "./PlotConfig";
import SensorConfig from "./SensorConfig";
import QualityData from "./QualityData";
import CronJob from "./CronJob";

const Admin = () => {
  const [activePage, setActivePage] = useState("Admin"); // State halaman aktif
  const [open, setOpen] = useState(true);

  const role = localStorage.getItem("role");

  if (role !== "admin") {
    // window.location.href = "/login";
    alert("Anda tidak memiliki akses sebagai admin!");
    setTimeout(() => {
      window.location.href = "/mainboard";
    });
  }

  const menus = [
    { name: "Irrigation Log", icon: MdOutlineDashboard },
    { name: "Plot Configuration", icon: AiOutlineUser },
    { name: "Sensor Configuration", icon: FiMessageSquare },
    { name: "Plot Quality", icon: TbReportAnalytics },
    { name: "Cron Job", icon: FiFolder },
    // { name: "Cart", icon: FiShoppingCart },
    // { name: "Saved", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", icon: RiSettings4Line },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      {/* Sidebar */}
      <div
        className={`bg-[rgba(171,181,152,0.38)] ${
          open ? "w-60" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <button
              key={i}
              onClick={() => setActivePage(menu.name)} // Mengubah halaman aktif
              className={`${
                menu.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu.name}
              </h2>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar sidebarOpen={open} />

        {/* Content Area */}
        <div className="p-4">
          <div>{activePage === "Irrigation Log" ? <LogAdmin /> : null}</div>
          <div>
            {activePage === "Plot Configuration" ? <PlotConfig /> : null}
          </div>
          <div>
            {activePage === "Sensor Configuration" ? <SensorConfig /> : null}
          </div>
          <div>{activePage === "Plot Quality" ? <QualityData /> : null}</div>
          <div>{activePage === "Cron Job" ? <CronJob /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
