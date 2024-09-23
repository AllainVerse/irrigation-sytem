import React from "react";
import Logo from "../../assets/logo-removebg-preview.png";
import { Button } from "@/components/ui/button";
const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-bl from-[#ABB598] via-[#DFEDC1] to-[#ABB598]">
      <div className="flex w-3/5 items-center">
        {/* Bagian kiri - logo */}
        <div className="w-1/2 flex justify-end">
          <img
            src={Logo}
            alt="Irrigo Logo"
            className="w-[320px] h-[325px] transform -translate-x-40"
          />
        </div>

        {/* Garis pembatas */}
        <div className="h-[510px] w-[2px]  bg-[#3B8132]" />

        {/* Bagian kanan - form */}
        <div className="w-1/2 flex flex-col justify-center items-start ml-10">
          <h2 className="text-[22.5px] font-poppins font-semibold text-[#142423] -mb-10 -ml-[-130px]">
            Join Irrigo to solve <br /> Your Irrigation
          </h2>

          {/* Kontainer kecil dengan tulisan Sign In */}
          <div className="bg-[#6E9B69] rounded-t-[20px] w-[165px] h-[70px] flex items-center justify-center ml-[348.5px] -mb-[16px]">
            <span className="text-black font-poppins font-semibold text-[25px]">
              Sign Up
            </span>
          </div>

          <form className="w-full max-w-sm bg-[#6E9B69] p-6 rounded-[20px] shadow-lg ml-[130px]">
          <div className="mb-4">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="fullname"
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm font-poppins font-semibold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="shadow appearance-none border rounded-[12px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
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
                placeholder=""
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                className="w-[463px] bg-[#BFC653] hover:bg-green-700 text-black font-poppins font-semibold py-2 px-4 rounded-[30px] focus:outline-none focus:shadow-outline"
                type="button"
              >
                Continue
              </Button>
            </div>
          </form>
          <div className="mt-4 flex justify-end w-full ml-[10px]">
            <p className="text-gray-700">
              Has already account?{" "}
              <a href="/login" className="text-[#3B8132] font-bold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
