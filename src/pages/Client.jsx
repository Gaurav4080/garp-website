import { FaUserTie, FaUserGraduate, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const teamMembers = [
  { name: "Ms. Annpurna Aggarwal", role: "Founder - Chartered Accountant", experience: "She has considerable experience of more than 10 years in Indirect Tax Advisory, compliances, DGFT matters, Audit  Due diligence, and other laws viz. GST, Central Excise, Service Tax, VAT, Customs, FTP etc.", phone: "+91 94139 33176", icon: <FaUserTie className="text-blue-500 text-6xl" /> },
  { name: "Mr. Mahesh Aggarwal", role: "Chartered Accountant", experience: "He has in-depth experience of 10 years in matters related to Direct Tax, Company Law Matters, Management Audit & Internal Audit. He has a strong understanding of the Retail & Hospitality sector in all areas relating to Taxation, Accounting, and Budgeting & Forecasting.", phone: "+91 91365 70688", icon: <FaUserTie className="text-green-500 text-6xl" /> },
  { name: "Mr. Gaurav Agarwal", role: "Software Developer", experience: "", phone: "+91 95188 97525", icon: (
      <div className="flex items-center justify-center gap-3">
        <FaUserTie className="text-orange-500 text-6xl" />
        <FaLaptopCode className="text-yellow-400 text-5xl" />
      </div>
    ) 
  },
  { name: "Mr. Kush Sapra", role: "Chartered Accountant", experience: "He has a considerable experience of more than 8 years in Indirect Tax Advisory, RERA compliances, GST Audit, Bank Audit, Income Tax Audit, Statuary Audit, Income Tax Assessment Proceedings, and Finalization of Books of Account for Corporate and Non-Corporate Clients.", icon: <FaUserTie className="text-orange-500 text-6xl" /> },
  { name: "CS Sristi Sinha", role: "Company Secretary", experience: "Experience in Company Law Matters, Due Diligence, Certification under various Acts, and other secretarial matters.", icon: <FaUserGraduate className="text-purple-500 text-6xl" /> }
];

const useTypewriter = (text, speed = 75) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed]);

  return displayText;
};

const Client = () => {
  const animatedTitle = useTypewriter("Meet Our Team...", 75);

  return (
    <section className="relative flex flex-col items-center min-h-screen w-full bg-[#0d0d0d] text-gray-200 px-6 pt-20 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ff007f33,_transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#00ffff33,_transparent)]"></div>

      <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-white mb-10 text-center">
        {animatedTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {teamMembers.slice(0, 2).map((member, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.07, borderColor: "#ff007f" }} 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="p-8 bg-[#1a1a1a] rounded-xl shadow-lg border-2 border-transparent hover:border-[#ff007f] transition-all duration-200 backdrop-blur-lg text-center flex flex-col items-center"
          >
            {member.icon}
            <h3 className="text-xl lg:text-2xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-400 text-sm lg:text-lg">{member.role}</p>
            <p className="text-gray-500 mt-2 text-sm">📞 {member.phone}</p>
          </motion.div>
        ))}

        <div className="col-span-1 sm:col-span-2 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.07, borderColor: "#00ffff" }} 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-8 bg-[#1a1a1a] rounded-xl shadow-lg border-2 border-transparent hover:border-[#00ffff] transition-all duration-200 backdrop-blur-lg text-center w-full max-w-md"
          >
            <div className="flex justify-center">{teamMembers[2].icon}</div>
            <h3 className="text-xl lg:text-2xl font-semibold mt-4">{teamMembers[2].name}</h3>
            <p className="text-gray-400 text-sm lg:text-lg">{teamMembers[2].role}</p>
            <p className="text-gray-500 mt-2 text-sm">📞 {teamMembers[2].phone}</p>
          </motion.div>
        </div>

        {teamMembers.slice(3).map((member, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.07, borderColor: "#ff007f" }} 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index + 3) * 0.15 }}
            className="p-8 bg-[#1a1a1a] rounded-xl shadow-lg border-2 border-transparent hover:border-[#ff007f] transition-all duration-200 backdrop-blur-lg text-center flex flex-col items-center"
          >
            {member.icon}
            <h3 className="text-xl lg:text-2xl font-semibold mt-4">{member.name}</h3>
            <p className="text-gray-400 text-sm lg:text-lg">{member.role}</p>
            <p className="text-gray-500 mt-2 text-sm">📞 {member.phone}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Client;