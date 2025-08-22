import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import DrillingImage from "../../assets/Drilling.jpeg";

const HarvestingService = () => {
  const services = [
    {
      id: 1,
      title: "Rainwater Harvesting Service",
      description:
        "Being a foremost organization in this industry, we are actively engaged in offering the finest quality Rainwater Harvesting Service.This service is executed by our skilled professionals using high grade tools and advanced technology. Our professionals check all the quality parameters associated to this service and perform the service in the best possible manner. We offer this service as per the requirements of our clients. Further, we provide this service as per the requirements of our clients at most affordable price.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/YL/SK/LZ/6169003/rainwater-harvesting-service-500x500.png",
      alt: "Construction building framework",
    },
    {
      id: 2,
      title: "Rainwater Harvesting Consultancy Service",
      description:
        "Being a leader in this industry, we are devoted towards providing a premium quality Rainwater Harvesting Consultancy Service.This service is performed as per the requirements of our precious clients. The provided service is highly appreciated by our clients owing to its hassle free execution and cost-effectiveness features. This service is carried out by our highly qualified professionals using excellent grade tools and modern technology. ",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/KK/JK/CQ/6169003/rainwater-harvesting-consultancy-service-500x500.png",
      alt: "Steel bridge construction",
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
            Harvesting Services
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
            <span className="text-yellow-400">Harvesting Services</span>
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
              Our Harvesting Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Providing you the best range of Rainwater Harvesting Service and
              Rainwater Harvesting Consultancy Service with effective & timely
              delivery.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10"
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
                <div className="relative h-64 md:h-96 lg:h-96 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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

export default HarvestingService;
