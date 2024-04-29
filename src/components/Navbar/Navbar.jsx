import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo1.png";
import Social from "../Social/Social";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-white">
      {/* add logo image */}
      <div>
        <a href="/">
          <img src={Logo} alt="logo" style={{ width: "80px" }} />
        </a>
      </div>
      {/* start main menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true} duration={500}>
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
          <li className="py-6 text-4xl">
            <Link onClick={handleclick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleclick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleclick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleclick} to="works" smooth={true} duration={500}>
              Works
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleclick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* start social */}
      <Social />
    </div>
  );
}

export default Navbar;
