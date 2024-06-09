import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo1.png";
import Social from "../Social/Social";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { ThemeContext } from "../themeChanger/ThemeContext.js";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { darkSide, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-mainColor-1 dark:bg-mainDark-1 text-mainDark-1 dark:text-white z-50">
      {/* add logo image */}
      <div className="cursor-pointer">
        <img src={Logo} alt="logo" className="w-[85px]" />
      </div>
      {/* start main menu */}
      <ul className="hidden md:flex text-[1.4rem] mr-[8rem]">
        <Link to="home" smooth={true} duration={500}>
          <li className={`${styles.customBorder}`}>Home</li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className={`${styles.customBorder}`}>About</li>
        </Link>

        <Link to="skills" smooth={true} duration={500}>
          <li className={`${styles.customBorder}`}>Skills</li>
        </Link>
        <Link to="works" smooth={true} duration={500}>
          <li className={`${styles.customBorder}`}>Works</li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className={`${styles.customBorder}`}>Contact</li>
        </Link>
        <label className={styles.switch}>
          <input type="checkbox" checked={!darkSide} onChange={toggleTheme} />
          <span className={styles.slider}></span>
        </label>
      </ul>
      {/* humberger menu button */}
      <div className="md:hidden">
        <label className={styles.switch}>
          <input type="checkbox" checked={!darkSide} onChange={toggleTheme} />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div
        onClick={handleClick}
        className="md:hidden text-[3rem] z-10 cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* start humberger menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 pointer-events-auto bg-mainColor-1 dark:bg-mainDark-1 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <div>
          <ul>
            <li className="mb-3 py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="mb-3 py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                offset={-110}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="mb-3 py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                offset={-165}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="mb-3 py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="works"
                smooth={true}
                offset={-70}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="mb-3 py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                offset={-90}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[100%] h-[100%] pointer-events-none"></div>
      {/* start social */}
      <Social />
    </div>
  );
}

export default Navbar;
