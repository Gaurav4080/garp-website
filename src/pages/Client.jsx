// src/pages/Client.jsx
import { motion } from "framer-motion";

const clientList = [
  {
    name: "Arg Outlier Media Private Limited",
    logo: "https://via.placeholder.com/100?text=Arg+Outlier",
  },
  {
    name: "Suvidhi Ispat Private Limited",
    logo: "https://via.placeholder.com/100?text=Suvidhi+Ispat",
  },
  {
    name: "Knest Manufacturer Private Limited",
    logo: "https://via.placeholder.com/100?text=Knest",
  },
  {
    name: "Tunwal E Motors Limited",
    logo: "https://via.placeholder.com/100?text=Tunwal",
  },
  {
    name: "Air India Limited",
    logo: "https://via.placeholder.com/100?text=Air+India",
  },
  {
    name: "Rajhans Ferrours Scrap Trade Private Limited",
    logo: "https://via.placeholder.com/100?text=Rajhans",
  },
  {
    name: "IRCON International Limited",
    logo: "https://via.placeholder.com/100?text=IRCON",
  },
  {
    name: "Hi-M. Solutek India Private Limited",
    logo: "https://via.placeholder.com/100?text=Hi-M",
  },
  {
    name: "Nikhil Constructions Private Limited",
    logo: "https://via.placeholder.com/100?text=Nikhil+Constructions",
  },
  {
    name: "Unayur Marketing Private Limited",
    logo: "https://via.placeholder.com/100?text=Unayur",
  },
  {
    name: "Atiya Healthcare Private Limited",
    logo: "https://via.placeholder.com/100?text=Atiya",
  },
  {
    name: "Oakwood Winery Private Limited",
    logo: "https://via.placeholder.com/100?text=Oakwood",
  },
  {
    name: "Archer Projects LLP",
    logo: "https://via.placeholder.com/100?text=Archer",
  },
  {
    name: "Procon India Private Limited",
    logo: "https://via.placeholder.com/100?text=Procon",
  },
  {
    name: "Ansari Cranes Private Limited",
    logo: "https://via.placeholder.com/100?text=Ansari+Cranes",
  },
  {
    name: "Sunergy Products Private Limited",
    logo: "https://via.placeholder.com/100?text=Sunergy",
  },
];

const Client = () => (
  <section className="bg-white text-slate-800 px-6 py-20">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">
      Our Esteemed Clients
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto items-center justify-center">
      {clientList.map((client, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="text-center"
        >
          <img
            src={client.logo}
            alt={client.name}
            className="w-20 h-20 object-contain mx-auto mb-3"
          />
          <p className="text-sm text-slate-600 font-medium">{client.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Client;