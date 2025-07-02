import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Contact = () => {
  const [typedText, setTypedText] = useState("C");
  const fullText = "ontact Us...";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    setTypedText("C");
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText("C" + fullText.slice(0, index + 1));
        index++;
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 text-slate-800 px-6 md:px-16 lg:px-32 py-28 overflow-x-hidden">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 tracking-tight min-h-[48px]">
        {typedText}
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-28">
        {/* Office Locations */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-800 mb-2">
              <FaMapMarkerAlt className="text-blue-600" /> Head Office
            </h3>
            <p className="leading-relaxed text-slate-700">
              320/TF, C-1, Alpha-1 Krishna Apra Plaza, <br />
              HDFC Bank, Greater Noida, Gautam Budh Nagar, 201308
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-green-800 mb-2">
              <FaMapMarkerAlt className="text-green-600" /> Branch Office – Pune
            </h3>
            <p className="leading-relaxed text-slate-700">
              1002, Amanora Gold Tower, Hadapsar, <br />
              Pune, Maharashtra - 411028
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-pink-800 mb-2">
              <FaMapMarkerAlt className="text-pink-600" /> Branch Office – New Delhi
            </h3>
            <p className="leading-relaxed text-slate-700">
              17A/44, W.E.A. Off Gurudwara Road, <br />
              Karol Bagh, New Delhi - 110005, India
            </p>
          </motion.div>
        </div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-purple-800 mb-2">
              <FaPhoneAlt className="text-purple-600" /> Phone
            </h3>
            <p className="text-slate-700">
              <a
                href="tel:7014610220"
                className="hover:text-purple-500 transition"
              >
                +91-8954841762
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-blue-800 mb-2">
              <FaEnvelope className="text-blue-600" /> Email
            </h3>
            <a
              href="mailto:caanu96@gmail.com"
              className="text-slate-700 hover:text-blue-500 transition"
            >
              Office@garp.co.in
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-green-800 mb-2">
              <FaGlobe className="text-green-600" /> Website
            </h3>
            <a
              href="https://www.garp.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-bold underline hover:text-green-500 transition"
            >
              www.garp.co.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
