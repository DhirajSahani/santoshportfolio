import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation(); // track current route

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

  // Manually add active class based on current path
  const getLinkClass = (path) =>
    `hover:text-gray-300 ${location.pathname === path ? "font-bold underline text-yellow-300" : ""}`;

  return (
    <nav
      className="bg-blue-600 text-white p-4 flex justify-between items-center relative"
      ref={menuRef}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">MyPortfolio</div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Nav Links */}
      <ul
        className={`md:flex md:items-center md:static absolute bg-blue-600 w-full md:w-auto left-0 transition-all duration-300 ease-in-out ${
          open ? "top-16" : "-top-96"
        } flex flex-col md:flex-row`}
      >
        <li className="mx-4 my-2 md:my-0">
          <Link to="/" className={getLinkClass("/")} onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className="mx-4 my-2 md:my-0">
          <Link to="/about" className={getLinkClass("/about")} onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className="mx-4 my-2 md:my-0">
          <Link to="/services" className={getLinkClass("/services")} onClick={() => setOpen(false)}>
            Services
          </Link>
        </li>
        <li className="mx-4 my-2 md:my-0">
          <Link to="/resume" className={getLinkClass("/resume")} onClick={() => setOpen(false)}>
            Resume
          </Link>
        </li>
        <li className="mx-4 my-2 md:my-0">
          <Link to="/contact" className={getLinkClass("/contact")} onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
