import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/NavbarLoggedin';
import Footer from '../components/Footer/Footer';
import wallppr1 from '../assets/wallppr1.png';
import blankprofile from '../assets/blankprofile.png';
import iconcover from '../assets/iconcover.png';
import Calender2 from '../assets/Calender2.png';
import Location from '../assets/Location.png';
import iconverified from '../assets/iconverified.png';
import Job from '../assets/Job.png';
import wallppr6 from '../assets/wallppr6.png';
import wallppr2 from '../assets/wallppr2.png';
import wallppr3 from '../assets/wallppr3.png';
import wallppr4 from '../assets/wallppr4.png';

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });


  const [coverImage, setCoverImage] = useState(wallppr6);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleCoverChange = (newCover) => {
    setCoverImage(newCover);
    setIsModalOpen(false);
  };

  const { ref: profileRef, inView: profileInView } = useInView({
    threshold: 0.1,
  });

  const { ref: modalRef, inView: modalInView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white">
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />
      <div className="pt-16"></div>

      <div className="relative w-full">
        <img
          src={coverImage}
          alt="Cover"
          className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 object-cover w-full h-70 sm:h-94"
        />
        <button
          className="absolute bottom-7 right-3 text-gray-700 border border-gray-400 px-3 py-1 rounded-full font-poppins text-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
          onClick={() => setIsModalOpen(true)}
        >
          <img src={iconcover} alt="icon" className="w-4 h-4" />
          Change Cover
        </button>

        <div
          ref={profileRef}
          className={`absolute left-1/4 transform -translate-x-[86%] translate-y-[36%] w-54 h-54 sm:w-56 sm:h-56 rounded-full overflow-hidden 
            transition-all duration-700 ease-out transform ${profileInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <img
            src={blankprofile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        ref={modalRef}
        className={`p-8 w-full mt-40 flex justify-end transition-all duration-700 ease-out 
          ${modalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-lg font-bold mb-4">Select a Cover Image</h3>
            <div className="grid grid-cols-3 gap-4">
              {[wallppr1, wallppr2, wallppr3, wallppr4, wallppr6].map((wallpaper, index) => (
                <img
                  key={index}
                  src={wallpaper}
                  alt={`wallpaper${index + 1}`}
                  className="cursor-pointer rounded-lg w-full h-32 object-cover"
                  onClick={() => handleCoverChange(wallpaper)}
                />
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="relative max-w-5xl mx-auto mb-12">
        <div className="absolute top-[-56px] right-0">
          <div className="px-8 py-10 bg-[#DFEDC0] rounded-3xl">
            <span className="relative font-poppins font-bold text-black top-[-22px]">Edit Profile</span>
          </div>
        </div>

        <div className="bg-[#DFEDC0] p-8 rounded-[32px] shadow-lg max-w-5xl mx-auto mb-12 mt-16">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="mb-2 font-poppins text-black">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="mb-2 font-poppins text-black">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                  className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-poppins text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-poppins text-black">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-6 bg-blue-600 text-white rounded-xl"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Profile;
