import React from "react";
import { useState } from "react";
import Logo from "../../assets/logo-removebg-preview.png";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/register", {
        name,
        email,
        password,
      });
      console.log(response.data);

      if (response.data) {
        window.location.href = "/login";
      } else {
        throw new Error("Register failed: account already exists");
      }

    } catch (error) {
      console.error(error);
      setError("Account already exists");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-bl from-[#ABB598] via-[#DFEDC1] to-[#ABB598] flex justify-center items-center p-4">
      {/* Tampilan mobile */}
      <div className="lg:hidden flex flex-col justify-center items-center">
        <img
          src={Logo}
          alt="Irrigo Logo"
          className="w-[220px] h-auto -mb-5"
        />
        <h2 className="text-[22px] font-poppins font-semibold text-[#142423] mb-6 text-center">
          Join Irrigo to solve <br /> Your Irrigation
        </h2>

        <form
          className="w-full max-w-md bg-[#6E9B69] p-6 rounded-[20px] shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-black text-sm font-poppins font-semibold mb-2"
              htmlFor="fullname-mobile"
            >
              Full Name
            </label>
            <input
              id="fullname-mobile"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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
              className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              className="w-full bg-[#BFC653] hover:bg-green-700 text-black font-poppins font-semibold py-2 px-4 rounded-[30px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </form>

        <div className="mt-4">
          <p className="text-gray-700 text-center">
            Has already account?{" "}
            <Link to="/login" className="text-[#3B8132] font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Tampilan desktop */}
      <div className="hidden lg:flex w-full max-w-6xl items-center">
        {/* Bagian kiri - logo */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Logo}
            alt="Irrigo Logo"
            className="w-[320px] h-[325px]"
          />
        </div>

        {/* Garis pembatas */}
        <div className="h-[510px] w-[2px] bg-[#3B8132] ml-7" />

        {/* Bagian kanan - form */}
        <div className="w-1/2 flex flex-col justify-center items-start pl-10 ml-16">
          <h2 className="text-[22.5px] font-poppins font-semibold text-[#142423] -mb-10">
            Join Irrigo to solve <br /> Your Irrigation
          </h2>

          {/* Kontainer kecil dengan tulisan Sign Up */}
          <div className="-mb-6 ml-52 bg-[#6E9B69] rounded-t-[20px] w-[176px] h-[78px] flex items-center justify-center">
            <span className="text-black font-poppins font-semibold text-[25px]">
              Sign Up
            </span>
          </div>

          <form
            className="w-full max-w-sm bg-[#6E9B69] p-6 rounded-[20px] shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="fullname-desktop"
              >
                Full Name
              </label>
              <input
                id="fullname-desktop"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="email-desktop"
              >
                Email Address
              </label>
              <input
                id="email-desktop"
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
                htmlFor="password-desktop"
              >
                Password
              </label>
              <input
                id="password-desktop"
                type="password"
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="flex items-center justify-between">
              <Button
                className="w-full bg-[#BFC653] hover:bg-green-700 text-black font-poppins font-semibold py-2 px-4 rounded-[30px] focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Continue
              </Button>
            </div>
          </form>

          <div className="mt-4 w-full text-center">
            <p className="text-gray-700 mr-28">
              Has already account?{" "}
              <Link to="/login" className="text-[#3B8132] font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
