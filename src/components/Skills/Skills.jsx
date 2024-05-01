import React from "react";
import HTML from "../../assets/icons/html.png";
import BootStrap from "../../assets/icons/bootstrap.png";
import CSS from "../../assets/icons/css.png";
import GitHub from "../../assets/icons/github.png";
import JavaScript from "../../assets/icons/js.png";
import React1 from "../../assets/icons/react.png";
import ResponsiveDesign from "../../assets/icons/ResponsiveDesign.png";
import FIGMA from "../../assets/icons/figma.png";
import GIT from "../../assets/icons/git.png";
import SASS from "../../assets/icons/sass.png";
import TypeScript from "../../assets/icons/typescript.png";
import TAILWIND from "../../assets/icons/tailwindcss.svg";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen text-gray-300">
      {/* Start Container */}
      <div className="max-w-[1000px] mx-auto p-4 justify-center items-start flex flex-col w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-mainColor-2">
            Skills
          </p>
          <p className="py-4">This is my Skills:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SASS} />
            <p className="mt-8">SASS</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={React1} />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GIT} />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 my-4 mx-auto" src={TAILWIND} />
            <p className="mt-8">Tailwindcss</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} />
            <p className="mt-6">TypeScript</p>
          </div>
          <div className="shadow-md shadow-blackColor-2 hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={FIGMA} />
            <p className="mt-6">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
