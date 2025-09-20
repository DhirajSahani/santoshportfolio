import React from "react";
import Footer from "../Component/Footer";

const About = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 text-gray-800">
        {/* Header Section */}
        <section className="text-center py-16 px-6 md:px-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            I’m <span className="font-semibold text-blue-600">Santosh Kumar Sahani</span>, a passionate{" "}
            <span className="font-semibold text-purple-600">Structural Designer</span> dedicated to creating modern, safe, and innovative structural solutions. With expertise in{" "}
            <span className="text-green-600 font-medium">AutoCAD</span>,{" "}
            <span className="text-pink-600 font-medium">3Ds Max</span>, and{" "}
            <span className="text-indigo-600 font-medium">Revit</span>, I blend creativity with functionality to deliver designs that are visually impressive and structurally sound.
          </p>
        </section>

        {/* Skills / Tools Section */}
        <section className="px-6 py-16 md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            My <span className="text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Skills & Tools</span>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-2">AutoCAD</h3>
              <p className="text-sm">2D & 3D Drafting, Plans, Elevations, Construction Documents</p>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-red-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">3Ds Max</h3>
              <p className="text-sm">3D Modeling, Rendering, Visualization of Structural Designs</p>
            </div>
            <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2">Revit</h3>
              <p className="text-sm">BIM Modeling, Coordination, and Accurate Planning for Construction</p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Structural Design</h3>
              <p className="text-sm">Analysis, Steel & Concrete Structures, RCC, Foundations, and Detailing</p>
            </div>
          </div>
        </section>

        {/* Personal Information Section */}
        <section className="px-6 py-16 md:px-20 bg-gradient-to-r from-purple-200 to-blue-200 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-800">
            <div className="space-y-4">
              <p><span className="font-semibold text-blue-600">Name:</span> Santosh Kumar Sahani</p>
              <p><span className="font-semibold text-blue-600">Date of Birth:</span> 01/10/1997</p>
              <p><span className="font-semibold text-blue-600">Marital Status:</span> Single</p>
              <p><span className="font-semibold text-blue-600">Contact No:</span> +91 9644767257</p>
              <p><span className="font-semibold text-blue-600">Email:</span> santoshkumarsahani778@gmail.com</p>
               <p><span className="font-semibold text-blue-600">Country:</span> Nepal</p>
            </div>
            <div className="space-y-4">
              <p><span className="font-semibold text-blue-600">Hobbies:</span></p>
              <ul className="list-disc list-inside">
                <li>Traveling to new places every month</li>
                <li>Learning new design skills from YouTube</li>
                <li>Helping others</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section className="px-6 py-16 md:px-20 text-center bg-gradient-to-r from-purple-300 to-pink-300 rounded-3xl mx-6 md:mx-20 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-gray-800 max-w-3xl mx-auto text-lg md:text-xl">
            I combine <span className="font-semibold text-blue-600">technical expertise</span> with <span className="font-semibold text-purple-600">creative solutions</span> to deliver structural designs that are safe, functional, and visually stunning. My approach ensures every project is completed with <span className="font-semibold text-green-600">precision</span> and <span className="font-semibold text-pink-600">efficiency</span>, meeting client expectations and industry standards.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
