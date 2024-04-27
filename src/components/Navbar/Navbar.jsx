import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo1.png";
import "./navbar.css";
import Social from "../Social/Social";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white">
      {/* add logo image */}
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/* start main menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
      {/* humberger menu button */}
      <div onClick={handleclick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* start humberger menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Works</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>
      {/* start social */}
      <Social />
    </div>
  );
}

export default Navbar;
