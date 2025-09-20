import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active link styling
  const getLinkClass = (path) =>
    `relative block px-3 py-2 transition duration-300 
     hover:text-yellow-300 
     ${location.pathname === path 
       ? "font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-yellow-400 after:to-pink-500 after:rounded-full" 
       : ""}`;

  return (
    <nav
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg"
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-300"></span>My Portfolio<span className="text-yellow-300"></span>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto 
          bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 md:bg-transparent 
          transition-all duration-500 ease-in-out 
          ${open ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"} 
          flex flex-col md:flex-row gap-6 md:gap-8 text-lg font-medium`}
        >
          <li>
            <Link to="/" className={getLinkClass("/")} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={getLinkClass("/about")} onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClass("/services")} onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/resume" className={getLinkClass("/resume")} onClick={() => setOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
