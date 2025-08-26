// import React, { useState, useEffect, useRef } from "react";
// import { Users, CheckCircle } from "lucide-react";

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animateNumbers, setAnimateNumbers] = useState(false);
//   const [happyClients, setHappyClients] = useState(0);
//   const [projectsDone, setProjectsDone] = useState(0);
//   const aboutRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           setTimeout(() => setAnimateNumbers(true), 500);
//         }
//       },
//       {
//         threshold: 0.3,
//         rootMargin: "-50px",
//       }
//     );

//     if (aboutRef.current) {
//       observer.observe(aboutRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (animateNumbers) {
//       // Animate Happy Clients counter
//       const clientsInterval = setInterval(() => {
//         setHappyClients((prev) => {
//           if (prev >= 100) {
//             clearInterval(clientsInterval);
//             return 100;
//           }
//           return prev + 2;
//         });
//       }, 20);

//       // Animate Projects Done counter
//       const projectsInterval = setInterval(() => {
//         setProjectsDone((prev) => {
//           if (prev >= 150) {
//             clearInterval(projectsInterval);
//             return 150;
//           }
//           return prev + 3;
//         });
//       }, 20);

//       return () => {
//         clearInterval(clientsInterval);
//         clearInterval(projectsInterval);
//       };
//     }
//   }, [animateNumbers]);

//   return (
//     <div id="about" className="min-h-screen bg-gray-50">
//       {/* Hero Section for spacing */}
//       {/* <div className="h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
//         <div className="text-center text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             NIHAAN ROOFING SOLUTIONS
//           </h1>
//           <p className="text-lg md:text-xl opacity-90">
//             Premium Quality Roofing Services
//           </p>
//           <div className="mt-8">
//             <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
//               Scroll Down to Learn More
//             </button>
//           </div>
//         </div>
//       </div> */}

//       {/* About Us Section */}
//       <section
//         ref={aboutRef}
//         className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//             {/* Left side - Image */}
//             <div
//               className={`transition-all duration-1000 delay-200 ${
//                 isVisible
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 -translate-x-10"
//               }`}
//             >
//               <div className="relative overflow-hidden rounded-lg shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1526599256864-6bedb9d7dfb5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Modern skyscrapers representing quality construction"
//                   className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div
//               className={`space-y-8 transition-all duration-1000 delay-400 ${
//                 isVisible
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 translate-x-10"
//               }`}
//             >
//               {/* About Us Header */}
//               <div className="space-y-4">
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
//                   About Us
//                   <div className="w-16 h-1 bg-blue-600 mt-2"></div>
//                 </h2>
//               </div>

//               {/* Description */}
//               <div className="space-y-4">
//                 <p className="text-gray-600 text-base md:text-lg leading-relaxed">
//                   Established in 1995, Drinking Water Organisation (DWO) is a
//                   trusted name in the field of water management, serving as a
//                   leading manufacturer and service provider of Drilling
//                   Services, Irrigation Systems, and Rainwater Harvesting
//                   Solutions. With over two decades of experience, DWO combines
//                   technical expertise with innovative approaches to deliver
//                   reliable and sustainable water solutions. Our Drilling
//                   Services are known for precision and efficiency, catering to
//                   both residential and industrial needs. We also design and
//                   install customized irrigation systems that enhance
//                   agricultural productivity through smart water usage.
//                 </p>
//               </div>

//               {/* Statistics */}
//               {/* <div className="grid grid-cols-2 gap-6 md:gap-8">

//                 <div
//                   className={`flex items-center space-x-4 transition-all duration-1000 delay-600 ${
//                     isVisible
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
//                       <Users className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
//                       {happyClients}
//                     </div>
//                     <div className="text-sm md:text-base text-gray-600 font-medium">
//                       Happy Clients
//                     </div>
//                   </div>
//                 </div>

//                 <div
//                   className={`flex items-center space-x-4 transition-all duration-1000 delay-800 ${
//                     isVisible
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-5"
//                   }`}
//                 >
//                   <div className="flex-shrink-0">
//                     <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
//                       <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500">
//                       {projectsDone}
//                     </div>
//                     <div className="text-sm md:text-base text-gray-600 font-medium">
//                       Projects Done
//                     </div>
//                   </div>
//                 </div>
//               </div> */}

//               {/* Explore More Button */}
//               <div
//                 className={`pt-4 transition-all duration-1000 delay-1000 ${
//                   isVisible
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-5"
//                 }`}
//               >
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-8 py-3 md:px-10 md:py-4 rounded-md font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                   Explore More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional sections for demonstration */}
//       {/* <div className="h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-center">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Next Section
//           </h3>
//           <p className="text-gray-600">
//             Continue scrolling to see more content
//           </p>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default AboutSection;

import React from "react";
import { Clock, Send, Award, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                ABOUT US
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Pioneering Water Solutions Since 1995
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Established in 1995, <b>Drinking Water Organisation</b> has been
                a trusted name in delivering innovative and reliable water
                solutions across India. As a leading service provider, we
                specialize in a wide range of services including drilling,
                irrigation, rainwater harvesting systems, and PVC tubewell and
                submersible pump installations for both domestic and
                agricultural use.
              </p>
              <p>
                With decades of expertise and a strong commitment to quality, we
                empower communities and industries with sustainable water
                access—ensuring every drop counts.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate("/about-us")}
                className="inline-flex cursor-pointer items-center px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded-sm hover:bg-yellow-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 10 Year Experience */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                30 Years Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedication to quality, innovation, and customer satisfaction
                has made us a trusted name in water solutions for over three
                decades.
              </p>
            </div>

            {/* Construction Specialists */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Water Resource Management Specialists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                offering expert solutions in drilling, irrigation, rainwater
                harvesting, and system installations to ensure efficient and
                sustainable water use.
              </p>
            </div>

            {/* Best Materials */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reliable Water Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We specialize in drilling, irrigation, and rainwater harvesting
                systems—delivering expert services backed by years of experience
                and trusted workmanship.
              </p>
            </div>

            {/* Low cost */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cost-Effective Services
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer affordable and efficient solutions for water well
                drilling, system installation, and groundwater
                harvesting—ensuring quality without compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
