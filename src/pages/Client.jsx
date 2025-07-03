// src/pages/Client.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const clientList = [
  {
    name: "Arg Outlier Media Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKBioD2AaYhB7UKyV1PJohmCdy4sGrNLPcg&s",
  },
  {
    name: "Suvidhi Ispat Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSTPAbufjBDqBFmwfoQTTjWGFv4pythhffQ&s",
  },
  {
    name: "Knest Manufacturer Private Limited",
    logo: "https://mma.prnewswire.com/media/2210997/Knest_New_Logo.jpg?p=facebook",
  },
  {
    name: "Tunwal E Motors Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlU7wxIUpWux12_lGIKZfoBZpkD_aC0Mz2w&s",
  },
  {
    name: "Air India Limited",
    logo: "https://www.presentations.gov.in/wp-content/uploads/2020/06/Preview-2.png",
  },
  {
    name: "Rajhans Ferrours Scrap Trade Private Limited",
    logo: "https://www.recycleinme.com/storage/logo/65930.jpg",
  },
  {
    name: "IRCON International Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nE8_xDFRjGn2oFcoWigZZmOV0nw1mJPFqQ&s",
  },
  {
    name: "Hi-M. Solutek India Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZ-bsaFOHG8YOJUDDLJ1ztwwWFMUd1qwyKg&s",
  },
  {
    name: "Nikhil Constructions Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVEZVIdyZFZ-yKHqyWAoU5ss0qzSHkk0C8Q&s",
  },
  {
    name: "Unayur Marketing Private Limited",
    logo: "https://www.unayur.com/wp-content/uploads/2018/12/logo.jpg",
  },
  {
    name: "Atiya Healthcare Private Limited",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHY_2a7FKCdvg/company-logo_200_200/company-logo_200_200/0/1652959435998/atiya_healthcare_pvt_ltd_logo?e=2147483647&v=beta&t=TEdkpm7OCXZizRLlX5Tv4bhoSLDi72aMtKDpey9YoIM",
  },
  {
    name: "Oakwood Winery Private Limited",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBaH-alaUGZR5ECn7-XZGQjTdvk5uvrRujS7RIwtqpHOEoO8D6ZVlmVwNffeZy_wL6oBU&usqp=CAU",
  },
  {
    name: "Archer Projects LLP",
    logo: "https://static.vecteezy.com/system/resources/previews/050/348/498/non_2x/industrial-factory-icon-black-and-white-illustration-vector.jpg",
  },
  {
    name: "Procon India Private Limited",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFqfmZrVMtPYA/company-logo_200_200/company-logo_200_200/0/1631327359749?e=2147483647&v=beta&t=9KxA9FlGncaXM4SHuFwG9y3BPthKYPby-eeIrPfk1G8",
  },
  {
    name: "Ansari Cranes Private Limited",
    logo: "https://www.shutterstock.com/image-vector/mobile-crane-silhouette-black-white-600nw-2128694444.jpg",
  },
  {
    name: "Sunergy Products Private Limited",
    logo: "https://i.pinimg.com/564x/a8/11/3d/a8113d1b33032ba1c051c0a62a879d2b.jpg",
  },
];

const Client = () => {
  return (
    <section className="bg-white text-slate-800 px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-12">
        Our Clients
      </h2>

      {/* Carousel for mobile only */}
      <div className="sm:hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="max-w-xs mx-auto"
        >
          {clientList.map((client, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 mx-auto object-contain mb-2"
                />
                <p className="text-sm text-slate-600">{client.name}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid for sm and up */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto items-center justify-center">
        {clientList.map((client, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="text-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="w-28 h-28 object-contain mx-auto mb-3"
            />
            <p className="text-sm text-slate-600 font-medium">{client.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Client;