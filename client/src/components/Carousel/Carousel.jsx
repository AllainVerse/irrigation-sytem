import React from "react";


const Carousel = () => {
  return (
    <div className="w-full h-[720px] bg-gradient-to-r from-[#16332F] to-[#2F6D3C] p-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="text-white md:w-1/2 space-y-6 ml-36">
        <h1 className="text-4xl font-bold">
          Automated Monitoring System <br />
          For Your <span className="text-[#50C550]">Farm</span>
        </h1>
        <p className="text-lg">
          We help you monitor your farm with our IoT Monitoring System
        </p>
        <button className="bg-[#50C550] text-white px-6 py-3 rounded-full font-semibold">
          Learn More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex space-x-4 mt-6 md:mt-0 mr-36 h-[320px]">
        {/* First Image */}
        <img
          src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1726820741/s78nyqswhi5hsu5nryhk.png"
          alt="Tomato Plants"
          className="w-[100px]  rounded-[40px]"
        />
        {/* Second Image */}
        <img
          src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1726820846/agqszrrwilt2castl8jr.png"
          alt="Vineyard"
          className="w-[168px] rounded-[40px]"
        />
        {/* Third Image */}
        <img
          src="https://res.cloudinary.com/dqrazyfpm/image/upload/v1726820847/uym00h12vjdrqwpqjmsm.png"
          alt="Lettuce Field"
          className="w-[275px] rounded-[40px]"
        />
      </div>
    </div>
  );
};
  


export default Carousel