import React from "react";
import SearchIcon from "../../assets/search.png";

const SensorConfig = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center py-8 md:py-10 gap-4 mb-10">
      {/* Left Section - Table */}
      <div className="w-full max-w-lg md:max-w-3xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
            Land and Plot Configuration
          </h1>
          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Cari Sensor"
              className="bg-white text-black p-2 pl-4 rounded-full shadow-md text-xs md:text-sm w-56 md:w-64"
            />
            <img
              src={SearchIcon}
              alt="Search Icon"
              className="absolute right-3 top-3 w-4 h-4"
            />
          </div>
        </div>

        {/* Table Content */}
        <table className="w-full text-left text-black">
          <thead>
            <tr className="border-b-2 border-black">
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                No.
              </th>
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                Nama Sensor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">1.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 1</td>
            </tr>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">2.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 2</td>
            </tr>
            <tr className="border-b border-black">
              <td className="py-2 px-2 md:px-3 font-poppins">3.</td>
              <td className="py-2 px-2 md:px-3 font-poppins">Petak 3</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Right Section - Form */}
      <div className="w-full max-w-sm bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-poppins font-bold text-black mb-4">
          Configuration
        </h2>
        <form className="flex flex-col gap-3">
          <label htmlFor="plotName" className="font-poppins text-black">
            Nama Sensor
          </label>
          <input
            type="text"
            placeholder="Nama Sensor"
            className="p-2 rounded-xl bg-white text-black border border-gray-300"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SensorConfig;
