import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0A192F]">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-start justify-center h-full">
        <p className="bg-[#ABA944] text-[#0A192F] text-2xl">Hi, my name is</p>
        <h1 className=" text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mohammad Ghasemi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <p className="text-[#8892b0] text-justify text-[22px] text-left py-4 max-w-[800px]">
          I am specializing in front-end web development, with a focus on the
          React framework. My passion for coding and problem-solving drives me
          to create efficient and user-friendly web interfaces. I am always
          eager to learn and adapt to new technologies and challenges in the
          ever-evolving field of web development.
        </p>
        <div>
          <button className="text-white text-[20px] group border-2 flex items-center px-6 py-3 m-2 rounded-full hover:border-[#ABA944] duration-200">
            <Link to="works" smooth={true} duration={500}>
              View Works
            </Link>
            <span className="group-hover:pl-3 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
