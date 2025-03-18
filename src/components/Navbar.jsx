import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaUsers, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg py-2 fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-2 hover:opacity-80 transition-opacity font-serif">
          <img className="h-12 w-auto" src="https://logoeps.com/wp-content/uploads/2013/05/the-institute-of-chartered-accountants-of-india-vector-logo.png" alt="Logo" />
          <span className='font-cursive'>AMH Advisors</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Menu List */}
        <ul className={`absolute md:static top-14 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row items-center md:space-x-6 overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-screen py-4" : "max-h-0 md:max-h-screen"}`}>
          {[{ to: "/", label: "Home", icon: <FaHome /> },
          { to: "/about", label: "About Us", icon: <FaInfoCircle /> },
          { to: "/services", label: "Services", icon: <FaServicestack /> },
          { to: "/team", label: "Our Team", icon: <FaUsers /> },
          { to: "/contact", label: "Contact", icon: <FaEnvelope /> }].map((item, index) => (
            <li key={index} className="border-b md:border-none w-full text-center md:w-auto">
              <Link to={item.to} onClick={() => setMenuOpen(false)} className="px-6 py-3 md:py-0 hover:text-blue-400 flex justify-center md:justify-start items-center gap-1 transition-all duration-300">
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
