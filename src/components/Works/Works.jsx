import React from "react";
import Sample1 from "../../assets/images/Sample1.png";
import Sample2 from "../../assets/images/Sample2.png";
import Sample3 from "../../assets/images/Sample3.png";
import Sample4 from "../../assets/images/Sample4.png";
import Sample5 from "../../assets/images/Sample5.png";
import Sample6 from "../../assets/images/Sample6.png";
import eyeIcon from "../../assets/icons/eyeIcon.png";
import GithubIcon from "../../assets/icons/githubIcon.png";
import { Link } from "react-scroll";

const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-grayColor-1">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-left">
          <p className="text-4xl font-bold inline border-b-4 text-mainDark-1 dark:text-mainColor-1 border-mainColor-2 dark:border-mainDark-2 rounded-lg">
            Works
          </p>
        </div>

        {/* Start Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Start Sample-1 */}
          <div
            style={{
              backgroundImage: `url(${Sample1})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                Simple Frontend Projects
              </span>
              <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <a
                  href="https://github.com/mohamad1ghasemi/Simple-Frontend-Projects/tree/master/01.beginner"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>

          {/* Start Sample-2 */}
          <div
            style={{
              backgroundImage: `url(${Sample5})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                Calculator
              </span>
              <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <a
                  href="https://simple-frontend-projects.vercel.app/calculator/index.html"
                  target="_blank"
                >
                  <img src={eyeIcon} alt="Visit this" className="w-12 h-12" />
                </a>
                <a
                  href="https://github.com/mohamad1ghasemi/Simple-Frontend-Projects/tree/master/02.intermediate/calculator"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
          {/* Start Sample-3 */}
          <div
            style={{
              backgroundImage: `url(${Sample6})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                Tic Tac Toe
              </span>
              <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <a
                  href="https://simple-frontend-projects.vercel.app/tic%20tac%20toe/index.html"
                  target="_blank"
                >
                  <img src={eyeIcon} alt="Visit this" className="w-12 h-12" />
                </a>
                <a
                  href="https://github.com/mohamad1ghasemi/Simple-Frontend-Projects/tree/master/02.intermediate/tic%20tac%20toe"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
          {/* Start Sample-4 */}
          <div
            style={{
              backgroundImage: `url(${Sample4})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                To Do List
              </span>
              <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <a
                  href="https://simple-frontend-projects.vercel.app/to%20do%20list/index.html"
                  target="_blank"
                >
                  <img src={eyeIcon} alt="Visit this" className="w-12 h-12" />
                </a>
                <a
                  href="https://github.com/mohamad1ghasemi/Simple-Frontend-Projects/tree/master/02.intermediate/to%20do%20list"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
          {/* Start Sample-5 */}
          <div
            style={{
              backgroundImage: `url(${Sample2})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                ToursToTuscany
              </span>
              <p className="text-red-600 text-xl bg-black">
                Under Repairing ...
              </p>
              {/* <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <a
                  href="https://tours-to-tuscany-project.vercel.app"
                  target="_blank"
                >
                  <img src={eyeIcon} alt="Visit this" className="w-12 h-12" />
                </a>
                <a
                  href="https://github.com/mohamad1ghasemi/ToursToTuscany-Project"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className="w-12 h-12" />
                </a>
              </div> */}
            </div>
          </div>
          {/* Start Sample-6 */}
          <div
            style={{
              backgroundImage: `url(${Sample3})`,
            }}
            className="md:hover:scale-125 duration-300 h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
          >
            <div className="opacity-0 group-hover:opacity-75 p-1 duration-300">
              <span className="text-sm text-nowrap pt-1 font-bold text-black bg-white rounded-md px-4 pb-1">
                Personal Website
              </span>
              <div className="flex px-2 pt-14 gap-8 justify-center items-center">
                <Link to="home" smooth={true} duration={500}>
                  <img
                    src={eyeIcon}
                    alt="Visit this"
                    className="cursor-pointer w-12 h-12"
                  />
                </Link>
                <a
                  href="https://github.com/mohamad1ghasemi/Personal-Website"
                  target="_blank"
                >
                  <img src={GithubIcon} alt="github" className=" w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
