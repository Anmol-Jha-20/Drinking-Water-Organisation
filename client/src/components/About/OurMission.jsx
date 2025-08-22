import React from "react";
import { motion } from "framer-motion";

const OurMissionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineData = [
    {
      year: "2013",
      description: "Natus perspiciatis unde omnis iste natus ewpor sit volup.",
    },
    {
      year: "2014",
      description: "Ut perspiciatis unde omnis iste natus ewpor sit lorem.",
    },
    {
      year: "2015",
      description: "Natus perspiciatis unde omnis iste natus ewpor sit volup.",
    },
    {
      year: "2016",
      description: "Ut perspiciatis unde omnis iste natus ewpor sit lorem.",
    },
  ];

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 relative"
                variants={itemVariants}
              >
                OUR MISSION
                <motion.div
                  className="w-12 h-1 bg-yellow-500 mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  Our mission is to provide sustainable, reliable, and
                  innovative water management solutions that address the growing
                  demand for efficient water use. Through our services in
                  Drilling, Irrigation, and Rainwater Harvesting, we aim to
                  improve access to water while promoting conservation and
                  environmental responsibility. We strive to create long-term
                  value for our clients and communities alike.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                With proud!!
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Since our establishment in 1995, we take great pride in being
                recognized as a trusted name in the water solutions industry.
                With years of experience and countless successful projects, our
                journey reflects our commitment to quality, integrity, and
                excellence. Every service we deliver is backed by the pride we
                hold in our legacy, our people, and the communities we serve.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Business Goal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our core business goal is to be a leader in innovative and
                sustainable water solutions across India. We aim to continuously
                expand our reach, upgrade our technology, and strengthen
                customer relationships by offering high-quality Drilling
                Services, Irrigation Systems, and Rainwater Harvesting
                Solutions. Growth, impact, and customer satisfaction remain at
                the heart of everything we do.
              </p>
            </motion.div>
          </motion.div>

          {/* History Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 relative"
                variants={itemVariants}
              >
                OUR HISTORY
                <motion.div
                  className="w-12 h-1 bg-yellow-500 mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.h2>

              <motion.p
                className="text-gray-600 leading-relaxed mb-8"
                variants={itemVariants}
              >
                Since our founding in 1995, we have steadily grown from a small
                operation into a reputable manufacturer and service provider
                specializing in Drilling Services, Irrigation Solutions, and
                Rainwater Harvesting Systems. Over the decades, our commitment
                to quality, innovation, and customer satisfaction has driven us
                to expand our expertise and adapt to evolving industry needs.
                Our journey reflects a legacy of trusted partnerships,
                successful projects, and a passion for sustainable water
                management that continues to shape our future.
              </motion.p>
            </div>

            {/* Timeline */}
            {/* <motion.div className="space-y-8" variants={containerVariants}>
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${
                    index % 2 === 0 ? "" : "sm:gap-8"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-left sm:text-right">
                        <h4 className="text-xl font-bold text-gray-400 mb-2">
                          {item.year}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="hidden sm:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden sm:block"></div>
                      <div className="text-left">
                        <h4 className="text-xl font-bold text-gray-400 mb-2">
                          {item.year}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div> */}
            <motion.div
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <motion.img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/6/320243231/NN/KG/NW/6169003/pvc-household-tubewell-installation-services-500x500.jpeg"
                  alt="House under construction showing innovative building techniques"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Blue accent overlay in corner */}
                {/* <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500 opacity-20 rounded-bl-full" /> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMissionSection;
