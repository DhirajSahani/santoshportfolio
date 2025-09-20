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
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-gray-800 px-6 md:px-20 py-16">

      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get in <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          Have a question or want to work together? Fill out the form below or contact me directly.
        </p>
      </section>

      {/* Contact Form & Info */}
      <section className="grid md:grid-cols-2 gap-12">

        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}

       <div className="bg-gradient-to-r justi from-pink-400 to-red-500 text-white p-8 rounded-3xl shadow-lg flex flex-col lg:items-center  md:items-center items-center">
  {/* Profile Image */}
  <img
    src={santosh}
    alt="Santosh Kumar Sahani"
    className="w-32 h-32 rounded-2xl mb-6 border-white "
  />

  {/* Heading */}
  <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact Info</h2>

  {/* Contact Details */}
  <div className="space-y-4 text-center md:text-left">
    <p className="flex items-center justify-center md:justify-start">
      📧 Email: <span className="ml-2 font-semibold">santoshkumarsahani778@gmail.com</span>
    </p>
    <p className="flex items-center justify-center md:justify-start">
      📞 Phone: <span className="ml-2 font-semibold">+91 9644767257</span>
    </p>
    <p className="flex items-center justify-center md:justify-start">
      📍 Location: <span className="ml-2 font-semibold">Bhopal, Madhya Pradesh, India</span>
    </p>
  </div>
</div>

      </section>
    </div>
  );
};

export default Contact;
