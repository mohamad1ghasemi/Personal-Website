import React from "react";
const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">This is a sample works </p>
        </div>
        {/* Start Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Start Sample-1 */}
          <div className="bg-[#444] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-100 p-1 duration-200">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                Online Shop
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Start Sample-2 */}
          <div className="bg-[#444] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-100 p-1 duration-200">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                Tour Website
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Start Sample-3 */}
          <div className="bg-[#444] bg-center bg-cover border-1 border-slate-10 shadow-2xl shadow-gray-400 group container rounded-md flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-100 p-1 duration-200">
              <span className="text-xl pt-1 font-bold text-white bg-slate-900 rounded-md px-4 pb-1">
                HairStyle
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold">
                    Demo
                  </button>
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
