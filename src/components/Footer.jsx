import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-slate-200 text-slate-600 py-4 mt-auto shadow-inner">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">

      {/* Company Info */}
      <p className="text-sm md:text-base font-medium text-center md:text-left">
        © 2025 <span className="font-semibold text-slate-800">GARP Advisors</span> &nbsp;|&nbsp; All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex space-x-4">
        {[
          { href: "https://facebook.com", icon: <FaFacebookF />, color: "hover:text-blue-500" },
          { href: "https://linkedin.com", icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
          { href: "https://instagram.com", icon: <FaInstagram />, color: "hover:text-pink-500" },
          { href: "https://twitter.com", icon: <FaTwitter />, color: "hover:text-blue-400" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl text-gray-500 hover:scale-110 transform transition-all duration-300 ${item.color}`}
            aria-label={`Visit our ${item.href.split('.')[1]} page`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
