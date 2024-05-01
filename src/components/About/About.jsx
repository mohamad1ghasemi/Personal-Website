import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen text-gray-300 sm:max-h-fit  mb-[800px] block"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-mainColor-2">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2  gap-8 px-4">
          <div className="sm:text-left text-justify text-[1.4rem] font-bold">
            <p>
              I am a Software Engineer with a Bachelor’s degree from Bojnord
              State University, specializing in front-end web development.
              Currently, I am focusing on honing my skills in this area,
              particularly in using the React framework. My passion for coding
              and problem-solving is what propels me forward in creating
              efficient and user-friendly web interfaces. In front-end
              development, my primary goal is to ensure that the user experience
              is seamless and enjoyable. This involves crafting interfaces that
              are visually appealing, intuitive to navigate, and responsive
              across different devices.
            </p>
          </div>
          <div className="sm:text-left text-[1.4rem] font-bold">
            <p>
              Moreover, I am deeply interested in the latest trends and best
              practices in front-end development. I continuously seek out
              opportunities to learn and adapt to new technologies, as the field
              is constantly evolving. Whether it's mastering new tools or
              keeping up with emerging techniques, I am committed to staying at
              the forefront of web development. Furthermore, I enjoy the
              challenge of solving complex problems in front-end development.
              Whether it's optimizing performance, improving accessibility, or
              enhancing security, I approach each problem with creativity and a
              determination to find the best solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
