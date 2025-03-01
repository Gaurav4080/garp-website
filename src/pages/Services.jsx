import { motion } from "framer-motion";
import {
  FaFileInvoiceDollar, FaBalanceScale, FaBuilding,
  FaRegClipboard, FaHandHoldingUsd, FaChartLine
} from "react-icons/fa";
import { useState, useEffect } from "react";

const services = [
  {
    name: "GST Services",
    icon: <FaFileInvoiceDollar className="text-cyan-400 text-5xl" />,
    description: "Our team of professionals specializes in GST, offering expert services across India. We cover almost all aspects of Goods & Services Tax with deep expertise.",
  },
  {
    name: "Taxation & Compliance",
    icon: <FaBalanceScale className="text-cyan-400 text-5xl" />,
    description: "From corporate tax filings to individual tax planning, we ensure you meet all regulatory requirements while optimizing tax benefits.",
  },
  {
    name: "Company Law",
    icon: <FaBuilding className="text-cyan-400 text-5xl" />,
    description: "We help businesses navigate corporate legalities, including company registration, ROC compliance, and regulatory advisory.",
  },
  {
    name: "Audit Services",
    icon: <FaRegClipboard className="text-cyan-400 text-5xl" />,
    description: "Our auditing services include statutory audits, tax audits, forensic audits, and due diligence reports for compliance.",
  },
  {
    name: "Financial Advisory",
    icon: <FaHandHoldingUsd className="text-cyan-400 text-5xl" />,
    description: "We provide strategic financial planning, risk assessment, and investment advisory to help businesses and individuals optimize financial growth and security.",
  },
  {
    name: "Investment Planning",
    icon: <FaChartLine className="text-cyan-400 text-5xl" />,
    description: "Our investment planning services help individuals and businesses maximize returns with tailored investment strategies.",
  }
];

const Services = () => {
  const [title, setTitle] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const fullTitle = "Our Services...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 100);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative flex flex-col items-center min-h-screen w-full bg-[#0d0d0d] text-gray-200 px-6 pt-20 pb-16">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ff00ff22,_transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#00ffff22,_transparent)]"></div>

      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-light tracking-wide text-white mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h2>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.3)" }}
            transition={{ duration: 0.3 }}
            className={`p-6 rounded-xl bg-[#151515] shadow-lg border border-gray-700 
              backdrop-blur-lg flex flex-col items-center text-center w-full cursor-pointer
              ${expandedIndex === index ? "h-auto" : "h-[300px] md:h-[350px] lg:h-[400px]"} transition-all`}
            onClick={() => toggleExpand(index)}
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="mb-4 flex items-center justify-center flex-col h-full"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-white mt-3">{service.name}</h3>
            </motion.div>

            {/* Expandable Description */}
            {expandedIndex === index && (
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                {service.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
