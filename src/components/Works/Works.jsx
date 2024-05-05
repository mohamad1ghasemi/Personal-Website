import React from "react";
import Sample1 from "../../assets/images/Sample1.png";
import Sample2 from "../../assets/images/Sample2.png";
import Sample3 from "../../assets/images/Sample3.png";

const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-mainColor-2">
            Works
          </p>
          <p className="py-6">This is a sample works </p>
        </div>

        {/* Start Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* Start Sample-1 */}
          <a
            href="https://github.com/mohamad1ghasemi/Simple-Frontend-Projects"
            target="_blank"
          >
            <div
              style={{
                backgroundImage: `url(${Sample1})`,
              }}
              className="h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
                <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                  Simple Frontend Projects
                </span>
              </div>
            </div>
          </a>
          {/* Start Sample-2 */}
          <a
            href="https://github.com/mohamad1ghasemi/ToursToTuscany-Project"
            target="_blank"
          >
            <div
              style={{
                backgroundImage: `url(${Sample2})`,
              }}
              className="h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
                <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                  ToursToTuscany
                </span>
              </div>
            </div>
          </a>
          {/* Start Sample-3 */}
          <a
            href="https://github.com/mohamad1ghasemi/Personal-Website"
            target="_blank"
          >
            <div
              style={{
                backgroundImage: `url(${Sample3})`,
              }}
              className="h-[200px] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto"
            >
              <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
                <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                  Personal Website
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
