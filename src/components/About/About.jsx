import React from "react";
import myPhoto from "../../assets/images/myPhoto1.png";
function About() {
  return (
    <div
      name="about"
      className="w-full h-screen text-mainDark-1 dark:text-mainColor-1 sm:max-h-fit  mb-[800px] block"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1200px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p
              className="text-4xl font-bold inline border-b-4
            rounded-lg border-mainColor-2 dark:border-mainDark-2"
            >
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] w-full">
          <img
            src={myPhoto}
            class="hidden md:block sm:float-right  sm:my-2 sm:max-w-[400px]"
            alt="mohamad ghasemi"
          />
          <div className="sm:text-justify mx-6 text-left text-[1rem] sm:text-[1.4rem] sm:font-bold">
            <p>
              I am a Software Engineer with a Bachelor's degree from Bojnord
              State University, specializing in front-end web development. In
              the past six months, I have improved my skills in HTML, CSS, and
              JavaScript through a simple project. Additionally, I have learned
              to work with React, TailwindCSS, SASS, Git, and more in projects
              such as a tic-tac-toe game, ToDo List app, Personal Website, and
              currently the Setpoohs project (an online shop). My passion for
              coding and problem-solving drives me to create efficient and
              user-friendly web interfaces. I am particularly focused on honing
              my skills in using the React framework. My primary goal in
              front-end development is to ensure that the user experience is
              seamless and enjoyable. This involves crafting interfaces that are
              visually appealing, intuitive to navigate, and responsive across
              different devices. Moreover, I am deeply interested in the latest
              trends and best practices in front-end development. I continuously
              seek out opportunities to learn and adapt to new technologies, as
              the field is constantly evolving. Whether it's mastering new tools
              or keeping up with emerging techniques, I am committed to staying
              at the forefront of web development. I enjoy the challenge of
              solving complex problems in front-end development, whether it's
              optimizing performance, improving accessibility, or enhancing
              security. I approach each problem with creativity and a
              determination to find the best solution. I am eager to join a
              dynamic company where I can further develop my skills and work on
              exciting projects. My goal is to enhance my abilities and grow as
              a skilled front-end developer. Thank you for your attention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
