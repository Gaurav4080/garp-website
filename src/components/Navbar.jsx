import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaUsers,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  { to: "/", label: "Home", icon: <FaHome /> },
  { to: "/about", label: "About Us", icon: <FaInfoCircle /> },
  { to: "/services", label: "Services", icon: <FaServicestack /> },
  { to: "/team", label: "Our Team", icon: <FaUsers /> },
  { to: "/client", label: "Clients", icon: <FaUsers /> },
  { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Desktop Horizontal Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 w-full bg-slate-100 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 w-full">
          <Link
            to="/"
            className="text-2xl font-extrabold flex items-center gap-2 hover:opacity-80 transition-opacity font-serif"
          >
            <img
              className="h-12 w-auto"
              src="https://logoeps.com/wp-content/uploads/2013/05/the-institute-of-chartered-accountants-of-india-vector-logo.png"
              alt="Logo"
            />
            <span className="font-cursive">GARP Advisors</span>
          </Link>
          <ul className="flex space-x-6 text-slate-600">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={`flex items-center gap-1 hover:text-blue-500 transition-colors ${location.pathname === item.to ? "text-blue-500 font-semibold" : ""
                    }`}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Button (shown only when sidebar is closed) */}
      {!menuOpen && (
        <div className="flex justify-between items-center md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-4 py-5">
          <div className="fixed top-2 left-4 z-50">
            <button
              className="p-2 text-2xl bg-white shadow-md rounded-md"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
          <div className="flex-1 text-right pr-6">
            <h3 className="text-xl font-semibold tracking-tight text-slate-800">
              <span className="text-indigo-600 font-bold">GARP</span>{" "}
              <span className="text-slate-500">Advisors</span>
            </h3>
          </div>
        </div>
      )}

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h3 className="text-xl font-semibold tracking-tight text-slate-800">
            <span className="text-indigo-600 font-bold">GARP</span>{" "}
            <span className="text-slate-500">Advisors</span>
          </h3>          <button
            className="text-xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✖
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-4 text-slate-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-3 hover:bg-blue-100 transition-colors ${location.pathname === item.to ? "bg-blue-50 font-semibold" : ""
                  }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;