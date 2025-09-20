import React, { useEffect } from "react";
import Footer from "../Component/Footer";
import profile from "../assets/santosh.jpg";

const Home = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable PrintScreen
    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.metaKey && e.key.toLowerCase() === "s")
      ) {
        e.preventDefault();
        navigator.clipboard.writeText(""); // Clear clipboard
        alert("Screenshot / Save disabled for security.");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 text-gray-800 select-none">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 py-20 md:py-32 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Text Content */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I’m Santosh Kumar Sahani
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Passionate Structural Designer dedicated to creating modern, safe, and innovative solutions. Expertise in <span className="font-semibold text-blue-400">AutoCAD</span>, <span className="font-semibold text-pink-400">3Ds Max</span>, and <span className="font-semibold text-purple-400">STAAD PRO and Revit</span>.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition mb-6 md:mb-0">
            Hire Me
          </button>
        </div>

        {/* Profile Image with watermark */}
        <div className="md:w-1/2 mt-10 md:mt-0 z-10 relative flex justify-center">
          <img 
            src={profile} 
            alt="Santosh Kumar Sahani" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl border-4 border-white relative z-10" 
          />
          {/* Watermark Overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            <span className="text-white/20 text-2xl md:text-4xl font-bold rotate-45 select-none">
              © Santosh Kumar Sahani
            </span>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 md:px-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering structural design solutions that blend precision with creativity using <span className="font-semibold text-blue-600">AutoCAD</span>, <span className="font-semibold text-purple-600">3Ds Max</span>, and <span className="font-semibold text-pink-600">Revit</span>.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Cards */}
          {[
            { icon: "🏗️", title: "Structural Analysis & Design", desc: "Safe, efficient, and innovative structural solutions for residential, commercial, and industrial projects.", gradient: "from-blue-500 to-indigo-500" },
            { icon: "📐", title: "AutoCAD Drafting", desc: "Accurate 2D drawings, plans, elevations, and construction documents.", gradient: "from-green-400 to-emerald-500" },
            { icon: "🎨", title: "3Ds Max Visualization", desc: "Realistic 3D modeling and rendering for better visualization.", gradient: "from-purple-400 to-pink-500" },
            { icon: "🏢", title: "Revit BIM Modeling", desc: "Smart coordinated BIM models for accurate planning and execution.", gradient: "from-pink-400 to-red-500" },
            { icon: "🧱", title: "Steel & Concrete Structures", desc: "Design and detailing of RCC, steel frames, foundations, and components.", gradient: "from-yellow-400 to-orange-500" },
            { icon: "🔧", title: "Renovation & Retrofitting", desc: "Strengthening and modernizing existing structures with innovative approaches.", gradient: "from-red-400 to-pink-600" },
          ].map((item, index) => (
            <div key={index} className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-r ${item.gradient} text-white`}>
              <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full mb-6 text-2xl">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
