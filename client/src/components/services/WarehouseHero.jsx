// import React from "react";
// import {
//   Menu,
//   X,
//   Droplets,
//   Users,
//   Award,
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Wrench,
//   Shield,
//   Clock,
// } from "lucide-react";

// function Service() {
//   const services = [
//     {
//       title: "Drilling Service",
//       description:
//         "Professional water well drilling with advanced equipment and techniques for reliable water access.",
//       icon: <Wrench className="w-8 h-8" />,
//     },
//     {
//       title: "Irrigation Service",
//       description:
//         "Complete irrigation solutions for agricultural and commercial applications with efficient water distribution.",
//       icon: <Droplets className="w-8 h-8" />,
//     },
//     {
//       title: "Rain Water Harvesting System",
//       description:
//         "Sustainable rainwater collection and storage systems to conserve water and reduce dependency.",
//       icon: <Shield className="w-8 h-8" />,
//     },
//     {
//       title: "Dewatering Pump",
//       description:
//         "High-quality dewatering pumps for construction sites and water management applications.",
//       icon: <Clock className="w-8 h-8" />,
//     },
//     {
//       title: "Rainwater Harvesting Service",
//       description:
//         "Professional installation and maintenance of rainwater harvesting systems.",
//       icon: <Droplets className="w-8 h-8" />,
//     },
//   ];
//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16 animate-in fade-in duration-1000">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive water solutions tailored to meet your specific needs
//             with professional expertise and quality assurance.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-in fade-in duration-1000"
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="text-blue-600 mb-6">{service.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Service;

import React from "react";
import DrillingImage from "../../assets/Drilling.jpeg";

const WarehouseHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={DrillingImage}
          alt="Modern warehouse interior with industrial shelving and lighting"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-white font-bold text-3xl leading-tight mb-8 tracking-wide">
          WE ARE DEDICATED TO PROVIDE THE BEST SERVICES AT THE LOWEST POSSIBLE
          COST
        </h1>

        {/* Call to Action Button */}
        <div className="mt-8 sm:mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wider">
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WarehouseHero;
