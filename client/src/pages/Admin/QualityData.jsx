import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavbarLoggedin from "@/components/Navbar/NavbarLoggedin";

const QualityData = () => {
  return (
    <>
      {/* Irrigation Log Section */}
      <section className="flex flex-col items-center mb-28 mt-28">
        {" "}
        {/* Menambahkan margin-bottom */}
        <div className="w-full max-w-3xl md:max-w-5xl bg-[#DFEDC0] p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
              Land Quality Data
            </h1>
          </div>

          {/* Tabel Log Irigasi */}
          <div className="overflow-x-auto ">
            <table className="w-full text-center text-black mb-12">
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    No.
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Nama Petak
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Nitrogen
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Phospor
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Potassium
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Temperature
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Humadity
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    pH
                  </th>
                  <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                    Rainfall
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-2 px-2 md:px-3 font-poppins">1.</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">Petak 1</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">90</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">42</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">43</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">30° C</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">80</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">6.5</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">202</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2 px-2 md:px-3 font-poppins">2.</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">Petak 2</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">90</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">42</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">43</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">30° C</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">80</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">6.5</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">202</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2 px-2 md:px-3 font-poppins">3.</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">Petak 3</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">90</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">42</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">43</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">30° C</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">80</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">6.5</td>
                  <td className="py-2 px-2 md:px-3 font-poppins">202</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityData;
