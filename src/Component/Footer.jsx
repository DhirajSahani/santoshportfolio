import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import santosh from "../assets/santosh.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-1">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={santosh}
            alt="logo"
            className="w-24 h-24 mb-4 rounded-full shadow-lg"
          />
          <h4 className="text-green-500 font-bold uppercase text-lg">
            Your Vision
          </h4>
          <h5 className="text-gray-300 italic font-semibold mb-3">My Design</h5>
          <p className="text-gray-400 text-sm md:text-base">
            “As an aspiring Assistant Structural Engineer, I aim to contribute
            my technical knowledge and problem-solving skills toward designing
            safe, sustainable, and innovative structures. Skilled in AutoCAD,
            STAAD Pro, and 3DS Max.”
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-green-500 font-bold uppercase mb-4">
            Contact Me
          </h4>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-green-400" />
            <span>+91 9644767257</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-green-400" />
            <span>santoshkumarsahani778@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-green-400" />
            <span>Prabhat Square, Bhopal, Madhya Pradesh, India</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a
              href="https://www.facebook.com/dhiraj.sahani.773126"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/erdhiraj-sahani-baaa9020a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/DhirajSahani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.276522112194!2d77.41261407530178!3d23.26800498484467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4288f4c7c9b7%3A0x7f7bb8e64be6e0f0!2sPrabhat%20Square%2C%20Bhopal%2C%20Madhya%20Pradesh%20462001%2C%20India!5e0!3m2!1sen!2sin!4v1726729999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Er. Santosh Kr Sahani. All rights
        reserved.
      </div>
    </footer>
  );
}
