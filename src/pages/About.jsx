import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [typedText, setTypedText] = useState("K");
  const fullText = "now more about Us...";
  const typingSpeed = 150;

  useEffect(() => {
    let index = 0;
    setTypedText("K");

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText("K" + fullText.slice(0, index + 1));
        index++;
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Who We Are",
      content:
        "GARP Advisors is a dynamic and seasoned chartered accountancy firm operating from Delhi & Noida. Our mission has been to be client-centric by providing professional services of the highest standard in a timely and effective manner and adhering to the code of conduct and ethics of the profession.",
    },
    {
      title: "Our Impact",
      content:
        "We continue to grow and expand in our efforts to meet the client’s needs and satisfaction. Our expert professionals ensure that our clients receive prompt and personalized solutions at all times.",
    },
    {
      title: "Our Mission, Vision & Values",
      content:
        "Our Mission: Creating value for stakeholders, making significant contributions in a variety of areas, high quality services, efficiency and improving financial performance is what underlines our mission.",
    },
    {
      title: "Our Values",
      content:
        "Our moral and ethics reflect our responsibility towards work, clients, society at large and to the nation. We believe that our values have been the hallmark of our progress.",
    },
    {
      title: "Core Competencies",
      content:
        "Sustain relationships, excellence, efficiency and relevance is what define success for us. We tirelessly work on Leverage Collective Strengths, Create Differentiation, Innovation, Agile with change & practical knowledge.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center min-h-screen w-full bg-[#0d0d0d] text-gray-200 px-6 pt-20 pb-16 overflow-hidden">
      {/* Typing Heading with Futuristic Font */}
      <h2 className="text-4xl sm:text-5xl font-light tracking-wide text-white text-center mb-8 min-h-[48px] glitch-effect">
        {typedText}
      </h2>

      {/* Alternating Layout with Unique Graphics */}
      <div className="max-w-6xl w-full space-y-12 relative">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex w-full items-center"
          >
            {/* Unique Animated Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`absolute ${index % 2 === 0 ? "left-0" : "right-0"} w-32 h-32 bg-cyan-500 opacity-30 rounded-full blur-xl`}
            ></motion.div>

            {/* Text Box */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ boxShadow: "0px 0px 15px cyan", scale: 1.05 }}
              className={`bg-[#1a1a1a] p-8 rounded-xl shadow-lg backdrop-blur-lg w-full md:w-1/2 ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{section.title}</h3>
              <p className="text-gray-400 text-lg">{section.content}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
