import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form
        name="contact"
        method="post"
        action="https://getform.io/f/jawxrewb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 rounded-lg border-mainColor-2 text-gray-300">
            Contact me
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-whiteColor-1 p-2 rounded-md"
        />
        <input
          type="Email"
          placeholder="Email"
          name="email"
          className="bg-[#ccd6f6] p-2 my-4 rounded-md"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2 rounded-md"
        ></textarea>
        <button className="text-white rounded-full border-2 hover:bg-mainColor-2 px-4 py-2 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
