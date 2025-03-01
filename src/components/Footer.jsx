import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mt-auto shadow-inner">
    <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left px-6">
      <p className="font-semibold">© 2025 AMH Advisors | All Rights Reserved</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        {[
          { href: "https://facebook.com", icon: <FaFacebookF />, color: "hover:text-blue-500" },
          { href: "https://linkedin.com", icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
          { href: "https://instagram.com", icon: <FaInstagram />, color: "hover:text-pink-500" },
          { href: "https://twitter.com", icon: <FaTwitter />, color: "hover:text-blue-400" },
        ].map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={`text-gray-500 transition-all duration-300 ${item.color}`}>
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
