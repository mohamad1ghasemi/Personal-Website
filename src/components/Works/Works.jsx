import React from "react";
import Sample1 from "../../assets/images/Sample1.png";
const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300">
      <img src="Sample1" alt="sample1" />
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
          <div className="bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                ToursToTuscany
              </span>
            </div>
          </div>
          {/* Start Sample-2 */}
          <div className="bg-['../../assets/images/Sample1.png'] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                ToursToTuscany
              </span>
            </div>
          </div>
          {/* Start Sample-3 */}
          <div className="bg-['../../assets/images/Sample1.png'] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-50 p-1 duration-300">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                ToursToTuscany
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
