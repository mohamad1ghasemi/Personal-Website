import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
function Home() {
  return (
    <div name="home" className="w-full h-screen  sm:max-h-fit mb-[800px] block">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-start justify-center h-full">
        <p className="bg-mainColor-2 dark:bg-mainDark-2 text-mainColor-1 text-sm sm:text-3xl">
          Hi, my name is
        </p>
        <h1 className=" text-3xl sm:text-7xl font-bold text-mainDark-1 dark:text-whiteColor-1">
          Mohammad Ghasemi
        </h1>
        <TypeAnimation
          sequence={["I'm a Front End Developer", 2000]}
          wrapper="h2"
          speed={30}
          repeat={Infinity}
          className="text-3xl sm:text-7xl font-bold text-mainColor-2 dark:text-whiteColor-2"
        />
        <p className="text-mainDark-1 dark:text-whiteColor-2 sm:text-justify text-[19px] sm:text-[22px] text-left py-4 max-w-[800px]">
          I am specializing in front-end web development, with a focus on the
          React framework. My passion for coding and problem-solving drives me
          to create efficient and user-friendly web interfaces. I am always
          eager to learn and adapt to new technologies and challenges in the
          ever-evolving field of web development.
        </p>
        <div>
          <Link to="works" smooth={true} offset={-70} duration={500}>
            <button className="text-mainDark-1 dark:text-whiteColor-1 text-[19px] sm:text-[20px] group border-2 flex items-center px-6 py-3 m-2 rounded-full border-mainDark-1 dark:border-whiteColor-1 dark:hover:border-mainDark-2 hover:border-mainColor-2 duration-200 border-4">
              View Works
              <span className="group-hover:pl-3 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
