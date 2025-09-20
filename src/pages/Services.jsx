import React from "react";
import Footer from "../Component/Footer";

const Services = () => {
  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800">
      {/* Header Section */}
      <section className="text-center py-16 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          I provide comprehensive structural design services, combining creativity, technical expertise, and the latest software tools like <span className="text-blue-600 font-semibold">AutoCAD</span>, <span className="text-pink-600 font-semibold">3Ds Max</span>, and <span className="text-indigo-600 font-semibold">Revit</span> to deliver high-quality solutions.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="px-6 py-16 md:px-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-center">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-3">Structural Analysis & Design</h3>
            <p>Safe, efficient, and innovative structural solutions for residential, commercial, and industrial projects.</p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-green-400 to-teal-500 text-white text-center">
            <div className="text-4xl mb-4">📐</div>
            <h3 className="text-xl font-semibold mb-3">AutoCAD Drafting</h3>
            <p>Precise 2D & 3D drawings, plans, elevations, and construction documentation.</p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">3Ds Max Visualization</h3>
            <p>Realistic 3D modeling and rendering for structural concepts and visualization.</p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-pink-400 to-red-500 text-white text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-3">Revit BIM Modeling</h3>
            <p>Intelligent BIM models for accurate planning, coordination, and execution.</p>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center">
            <div className="text-4xl mb-4">🧱</div>
            <h3 className="text-xl font-semibold mb-3">Steel & Concrete Structures</h3>
            <p>Design, detailing, and execution of RCC, steel frames, foundations, and structural components.</p>
          </div>

          {/* Card 6 */}
          <div className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r from-red-400 to-pink-600 text-white text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-3">Renovation & Retrofitting</h3>
            <p>Strengthening and modernizing existing structures with advanced engineering solutions.</p>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="px-6 py-16 md:px-20 text-center bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
        <p className="text-gray-800 max-w-3xl mx-auto text-lg md:text-xl">
          I combine <span className="font-semibold text-blue-600">technical expertise</span> with <span className="font-semibold text-purple-600">creative solutions</span> to deliver high-quality structural designs that are safe, functional, and visually impressive. Every project is completed with <span className="font-semibold text-green-600">precision</span> and <span className="font-semibold text-pink-600">efficiency</span>.
        </p>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Services;
