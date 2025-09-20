import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import santosh from "../assets/santosh.jpg"; // Profile image
import idCard from "../assets/idcard.jpg"; // ID Card image
import degree from'../assets/degree.jpg' // Certificate image
import Footer from "../Component/Footer";
import cert from'../assets/cert.jpg'
import evnp from'../assets/evnp.jpg'
import autocad2 from'../assets/autocad2.jpg'
import autocad3 from'../assets/autocad3.jpg'
import autocad from'../assets/autocad.jpg'
import licience from'../assets/licience.jpg'  // Certificate image

const Resume = () => {
  const [selectedImage, setSelectedImage] = useState(null); // For modal
  const certificates = [cert,degree,evnp,autocad2,autocad3,autocad,licience,]; // Certificates array

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-blue-50 text-gray-800 px-6 md:px-20 py-16">

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
        <section className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-lg p-8 mb-12">
          <img
            src={santosh}
            alt="Santosh Kumar Sahani"
            className="w-40 h-40 rounded-2xl mb-6 md:mb-0 md:mr-12"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Santosh Kumar Sahani</h2>
            <p className="text-gray-600 mb-2">Structural Designer</p>
            <p className="text-gray-600 mb-2">Email: santoshkumarsahani778@gmail.com</p>
            <p className="text-gray-600 mb-2">Phone: +91 9644767257</p>
            <p className="text-gray-600">Location: Bhopal, Madhya Pradesh, India</p>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Civil Engineering</li>
                <li>Bachelor's Degree, Sistec-R, Bhopal (2019) with CGPA 7.05</li>
                <li>Higher Secondary Education, M.R. Inter College, East Champaran Bihar (2015) 53%</li>
                <li>Shree Saraswati Higher Secondary School Malahitol, Rautahat, Nepal (2013) 52%</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              {/* <ul className="list-disc list-inside space-y-2"> */}
                <p>Worked as an Assistant Structural Engineer at <span className="text-emerald-950">S. Abhinav Associate</span>, Bhopal, Madhya Pradesh, India, with over 1 year of professional experience. Gained hands-on experience in structural design, drafting, and project coordination, contributing to the successful execution of various civil engineering projects.</p>
                {/* <li>Structural Design Assistant (2 Years)</li>
                <li>AutoCAD & Revit Projects</li>
                <li>3Ds Max Modeling & Visualization</li> */}
              
            </div>
          </div>
        </section>

        {/* Skills Section */}
     <section className="mb-12">
  <h3 className="text-3xl font-bold text-center mb-8">
    My{" "}
    <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
      Skills
    </span>
  </h3>
  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition transform">
      <p className="font-semibold text-white mb-2">AutoCAD</p>
    </div>
    <div className="bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition transform">
      <p className="font-semibold text-white mb-2">3Ds Max</p>
    </div>
    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition transform">
      <p className="font-semibold text-white mb-2">Revit</p>
    </div>
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition transform">
      <p className="font-semibold text-white mb-2">Structural Design</p>
    </div>
  </div>
</section>


        {/* ID Card Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            My <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">ID Card</span>
          </h3>
          <div className="flex justify-center">
            <div
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition transform cursor-pointer w-72"
              onClick={() => setSelectedImage(idCard)}
            >
              <img
                src={idCard}
                alt="ID Card"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            My{" "}
            <span className="text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((degree, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition transform cursor-pointer"
                onClick={() => setSelectedImage(cert)}
              >
                <img
                  src={degree}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Certificates / ID Card */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-full max-w-full rounded-xl shadow-lg"
            />
          </div>
          
        )}
        
      </div>

      <Footer />
    </>
  );
};

export default Resume;
