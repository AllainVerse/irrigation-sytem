import React from "react";
import Footer from "@/components/Footer/Footer";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const DataForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <NavbarLoggedin />

      <div className="w-full max-w-5xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg mx-auto mt-10 mb-10">
        <h2 className="text-lg font-poppins font-bold text-black mb-4">
          Configuration
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-3">
            <label htmlFor="plotName" className="font-poppins text-black">
              Nama Petak
            </label>
            <input
              type="text"
              placeholder="Nama Petak Lahan"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="phosphor" className="font-poppins text-black">
              Phosphor
            </label>
            <input
              type="text"
              placeholder="Phosphor"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="nitrogen" className="font-poppins text-black">
              Nitrogen
            </label>
            <input
              type="text"
              placeholder="Nitrogen"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="potassium" className="font-poppins text-black">
              Potassium
            </label>
            <input
              type="text"
              placeholder="Potassium"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-3">
            <label htmlFor="temperature" className="font-poppins text-black">
              Temperature
            </label>
            <input
              type="text"
              placeholder="Temperature"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="humidity" className="font-poppins text-black">
              Humidity
            </label>
            <input
              type="text"
              placeholder="Humidity"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="pH" className="font-poppins text-black">
              pH
            </label>
            <input
              type="text"
              placeholder="pH"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />

            <label htmlFor="rainfall" className="font-poppins text-black">
              Curah Hujan
            </label>
            <input
              type="text"
              placeholder="Curah Hujan"
              className="p-2 rounded-xl bg-white text-black border border-gray-300"
            />
          </div>

          <div className="flex justify-end col-span-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DataForm;
