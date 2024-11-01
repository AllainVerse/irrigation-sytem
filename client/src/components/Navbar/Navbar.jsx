import React from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo-new.png";
import { NavbarMenu } from "../../mockData/data";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-50">
        <div className="container flex justify-between items-center py-8">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            {/* <FaDumbbell /> */}
            <img src={logo} alt="logo" width={60} />
            <p className="text-navColor">IRRIGO</p>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-customColor font-semibold text-navColor"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button> */}
            <a
              className="hover:bg-customColor bg-bgLogin text-white font-semibold rounded-md border-2 border-none px-6 py-2 duration-200 hidden md:block"
              href="/login"
            >
              Login
            </a>
            <a
              className="hover:bg-customColor text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block"
              href="/register"
            >
              Register
            </a>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;