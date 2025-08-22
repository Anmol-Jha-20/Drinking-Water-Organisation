import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import OurMissionSection from "../components/About/OurMission.jsx";
import DrillingImage from "../assets/Drilling.jpeg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ABOUT US
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
            <span className="text-yellow-400">About Us</span>
          </motion.nav>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-16 md:py-16 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                WE ARE INNOVATIVE
              </motion.h2>

              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Established in 1995, we have grown from a humble beginning into
                a forward-thinking and reliable name in the field of water
                management. As a seasoned Manufacturer and Service Provider, we
                specialize in Drilling Services, Irrigation Systems, Rainwater
                Harvesting Solutions, and other sustainable water technologies.
              </motion.p>

              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Our innovative approach lies in combining decades of hands-on
                experience with modern techniques and environmentally conscious
                practices. We are committed to delivering smart, efficient, and
                long-lasting solutions that not only meet today’s water needs
                but also safeguard resources for the future.
              </motion.p>

              <motion.p
                className="text-gray-600 text-base md:text-lg leading-relaxed"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                By continuously evolving our methods and embracing the latest
                advancements in the industry, we ensure that our services remain
                at the forefront of quality, performance, and sustainability.
              </motion.p>
            </motion.div>

            {/* Image Content */}
            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <motion.img
                  src="https://5.imimg.com/data5/ANDROID/Default/2022/7/WV/WP/DJ/6169003/prod-20220715-0743356041530766023575981-jpg-500x500.jpg"
                  alt="House under construction showing innovative building techniques"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Blue accent overlay in corner */}
                {/* <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500 opacity-20 rounded-bl-full" /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <OurMissionSection />
    </div>
  );
};

export default AboutPage;
