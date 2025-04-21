// update it as per altest changes

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import mus from "../assets/music-logo.png";

// handleClick for mobile devices if its a mobile device
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-10 text-2xl font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain"  text-[#ad8984] /> */}
        <h1 className="bg-[#2b66bf71] rounded-3xl w-full font-mono text-5xl text-[#ffe868b0] lyrics flex justify-center items-center">
          <span>MUSiX</span>
        </h1>
        <NavLinks />
      </div>
      {/* For mobile devices */}
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2"
          />
        )}
      </div>
      {/*  smooth-transition class in index.css */}
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        {/* <img src={logo} alt="logo" className="w-full h-14 object-contain" /> */}
        <div className="bg-[#fff] backdrop-filter backdrop-blur-3xl border-red-500 bg-opacity-5 rounded-3xl w-[130px] py-8 justify-center items-center flex">
          <img src={mus} alt="logo" className=" w-[120px] h-[70px]" />
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
