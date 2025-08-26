// import React from "react";
// import { motion } from "framer-motion";
import Header from "../../components/Header/Header.jsx";
import DrillingImage from "../../assets/Drilling.jpeg";

// const RainwaterHarvestingService = () => {
//   const services = [
//     {
//       id: 1,
//       title: "PVC Borewell Drilling Service",
//       description:
//         "We offer expert PVC borewell drilling using high-quality, corrosion-resistant PVC casings ideal for residential, agricultural, and industrial use. With advanced equipment and skilled professionals, we ensure precise drilling, excellent water yield, and long-lasting performance—all with fast turnaround and minimal disruption.",
//       image:
//         "https://5.imimg.com/data5/ANDROID/Default/2022/7/WV/WP/DJ/6169003/prod-20220715-0743356041530766023575981-jpg-500x500.jpg",
//       alt: "Construction building framework",
//     },
//     {
//       id: 2,
//       title: "Agriculture Drilling Service",
//       description:
//         "Boost your farm’s water access with our specialized Agriculture Drilling Services. We provide efficient and accurate borewell drilling tailored to agricultural needs, ensuring high water yield for irrigation. With advanced drilling rigs, expert operators, and durable casing solutions, we help farmers secure reliable water sources even in challenging terrains.",
//       image:
//         "https://5.imimg.com/data5/ANDROID/Default/2022/7/KL/OA/DB/6169003/product-jpeg-500x500.jpg",
//       alt: "Steel bridge construction",
//     },
//     {
//       id: 3,
//       title: "Commercial Drilling Service",
//       description:
//         "Our Commercial Drilling Services are designed to meet the high demands of commercial and industrial water needs. From large-scale construction sites to factories and institutions, we deliver deep and dependable borewell solutions using advanced drilling rigs and high-strength casing materials.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2023/10/353940317/FH/TA/BM/6169003/commercial-drilling-service-500x500.png",
//       alt: "Modern commercial building",
//     },
//     {
//       id: 4,
//       title: "Residential Drilling Service",
//       description:
//         "Ensure a reliable and long-lasting water source for your home with our expert Residential Drilling Services. We provide safe, clean, and efficient borewell drilling tailored for residential properties, using advanced equipment and durable casing materials. Whether it's for a single house or a housing complex, we deliver precise, low-disruption drilling with guaranteed water access.",
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2022/7/LP/HV/QT/6169003/core-drilling-service-500x500.png",
//       alt: "Modern interior dining room",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   const headerVariants = {
//     hidden: {
//       opacity: 0,
//       y: -20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section className="min-h-screen bg-gray-50">
//       <Header />
//       <motion.section
//         className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Background Image Overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
//           style={{
//             backgroundImage: `url(${DrillingImage})`,
//           }}
//         />

//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black opacity-40" />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//           <motion.h1
//             className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold mb-4"
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             Rainwater Harvesting Service
//           </motion.h1>

//           <motion.nav
//             className="text-lg md:text-xl"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <span className="text-white hover:text-yellow-400 cursor-pointer transition-colors">
//               Home
//             </span>
//             <span className="mx-3 text-yellow-400">/</span>
//             <span className="text-yellow-400">
//               Rainwater Harvesting Service
//             </span>
//           </motion.nav>
//         </div>
//       </motion.section>
//       <div className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <motion.div
//             className="text-center mb-16"
//             initial="hidden"
//             animate="visible"
//             variants={headerVariants}
//           >
//             <h1 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 mb-6 tracking-tight">
//               Our Drilling Solutions
//             </h1>
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
//               Leading Service Provider of PVC Borewell Drilling Service,
//               Agriculture Drilling Service, Commercial Drilling Service and
//               Residential Drilling Service from Lucknow.
//             </p>
//           </motion.div>

//           {/* Services Grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 variants={itemVariants}
//                 whileHover={{
//                   y: -5,
//                   transition: { duration: 0.2 },
//                 }}
//               >
//                 {/* Image Container */}
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.alt}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black opacity-10 hover:bg-opacity-0 transition-opacity duration-300"></div>
//                 </div>

//                 {/* Content Container */}
//                 <div className="p-6 lg:p-8">
//                   <h3 className="text-xl lg:text-2xl uppercase font-bold text-blue-900 mb-4 tracking-wide">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed text-base">
//                     {service.description}
//                   </p>
//                   <motion.button
//                     className="w-full bg-blue-600 hover:bg-blue-700 mt-6 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => {
//                       // Add your contact logic here
//                       alert(`Contact us for ${service.title} service!`);
//                     }}
//                   >
//                     Contact Us
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RainwaterHarvestingService;

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RainwaterHarvestingService = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const benefitsList = [
    "Water Bill Savings",
    "Eco-Friendly Solution",
    "Reliable Water Source",
    "Reduces Runoff Impact",
    "Low Maintenance System",
    "Customizable Design Options",
  ];

  const whyChooseList = [
    "30+ Years Experience",
    "End-to-End Solutions",
    "Expert Technical Team",
    "Quality-Driven Services",
    "Customer-Centric Approach",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
            Rainwater Harvesting Service
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
            <span className="text-yellow-400">
              Rainwater Harvesting Service
            </span>
          </motion.nav>
        </div>
      </motion.section>
      {/* Hero Section */}
      <motion.section
        className="relative bg-white py-16 lg:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              SERVICE OVERVIEW
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our Rainwater Harvesting Service provides sustainable,
                  cost-effective solutions designed to conserve water, reduce
                  utility costs, and promote eco-friendly living. We specialize
                  in designing, installing, and maintaining customized rainwater
                  harvesting systems tailored to meet residential, commercial,
                  and agricultural needs.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-gray-600 text-lg leading-relaxed">
                  By capturing and storing rainwater from rooftops, paved areas,
                  or open landscapes, our systems reduce dependency on municipal
                  water supplies, help manage stormwater runoff, and support
                  water availability during dry seasons. Whether for landscape
                  irrigation, flushing, or non-potable usage, we ensure that
                  every system is optimized for efficiency, hygiene, and
                  long-term performance.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/9/343469511/NQ/QY/KE/6169003/rainwater-harvesting-how-does-it-work-500x500.webp"
                  alt="City skyline view"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits and Why Choose Us Section */}
      <motion.section
        className="py-16 lg:py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Our Benefits */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6"
                variants={fadeInUp}
              >
                Benefits Of Rainwater Harvesting
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                variants={fadeInUp}
              >
                Rainwater harvesting offers an efficient and eco-friendly way to
                collect, store, and utilize natural rainfall. It reduces
                dependence on municipal water systems, lowers utility costs, and
                helps conserve one of our planet’s most vital resources. Ideal
                for residential, commercial, and agricultural applications, this
                sustainable solution supports environmental responsibility while
                providing long-term savings and water security.
              </motion.p>

              <motion.ul className="space-y-4">
                {benefitsList.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-5 h-5 text-yellow-500" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6"
                variants={fadeInUp}
              >
                Why Choose Us
              </motion.h2>

              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                variants={fadeInUp}
              >
                Established in 1995, M/S Drinking Water Organisation has over 30
                years of trusted expertise in delivering high-quality water
                solutions. As a leading Service Provider, we specialize in
                Drilling Services, Irrigation Solutions, and Rainwater
                Harvesting Systems, offering end-to-end services tailored to
                meet the unique needs of residential, commercial, and
                agricultural clients. Our commitment to innovation, customer
                satisfaction, and sustainable practices sets us apart as a
                reliable partner in water management.
              </motion.p>

              <motion.ul className="space-y-4">
                {whyChooseList.map((reason, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-lg">{reason}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RainwaterHarvestingService;
