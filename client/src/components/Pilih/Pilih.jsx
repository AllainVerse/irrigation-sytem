import React from "react";

const Pilih = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Pilih Petak */}
        <div className="flex flex-col">
          <label className="font-bold mb-2">Pilih Petak</label>
          <select className="bg-[#F5F3D9] p-2 rounded-lg shadow-md">
            <option value="petak1">Petak 1</option>
            <option value="petak2">Petak 2</option>
            <option value="petak3">Petak 3</option>
          </select>
        </div>

        {/* Pilih Sensor */}
        <div className="flex flex-col">
          <label className="font-bold mb-2">Pilih Sensor</label>
          <select className="bg-[#F5F3D9] p-2 rounded-lg shadow-md">
            <option value="sensor1">Sensor 1</option>
            <option value="sensor2">Sensor 2</option>
            <option value="sensor3">Sensor 3</option>
          </select>
        </div>

        {/* Pilih Frekuensi Irigasi */}
        <div className="flex flex-col">
          <label className="font-bold mb-2">Pilih Frekuensi Irigasi</label>
          <select className="bg-[#F5F3D9] p-2 rounded-lg shadow-md">
            <option value="1hari">1 Hari Sekali</option>
            <option value="3hari">3 Hari Sekali</option>
            <option value="5hari">5 Hari Sekali</option>
            <option value="setiaphari">Setiap Hari</option>
          </select>
        </div>

        {/* Alarm */}
        <div className="flex flex-col">
          <label className="font-bold mb-2">Alarm</label>
          <div className="flex">
            <input
              type="number"
              placeholder="00"
              className="bg-[#F5F3D9] p-2 w-10 rounded-lg shadow-md"
            />
            <span className="px-1">:</span>
            <input
              type="number"
              placeholder="00"
              className="bg-[#F5F3D9] p-2 w-10 rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Jenis Tanaman */}
        <div className="flex flex-col">
          <label className="font-bold mb-2">Jenis Tanaman</label>
          <input
            type="text"
            placeholder="Input jenis tanaman"
            className="bg-[#F5F3D9] p-2 rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Pilih;
    