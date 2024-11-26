import React, { useState } from "react";
import Logo from "../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      console.log(response); 
      console.log(response.data);

<<<<<<< HEAD
      const { token, name } = response.data;
=======
      const { token, name, role } = response.data; // Tambahkan 'role' pada destructuring
>>>>>>> 9e853a63e17e4a34b97f888c5d2d44aa094576ae

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("role", role); // Simpan role pada localStorage

        if (role === "farmer") {
          window.location.href = "/Mainboard";
        } else if (role === "admin") {
          window.location.href = "/Admin";
        } else {
          throw new Error("Invalid role");
        }
      } else {
        throw new Error("Login failed: token not provided");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid login credentials or server error");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-bl from-[#ABB598] via-[#DFEDC1] to-[#ABB598] flex justify-center items-center p-4">
      {/* Tampilan mobile */}
      <div className="lg:hidden flex flex-col justify-center items-center">
        <img src={Logo} alt="Irrigo Logo" className="w-[220px] h-auto -mb-5" />
        <h2 className="text-[22px] font-poppins font-semibold text-[#142423] mb-6 text-center">
          Join Irrigo To Solve <br /> Your Irrigation
        </h2>

        <form
          className="w-full max-w-md bg-[#6E9B69] p-6 rounded-[20px] shadow-lg"
          onSubmit={handleLogin}
        >
          <div className="mb-4">
            <label
              className="block text-black text-sm font-poppins font-semibold mb-2"
              htmlFor="email-mobile"
            >
              Email Address
            </label>
            <input
              id="email-mobile"
              type="email"
              className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-poppins font-semibold mb-2"
              htmlFor="password-mobile"
            >
              Password
            </label>
            <input
              id="password-mobile"
              type="password"
              className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-[#BFC653] hover:bg-green-700 text-black font-poppins font-semibold py-2 px-4 rounded-[30px] text-center"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Create New Account?{" "}
            <Link
              to="/register"
              className="text-[#3B8132] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Tampilan desktop */}
      <div className="hidden lg:flex w-full max-w-6xl items-center">
        {/* Bagian kiri - logo */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={Logo} alt="Irrigo Logo" className="w-[320px] h-[325px]" />
        </div>

        {/* Garis pembatas */}
        <div className="h-[510px] w-[2px] bg-[#3B8132] ml-7" />

        {/* Bagian kanan - form */}
        <div className="w-1/2 flex flex-col justify-center ml-16 items-start pl-10 relative">
          <h2 className="text-[22.5px] font-poppins font-semibold text-[#142423] -mb-10">
            Join Irrigo to solve <br /> Your Irrigation
          </h2>

          {/* Kontainer kecil dengan tulisan Sign In */}
          <div className="-mb-6 ml-52 bg-[#6E9B69] rounded-t-[20px] w-[176px] h-[78px] flex items-center justify-center">
            <span className="text-black font-poppins font-semibold text-[25px]">
              Sign In
            </span>
          </div>

          <form
            className="w-full max-w-sm bg-[#6E9B69] p-6 rounded-[20px] shadow-lg"
            onSubmit={handleLogin}
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="email"
              >
                Email Addres
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <a
                  className="mb-4 inline-block align-baseline font-medium text-sm text-black hover:text-blue-800"
                  href="/register"
                >
                  forget Password ?
                </a>
              </div>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Tombol Sign In */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-[#BFC653] hover:bg-green-700 text-black font-poppins font-semibold py-2 px-4 rounded-[30px] text-center"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Tulisan di bagian bawah */}
          <div className="mt-4 w-full text-center">
            <p className="text-gray-700 text-center mr-28">
              Create new account?{" "}
              <Link
                to="/register"
                className="text-[#3B8132] font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
