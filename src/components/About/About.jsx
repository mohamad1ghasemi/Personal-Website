import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
              tempora ullam laboriosam nam voluptates recusandae neque
              doloribus, beatae rem accusamus laudantium alias. Et fugit,
              quaerat dicta ipsa nesciunt repellat.
            </p>
          </div>
          <div className="sm:text-left text-4xl font-bold">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non
              tempora ullam laboriosam nam voluptates recusandae neque
              doloribus, beatae rem accusamus laudantium alias. Et fugit,
              quaerat dicta ipsa nesciunt repellat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
