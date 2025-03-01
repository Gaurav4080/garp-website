import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const texts = ["Your Trusted Taxation Partner", "Expert Taxation & Compliance"];
  const typingSpeed = 150;
  const erasingSpeed = 75;
  const delayBetween = 2000;

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && charIndex <= texts[textIndex].length) {
        setTypedText(texts[textIndex].slice(0, charIndex));
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        setTypedText(texts[textIndex].slice(0, charIndex));
        charIndex--;
        setTimeout(type, erasingSpeed);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, delayBetween);
      }
    };

    type();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.7;
      if (window.scrollY > heroHeight) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-[#0d0d0d] text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <div 
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/1147525564/photo/confident-businesswoman-working-on-laptop-at-her-workplace-at-modern-office-blurred-background.jpg?s=612x612&w=0&k=20&c=vaxi5XcwEjISAjdaubD2-G-NypfMI3qmfGRVarrXY7U=')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1 
            className="text-7xl sm:text-9xl font-extrabold tracking-wide text-white font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            AMH Advisors
          </motion.h1>
          <motion.h2 
            className="text-4xl sm:text-6xl font-light text-white tracking-wide min-h-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {typedText}
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-3xl text-white mt-4 font-light tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Expert Taxation, GST, and Corporate Compliance Solutions
          </motion.p>
        </div>
      </div>

      {/* Our Services Section */}
      <motion.div 
        className="relative flex flex-col items-center w-full px-10 pt-32 pb-32 bg-[#0d0d0d]"
        initial={{ opacity: 0, y: 30 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ff007f33,_transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#00ffff33,_transparent)]"></div>

        <motion.h2 
          className="text-6xl font-bold text-cyan-400 text-center relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services
          <motion.div 
            className="h-1 w-32 bg-cyan-400 mx-auto mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.h2>
        
        <div className="flex flex-col items-center w-[70%] mx-auto mt-12 space-y-12">
          {[
            "Tax Consultancy & Compliance", "GST Registration & Filing", "Corporate Tax Planning", "International Taxation & Transfer Pricing", "Business Incorporation & Licensing", "Audit & Assurance Services", "Legal Representation in Tax Litigation", "Financial Advisory & Risk Management"
          ].map((service, i) => (
            <motion.div 
              key={i} 
              className={`w-full flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <motion.div 
                className="w-8 h-8 bg-cyan-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              ></motion.div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl ml-4">
                <strong>{service}:</strong> We provide expert guidance on {service.toLowerCase()}, ensuring businesses remain compliant while optimizing financial performance.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;