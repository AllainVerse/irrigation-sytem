import React, { useState, useEffect } from "react";
import axios from "axios";

const SensorConfig = () => {
  const [plots, setPlots] = useState([]);
  const [plotId, setPlotId] = useState(""); // Plot ID yang dipilih
  const [deviceName, setDeviceName] = useState(""); // Nama sensor
  const [devices, setDevices] = useState([]); // Daftar perangkat untuk plot yang dipilih
  const [editingDevice, setEditingDevice] = useState(null);

  useEffect(() => {
    fetchPlots();
  }, []);

  useEffect(() => {
    fetchDevices(); // Panggil fetchDevices setiap kali plotId berubah
  }, [plotId]);

  const handleChangePlot = (e) => {
    console.log("Selected Plot ID:", e.target.value);
    setPlotId(e.target.value);
  };

  const fetchPlots = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/plots", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Fetched Plots:", response.data);
      setPlots(response.data);
    } catch (error) {
      console.error("Error fetching plots:", error);
    }
  };

  const fetchDevices = async () => {
    if (!plotId) return; // Jangan lanjutkan jika plotId belum dipilih
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/plots/${plotId}/devices/`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Fetched Devices:", response.data);
      if (Array.isArray(response.data)) {
        setDevices(response.data);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  const createDevice = async (e) => {
    e.preventDefault();
    if (!plotId || !deviceName) {
      alert("Plot dan nama sensor harus diisi!");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `http://localhost:3000/plots/${plotId}/devices/`,
        { device_name: deviceName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Device created:", response.data);
      setDevices([...devices, response.data.device]); // Tambahkan ke daftar devices
      alert("Sensor berhasil ditambahkan!");
      setDeviceName(""); // Reset input nama sensor
    } catch (error) {
      console.error("Error creating device:", error);
      alert("Gagal menambahkan sensor. Silakan coba lagi.");
    }
  };

  const handleDeleteDevice = async (device_id) => {
    if (!plotId || !device_id) {
      alert("Plot ID atau Device ID tidak valid!");
      return;
    }

    console.log("Deleting device with ID:", device_id);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `http://localhost:3000/plots/${plotId}/devices/${device_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Device successfully deleted");

      // Hapus perangkat dari daftar lokal tanpa fetch ulang
      setDevices((prevDevices) =>
        prevDevices.filter((device) => device.id !== device_id)
      );

      alert("Perangkat berhasil dihapus!");
      // Fetch ulang daftar perangkat setelah penghapusan
      fetchDevices();
    } catch (error) {
      console.error("Error deleting device:", error.response || error);
      alert("Gagal menghapus perangkat. Silakan coba lagi.");
    }
  };

  const handleEditDevice = (device_id) => {
    const deviceToEdit = devices.find(
      (device) => device.device_id === device_id
    );
    setEditingDevice(deviceToEdit);
    setDeviceName(deviceToEdit.device_name); // Isi form dengan nama sensor yang akan diedit
  };

  const handleUpdateDevice = async (device_id, device_name) => {
    try {
      const token = localStorage.getItem("token");
      const plotId = "your_plot_id_here"; // Replace with the actual plot ID
      const response = await axios.put(
        `http://localhost:3000/plots/${plotId}/devices/${device_id}`,
        { device_name },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Device updated:", response.data);
    } catch (error) {
      console.error("Error updating device:", error);
    }
  };

  const saveDevice = async (e) => {
    e.preventDefault();

    if (!deviceName) {
      alert("Nama sensor harus diisi!");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      if (editingDevice) {
        // Jika dalam mode edit, panggil handleUpdateDevice
        const response = await axios.put(
          `http://localhost:3000/plots/${plotId}/devices/${editingDevice.device_id}`,
          { device_name: deviceName },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Device updated:", response.data);

        // Perbarui daftar perangkat lokal
        setDevices((prevDevices) =>
          prevDevices.map((device) =>
            device.device_id === editingDevice.device_id
              ? { ...device, device_name: deviceName }
              : device
          )
        );

        alert("Sensor berhasil diperbarui!");
      } else {
        // Jika dalam mode tambah, panggil createDevice
        const response = await axios.post(
          `http://localhost:3000/plots/${plotId}/devices/`,
          { device_name: deviceName },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Device created:", response.data);

        // Tambahkan perangkat baru ke daftar lokal
        setDevices([...devices, response.data.device]);

        alert("Sensor berhasil ditambahkan!");
      }

      // Reset formulir dan mode edit
      setDeviceName("");
      setEditingDevice(null);
    } catch (error) {
      console.error("Error saving device:", error);
      alert("Gagal menyimpan sensor. Silakan coba lagi.");
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-center py-8 md:py-10 gap-4 mb-10">
      {/* Left Section - Table */}
      <div className="w-full max-w-lg md:max-w-3xl bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1 className="text-lg md:text-xl font-poppins font-bold text-black">
            Sensor Device Configuration
          </h1>
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
              <th className="py-2 px-2 md:px-3 font-poppins font-medium">
                Option
              </th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => (
              <tr
                key={device.device_id || index}
                className="border-b border-black"
              >
                <td className="py-2 px-2 md:px-3 font-poppins">{index + 1}.</td>
                <td className="py-2 px-2 md:px-3 font-poppins">
                  {device.device_name}
                </td>
                <td className="py-2 px-2 md:px-3 font-poppins">
                  <button
                    onClick={() => handleEditDevice(device.device_id)}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-2 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteDevice(device.device_id)}
                    className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Section - Form */}
      <div className="w-full max-w-sm bg-[#DFEDC0] p-4 md:p-6 rounded-2xl shadow-lg">
        <h2 className="text-lg font-poppins font-bold text-black mb-4">
          Configuration
        </h2>
        <form className="flex flex-col gap-3" onSubmit={saveDevice}>
          <label htmlFor="plotSelect" className="font-poppins text-black">
            Pilih Petak
          </label>
          <select
            id="plotSelect"
            className="p-2 rounded-xl bg-white text-black border border-gray-300"
            value={plotId}
            onChange={(e) => setPlotId(e.target.value)}
          >
            <option value="">Pilih plot</option>
            {plots.map((plot) => (
              <option key={plot.plot_id} value={plot.plot_id}>
                {plot.plot_name}
              </option>
            ))}
          </select>

          <label htmlFor="deviceName" className="font-poppins text-black">
            Nama Sensor
          </label>
          <input
            id="deviceName"
            type="text"
            placeholder="Nama Sensor"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="p-2 rounded-xl bg-white text-black border border-gray-300"
          />
          <div className="flex justify-end gap-2">
            {editingDevice && (
              <button
                onClick={() => {
                  setEditingDevice(null);
                  setDeviceName("");
                }}
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-xl"
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-xl"
            >
              {editingDevice ? "Update Sensor" : "Tambah Sensor"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SensorConfig;
