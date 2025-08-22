import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import DrillingImage from "../../assets/Drilling.jpeg";

const InstallationService = () => {
  const services = [
    {
      id: 1,
      title: "PVC Household Tubewell Installation Services",
      description:
        "We offer reliable and efficient PVC tubewell installation for residential properties, ensuring clean and consistent water supply. Using durable, non-corrosive PVC pipes and advanced drilling techniques, our service guarantees safe groundwater access with minimal disruption to your property. Perfect for homes seeking long-term water solutions.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320243231/NN/KG/NW/6169003/pvc-household-tubewell-installation-services-500x500.jpeg",
      alt: "Construction building framework",
    },
    {
      id: 2,
      title: "PVC Submersible Pump Installation Service",
      description:
        "We provide expert installation of PVC submersible pumps for efficient and reliable water extraction from borewells and tubewells. Our service ensures proper alignment, secure fittings, and long-lasting performance using corrosion-resistant PVC materials—ideal for residential, agricultural, and commercial applications.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/TV/OE/VX/6169003/submersible-pump-installation-service-500x500.png",
      alt: "Steel bridge construction",
    },
    {
      id: 3,
      title: "PVC Domestic Tubewell Installation Service",
      description:
        "We specialize in installing high-quality PVC tubewells for domestic use, ensuring a steady and safe water supply for households. Our service uses durable, non-corrosive PVC materials and advanced drilling techniques to deliver long-lasting performance with minimal maintenance—perfect for daily home water needs.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320243104/CR/PU/WT/6169003/pvc-domestic-tubewell-installation-service-500x500.jpeg",
      alt: "Modern commercial building",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <Header />
      <motion.section
        className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{
            backgroundImage: `url(${DrillingImage})`,
          }}
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <motion.h1
            className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Installation Service
          </motion.h1>

          <motion.nav
            className="text-lg md:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-white hover:text-yellow-400 cursor-pointer transition-colors">
              Home
            </span>
            <span className="mx-3 text-yellow-400">/</span>
            <span className="text-yellow-400">Installation Service</span>
          </motion.nav>
        </div>
      </motion.section>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
          >
            <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-6 tracking-tight">
              Our Installation Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Providing you the best range of PVC Household Tubewell
              Installation Services, PVC Submersible Pump Installation Service
              and PVC Domestic Tubewell Installation Service with effective &
              timely delivery.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-10 hover:bg-opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl lg:text-2xl uppercase font-bold text-blue-900 mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                  <motion.button
                    className="w-full bg-blue-600 hover:bg-blue-700 mt-6 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => (window.location.href = "tel:9532888668")}
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstallationService;
