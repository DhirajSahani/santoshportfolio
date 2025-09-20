import React, { useState } from "react";
import santosh from "../assets/santosh.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual submit logic
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-gray-800 px-4 sm:px-6 md:px-12 lg:px-20 py-12 flex flex-col items-center">
      {/* Header Section */}
      <section className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          Get in{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Have a question or want to work together? Fill out the form below or
          contact me directly.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 w-full max-w-6xl">
        {/* Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-center">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 sm:p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              required
            />
            <button
              type="submit"
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300 text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col items-center md:items-start w-full">
          {/* Profile Image */}
          <img
            src={santosh}
            alt="Santosh Kumar Sahani"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl mb-4 sm:mb-6 border-4 border-white"
          />

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-4 sm:mb-6 text-center md:text-left">
            Contact Info
          </h2>

          {/* Contact Details */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left text-sm sm:text-base">
            <p className="flex items-center justify-center md:justify-start">
              📧 Email:{" "}
              <span className="ml-2 font-semibold">santoshkumarsahani778@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              📞 Phone: <span className="ml-2 font-semibold">+91 9644767257</span>
            </p>
            <p className="flex items-center justify-center md:justify-start">
              📍 Location:{" "}
              <span className="ml-2 font-semibold">Bhopal, Madhya Pradesh, India</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
