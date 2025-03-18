import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("G");
  const fullText = "et in Touch...";
  const typingSpeed = 100;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    let index = 0;
    setTypedText("G");
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText("G" + fullText.slice(0, index + 1));
        index++;
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactForm", JSON.stringify(formData)); // Save form data to local storage
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" }); // Clear form fields after submission
  };

  const customIcon = new Icon({ iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png", iconSize: [32, 32] });

  return (
    <section className="relative flex flex-col items-center min-h-screen w-full bg-[#0d0d0d] text-gray-200 px-6 pt-20 pb-16">
      <h2 className="text-4xl font-light tracking-wide text-white mb-10 text-center min-h-[48px]">{typedText}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg w-full border border-gray-700 backdrop-blur-lg flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4"><FaMapMarkerAlt className="text-red-400 text-xl" /><p className="text-lg">Zinnia 1117, SKA Metroville, Greater Noida</p></div>
          <div className="flex items-center gap-3 mb-4"><FaPhoneAlt className="text-green-400 text-xl" /><p className="text-lg"><a href="tel:7014610220" className="hover:text-green-300 transition">7014610220</a>, <a href="tel:9413933176" className="hover:text-green-300 transition">9413933176</a></p></div>
          <div className="flex items-center gap-3"><FaEnvelope className="text-blue-400 text-xl" /><p className="text-lg"><a href="mailto:caanu96@gmail.com" className="hover:text-blue-300 transition">caanu96@gmail.com</a></p></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-[#121212] p-6 rounded-xl shadow-xl w-full border border-gray-700 backdrop-blur-lg">
          <h3 className="text-2xl font-light mb-4 text-gray-300 text-center">Send Us a Message</h3>
          <AnimatePresence>
            {submitted ? (
              <motion.div initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }} transition={{ duration: 0.5 }} className="text-center p-6 bg-[#1a1a1a] border border-gray-600 rounded-xl shadow-lg flex flex-col justify-center">
                <FaCheckCircle className="text-green-400 text-4xl mx-auto mb-3" />
                <p className="text-lg font-semibold text-green-400">Thank you! Your message has been sent successfully.</p>
              </motion.div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <motion.input whileFocus={{ scale: 1.05, borderColor: "#4CAF50", boxShadow: "0px 0px 8px #4CAF50" }} type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="p-3 border border-gray-500 bg-[#1a1a1a] rounded-lg text-white focus:outline-none transition-all" />
                <motion.input whileFocus={{ scale: 1.05, borderColor: "#2196F3", boxShadow: "0px 0px 8px #2196F3" }} type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="p-3 border border-gray-500 bg-[#1a1a1a] rounded-lg text-white focus:outline-none transition-all" />
                <motion.textarea whileFocus={{ scale: 1.05, borderColor: "#FF9800", boxShadow: "0px 0px 8px #FF9800" }} name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="4" className="p-3 border border-gray-500 bg-[#1a1a1a] rounded-lg text-white focus:outline-none transition-all resize-none"></motion.textarea>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="p-3 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-bold rounded-lg transition-all">Send Message</motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="w-full max-w-5xl mt-8">
        <div className="h-80 w-full rounded-xl overflow-hidden">
          <MapContainer center={[28.496518, 77.537557]} zoom={15} className="w-full h-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.496518, 77.537557]} icon={customIcon}><Popup>You are here! 📍</Popup></Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
