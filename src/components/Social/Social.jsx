import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import redw from "../../assets/files/Mohammad-Gasemi-CV.pdf";

function Social() {
  return (
    <div className="hidden md:block flex fixed flex-col top-[20%] left-0">
      <ul>
        {/* Start linkdin */}
        <li className="w-[150px] h-[40px] pt-[5px] ml-[-100px] pr-2 pt-1 justify-between items-center hover:ml-[-10px] duration-300 bg-sky-500">
          <a
            href="https://linkedin.com/in/mohammad1ghasemi1/"
            target="_blank"
            className="flex justify-between items-center w-full text-white"
          >
            LinkedIn
            <FaLinkedin size={30} />
          </a>
        </li>
        {/* Start GitHub */}
        <li className="w-[150px] h-[40px] pt-[5px] ml-[-100px] pr-2 pt-1 justify-between items-center hover:ml-[-10px] duration-300 bg-[#333]">
          <a
            href="https://github.com/mohamad1ghasemi"
            target="_blank"
            className="flex justify-between items-center w-full text-white"
          >
            GitHub
            <FaGithub size={30} />
          </a>
        </li>
        {/* Start Email */}
        <li className="w-[150px] h-[40px] pt-[5px] ml-[-100px] pr-2 pt-1 justify-between items-center hover:ml-[-10px] duration-300 bg-green-700">
          <a
            href="mailto:mohammad1ghasemi1@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            Email
            <HiOutlineMail size={30} />
          </a>
        </li>
        {/* Start Resume */}
        <li className="w-[150px] h-[40px] pt-[5px] ml-[-100px] pr-2 pt-1 justify-between items-center hover:ml-[-10px] duration-300 bg-yellow-600">
          <a
            href={redw}
            target="_blank"
            className="flex justify-between items-center w-full text-white"
          >
            Resume
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
