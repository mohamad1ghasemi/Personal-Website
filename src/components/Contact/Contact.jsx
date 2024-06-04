import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Reset the error message for the current field
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;

    // Basic validation
    if (!formData.name) {
      formIsValid = false;
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
    }
    if (!formData.email) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!validateEmail(formData.email)) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    }
    if (!formData.message) {
      formIsValid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message is required",
      }));
    }

    if (formIsValid) {
      // Submit the form
      const form = e.target;
      form.submit();
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form
        name="contact"
        method="post"
        action="https://getform.io/f/jawxrewb"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={handleSubmit}
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
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="Email"
          placeholder="Email"
          name="email"
          className="bg-[#ccd6f6] p-2 my-4 rounded-md"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          className="bg-[#ccd6f6] p-2 rounded-md"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="text-red-500">{errors.message}</p>}
        <button className="text-white rounded-full border-2 hover:bg-mainColor-2 px-4 py-2 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
