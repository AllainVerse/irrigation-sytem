import React, { useState } from 'react';
import Navbar from '../components/Navbar/NavbarLoggedin';
import Footer from '../components/Footer/Footer';
import wallppr1 from '../assets/wallppr1.png';
import blankprofile from '../assets/blankprofile.png';
import iconcover from '../assets/iconcover.png';
import Calender2 from '../assets/Calender2.png';
import Location from '../assets/Location.png';
import iconverified from '../assets/iconverified.png';
import Job from '../assets/Job.png';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />
      <div className="pt-16"></div>

      <div className="relative w-full">
        <img
          src={wallppr1}
          alt="Cover"
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 object-cover w-full h-70 sm:h-94"
        />
        <button className="absolute bottom-7 right-3 text-gray-700 border border-gray-400 px-3 py-1 rounded-full font-poppins text-sm hover:bg-gray-100 transition-colors flex items-center gap-1">
          <img src={iconcover} alt="icon" className="w-4 h-4" />
          Change Cover
        </button>

        <div className="absolute left-1/4 transform -translate-x-[86%] translate-y-[36%] w-54 h-54 sm:w-56 sm:h-56 rounded-full overflow-hidden">
          <img
            src={blankprofile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="p-8 w-full mt-40 flex justify-end">
        <div className="w-3/4 pl-12 -mt-4">
          <h2 className="text-xl text-left font-poppins font-semibold text-white flex items-left justify-start gap-2">
            Bayu Ariyo Vonda
            <img src={iconverified} alt="verified" className="w-5 h-5" />
          </h2>
          <div className="flex items-left justify-start text-left gap-2 my-2">
            <span className="bg-[#FEBD14] font-poppins text-black px-3 py-1 rounded-full text-xs">
              Gold Membership
            </span>
          </div>
          <div className="text-white mt-2">
            <p className="flex items-left font-poppins justify-start gap-2 text-xs">
              <img src={Location} alt="location" className="w-4 h-4" />
              Surabaya, Jawa Timur
            </p>
            <p className="flex items-left font-poppins justify-start gap-2 text-xs">
              <img src={Job} alt="work" className="w-4 h-4" />
              Petani Beras
            </p>
            <p className="flex items-left font-poppins justify-start gap-2 text-xs">
              <img src={Calender2} alt="calendar" className="w-4 h-4" />
              Joined May 2023
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto mb-12">
        <div className="absolute top-[-56px] right-0">
          <div className="px-8 py-10 bg-[#6E9B69] rounded-3xl">
            <span className="relative font-poppins font-semibold text-white top-[-22px]">Edit Profile</span>
          </div>
        </div>

        <div className="bg-[#6E9B69] p-8 rounded-[32px] shadow-lg max-w-5xl mx-auto mb-12 mt-16">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="mb-2 font-poppins text-white">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="mb-2 font-poppins text-white">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-poppins text-white">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-poppins text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
              />
            </div>

            {/* Button to Save Changes */}
            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 bg-[#50C550] text-white rounded-full hover:bg-[#2F762F] transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
