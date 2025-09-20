import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import santosh from "../assets/santosh.jpg";
import idCard from "../assets/idcard.jpg";
import degree from "../assets/degree.jpg";
import cert from "../assets/cert.jpg";
import evnp from "../assets/evnp.jpg";
import autocad2 from "../assets/autocad2.jpg";
import autocad3 from "../assets/autocad3.jpg";
import autocad from "../assets/autocad.jpg";
import licience from "../assets/licience.jpg";
import Footer from "../Component/Footer";

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [cert, degree, evnp, autocad2, autocad3, autocad, licience];

  // Disable right click + screenshot shortcuts
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    const disableKey = (e) => {
      // Block PrintScreen
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // Clear clipboard
        alert("Screenshots are disabled for security reasons.");
      }
      // Block Ctrl+S, Ctrl+Shift+S
      if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        alert("Saving or screenshots are disabled.");
      }
      // Block common screenshot shortcuts (Windows + Mac)
      if ((e.ctrlKey && e.shiftKey && e.key === "S") || (e.metaKey && e.shiftKey && e.key === "4")) {
        e.preventDefault();
        alert("Screenshots are disabled on this page.");
      }
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("keydown", disableKey);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("keydown", disableKey);
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 text-gray-800 px-6 md:px-20 py-16 select-none">

        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Resume</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            A summary of my education, experience, skills, and achievements in Structural Design.
          </p>
        </section>

        {/* Profile Section */}
        <section className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-8 mb-12 relative">
          <img
            src={santosh}
            alt="Santosh Kumar Sahani"
            className="w-40 h-40 rounded-2xl mb-6 md:mb-0 md:mr-12 pointer-events-none"
            draggable="false"
          />
          {/* Transparent watermark overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl font-bold opacity-20 select-none pointer-events-none">
            © Santosh
          </div> */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Santosh Kumar Sahani</h2>
            <p className="text-gray-600 mb-2">Structural Designer</p>
            <p className="text-gray-600 mb-2">Email: santoshkumarsahani778@gmail.com</p>
            <p className="text-gray-600 mb-2">Phone: +91 9644767257</p>
            <p className="text-gray-600">Location: Bhopal, Madhya Pradesh</p>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            My <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Certificates</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition transform cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-60 object-cover pointer-events-none select-none"
                  draggable="false"
                />
                {/* Watermark Overlay */}
                <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold opacity-30 select-none pointer-events-none">
                  © Santosh
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Images */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 select-none">
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full View"
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg pointer-events-none select-none"
                draggable="false"
              />
              {/* Watermark inside modal */}
              <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold opacity-25 select-none pointer-events-none">
                Santosh Kumar Sahani
              </span>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Resume;
