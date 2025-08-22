import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import DrillingImage from "../../assets/Drilling.jpeg";

const DrillingService = () => {
  const services = [
    {
      id: 1,
      title: "DESIGN AND BUILD",
      description:
        "Aidid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Construction building framework",
    },
    {
      id: 2,
      title: "BUILDING CONSTRUCTION",
      description:
        "Widid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Steel bridge construction",
    },
    {
      id: 3,
      title: "COMMERCIAL CONSTRUCTION",
      description:
        "Tidid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern commercial building",
    },
    {
      id: 4,
      title: "INTERIOR RENOVATION",
      description:
        "Tidid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern interior dining room",
    },
    {
      id: 5,
      title: "REPAIR & MAINTENANCE",
      description:
        "Tidid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Construction worker in hard hat",
    },
    {
      id: 6,
      title: "VIRTUAL DESIGN",
      description:
        "Tidid ipsum dolor sit amet consec adipis elit sed do eiusmod tempor incididut labore et dolore magna aliqua natus eiusmod tempor.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Modern skyscrapers and urban planning",
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
            Drilling Services
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
            <span className="text-yellow-400">Drilling Services</span>
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
              Our Drilling Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leading Service Provider of PVC Borewell Drilling Service,
              Agriculture Drilling Service, Commercial Drilling Service and
              Residential Drilling Service from Lucknow.
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
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-900 mb-4 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* SEO Meta Information */}
          <div className="hidden">
            <h2>Construction Services</h2>
            <p>
              Professional construction, renovation, and design services
              including building construction, commercial construction, interior
              renovation, repair and maintenance, and virtual design solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrillingService;
