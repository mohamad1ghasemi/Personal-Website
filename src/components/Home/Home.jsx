import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
function Home() {
  return (
    <div className="w-full h-screen bg-[#0A192F]">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-start justify-center h-full">
        <p className="text-amber-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mohammad Ghasemi
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am specializing in front-end web development, with a focus on the
          React framework. My passion for coding and problem-solving drives me
          to create efficient and user-friendly web interfaces. I am always
          eager to learn and adapt to new technologies and challenges in the
          ever-evolving field of web development.
        </p>
        <div>
          <button className="text-white group border-2 flex items-center px-6 py-3 m-2 rounded-full hover:border-amber-300 duration-200">
            View Works
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
