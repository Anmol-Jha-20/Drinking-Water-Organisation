// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const FadeInWhenVisible = ({ children, delay = 0 }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.2,
//   });

//   React.useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut", delay },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={variants}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const ProductCard = ({ imgSrc, title, delay = 0 }) => (
//   <FadeInWhenVisible delay={delay}>
//     <div className="group text-center">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 transition-transform duration-300 hover:scale-105">
//         <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
//           <img
//             src={imgSrc}
//             alt={title}
//             className="w-full h-full object-cover rounded"
//           />
//         </div>
//       </div>
//       <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//         {title}
//       </h2>
//     </div>
//   </FadeInWhenVisible>
// );

// const ProductRange = () => {
//   const products = [
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2023/10/353940317/FH/TA/BM/6169003/commercial-drilling-service-500x500.png",
//       title: "Drilling Services",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2022/7/KK/JK/CQ/6169003/rainwater-harvesting-consultancy-service-500x500.png",
//       title: "Harvesting Service",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2022/7/HQ/XC/KG/6169003/deep-hole-drilling-service-500x500.png",
//       title: "Drilling Service",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2022/7/TV/OE/VX/6169003/submersible-pump-installation-service-500x500.png",
//       title: "Installation Service",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2022/7/NN/TK/SG/6169003/irrigation-survey-service-500x500.png",
//       title: "Irrigation Service",
//     },
//     {
//       img: "https://5.imimg.com/data5/SELLER/Default/2023/9/343469511/NQ/QY/KE/6169003/rainwater-harvesting-how-does-it-work-500x500.webp",
//       title: "Rainwater Harvesting Service",
//     },
//   ];

//   return (
//     <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
//           Our Services
//         </h1>
//         <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
//         <p className="text-gray-900 text-lg md:text-sm max-w-3xl mx-auto leading-relaxed">
//           We provide a variety of solutions like Drilling Service, Irrigation
//           Service and Rain Water Harvesting System
//         </p>
//       </div>

//       {/* Products Grid */}
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {products.map((product, i) => (
//             <div
//               key={i}
//               className={`${
//                 i >= 2 && i < 5 ? "md:col-span-2 lg:col-span-1 mx-auto" : ""
//               }`}
//             >
//               <ProductCard
//                 imgSrc={product.img}
//                 title={product.title}
//                 delay={i * 0.1}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom decorative dots */}
//       <div className="flex justify-center mt-16 space-x-2">
//         {[...Array(8)].map((_, i) => (
//           <div key={i} className="w-3 h-3 bg-gray-300 rounded-full"></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductRange;

import React from "react";

const ServiceCard = ({ image, title, description, altText }) => {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-4 w-full aspect-[4/3] max-w-[280px]">
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-lg font-bold text-blue-900 mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-[250px] px-2">
        {description}
      </p>
      {/* <div className="pt-4">
        <button className="inline-flex items-center px-8 py-3 border-2 border-[#1C398E] text-[#1C398E] font-semibold rounded-sm hover:bg-[#1C398E] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#1C398E] focus:ring-offset-2">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

const ProductRange = () => {
  const services = [
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/353940317/FH/TA/BM/6169003/commercial-drilling-service-500x500.png",
      title: "Drilling Services",
      description:
        "Leading Service Provider of Commercial Drilling Service, PVC Borewell Drilling Service, Residential Drilling Service and Agriculture Drilling Service from Lucknow.",
      altText:
        "Multi-story building under construction with concrete floors and yellow safety railings",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/KK/JK/CQ/6169003/rainwater-harvesting-consultancy-service-500x500.png",
      title: "Harvesting Service",
      description:
        "Providing you the best range of Rainwater Harvesting Service and Rainwater Harvesting Consultancy Service with effective & timely delivery.",
      altText:
        "Steel bridge construction over canyon with desert landscape in background",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/HQ/XC/KG/6169003/deep-hole-drilling-service-500x500.png",
      title: "Advanced Water Well Drilling Services",
      description:
        "Service Provider of a wide range of services which include PVC Tubewell Drilling Service and Deep Hole Drilling Service.",
      altText:
        "Modern commercial building with curved architecture reflected in water at dusk",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/TV/OE/VX/6169003/submersible-pump-installation-service-500x500.png",
      title: "Installation Service",
      description:
        "Providing you the best range of PVC Household Tubewell Installation Services, PVC Submersible Pump Installation Service and PVC Domestic Tubewell Installation Service with effective & timely delivery.",
      altText:
        "Construction worker in hard hat working on structural maintenance",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/NN/TK/SG/6169003/irrigation-survey-service-500x500.png",
      title: "Irrigation Service",
      description:
        "Our range of services include Landscape Irrigation Service and Irrigation Survey Service.",
      altText:
        "Construction worker in hard hat working on structural maintenance",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/343469511/NQ/QY/KE/6169003/rainwater-harvesting-how-does-it-work-500x500.webp",
      title: "Rainwater Harvesting Service",
      description:
        "Pioneers in the industry, we offer Rainwater Harvesting System from India.",
      altText:
        "Construction worker in hard hat working on structural maintenance",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" role="main">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-wide">
            OUR SERVICE
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            As a leading manufacturer and service provider, we specialize in a
            wide range of services including drilling, irrigation, rainwater
            harvesting systems, and PVC tubewell and submersible pump
            installations for both domestic and agricultural use.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              altText={service.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
