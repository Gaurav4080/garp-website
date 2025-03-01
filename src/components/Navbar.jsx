import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaServicestack, FaUsers, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg py-1 fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/home" className="text-2xl font-extrabold flex items-center gap-2 hover:scale-105 transition-transform font-serif">
          <img className="h-16 w-auto" src="https://logoeps.com/wp-content/uploads/2013/05/the-institute-of-chartered-accountants-of-india-vector-logo.png" alt="" />
          <span className='font-cursive'>AMH Advisors</span>
        </Link>
        <button className="md:hidden text-xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
        <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:flex space-x-6 transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
          {[{ to: "/home", label: "Home", icon: <FaHome /> },
            { to: "/about", label: "About Us", icon: <FaInfoCircle /> },
            { to: "/services", label: "Services", icon: <FaServicestack /> },
            { to: "/team", label: "Our Team", icon: <FaUsers /> },
            { to: "/contact", label: "Contact", icon: <FaEnvelope /> }].map((item, index) => (
            <li key={index} className="border-b md:border-none">
              <Link to={item.to} onClick={handleLinkClick} className="px-6 py-3 md:py-0 hover:text-blue-400 flex items-center gap-2 transition-all duration-300 hover:scale-105">
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
