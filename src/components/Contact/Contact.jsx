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
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">contact form</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#ccd6f6] p-2 "
        />
        <input
          type="Email"
          placeholder="Email"
          name="email"
          className="bg-[#ccd6f6] p-2 my-4"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-2 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;