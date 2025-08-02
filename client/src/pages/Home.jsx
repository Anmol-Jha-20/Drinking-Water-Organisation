// import React, { useState, useEffect } from "react";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   X,
//   Phone,
//   Mail,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Linkedin,
// } from "lucide-react";

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const slides = [
//     {
//       title: "Rainwater Harvesting System",
//       subtitle: "for Commercial and Institutional Buildings",
//       image:
//         "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop",
//     },
//     {
//       title: "Sustainable Water Management",
//       subtitle: "for Residential and Industrial Areas",
//       image:
//         "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&h=800&fit=crop",
//     },
//     {
//       title: "Smart Water Conservation",
//       subtitle: "for Urban and Rural Development",
//       image:
//         "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
//     },
//   ];

//   const navigationItems = [
//     "Home",
//     "About",
//     "Services",
//     "Gallery",
//     "Contact Us",
//   ];

//   const socialIcons = [
//     { icon: Facebook, label: "Facebook" },
//     { icon: Twitter, label: "Twitter" },
//     { icon: Instagram, label: "Instagram" },
//     { icon: Youtube, label: "Youtube" },
//     { icon: Linkedin, label: "LinkedIn" },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-white shadow-sm relative z-50">
//         <div className="container mx-auto px-4">
//           {/* Top Bar */}
//           <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
//             <div className="flex items-center space-x-4">
//               <span>Share:</span>
//               <div className="flex space-x-2">
//                 {socialIcons.map((social, index) => (
//                   <social.icon
//                     key={index}
//                     className="w-4 h-4 hover:text-blue-600 cursor-pointer"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-4">
//               <span>Associates / Technical Helpline: +91 8888 895 6700</span>
//             </div>
//           </div>

//           {/* Main Navigation */}
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <div className="text-3xl font-bold text-blue-600 mr-8">
//                 Drinking Water Organisation
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex space-x-8">
//               {navigationItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </nav>

//             <div className="flex items-center space-x-4">
//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden p-2"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40">
//             <nav className="flex flex-col p-4 space-y-4">
//               {navigationItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//               {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 mt-4">
//                 LOGIN
//               </button> */}
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Hero Section with Slider */}
//       <section className="relative h-screen overflow-hidden">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
//               index === currentSlide
//                 ? "transform translate-x-0"
//                 : index < currentSlide
//                 ? "transform -translate-x-full"
//                 : "transform translate-x-full"
//             }`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           >
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center text-white px-4 max-w-4xl mx-auto">
//                 <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
//                   {slide.title}
//                 </h1>
//                 <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light animate-fade-in-up animation-delay-200">
//                   {slide.subtitle}
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
//                   <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
//                     About Us
//                   </button>
//                   <button className="bg-transparent border-2 cursor-pointer border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
//                     SEND A INQUIRY
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-full transition-all duration-200 z-10"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-black p-3 rounded-full transition-all duration-200 z-10"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Slide Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-200 ${
//                 index === currentSlide
//                   ? "bg-white scale-125"
//                   : "bg-white bg-opacity-50 hover:bg-opacity-75"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Wave Bottom */}
//         <div className="absolute bottom-0 left-0 w-full">
//           <svg
//             viewBox="0 0 1200 120"
//             preserveAspectRatio="none"
//             className="w-full h-12 md:h-20"
//           >
//             <path
//               d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
//               fill="white"
//             />
//           </svg>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//               Why Choose Our Rainwater Harvesting System?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               We provide comprehensive rainwater harvesting solutions for
//               commercial, institutional, and residential buildings with
//               cutting-edge technology and sustainable practices.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <div className="w-8 h-8 bg-blue-600 rounded"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                 Eco-Friendly Solutions
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Our systems are designed to be environmentally sustainable and
//                 help reduce water wastage while preserving natural resources.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <div className="w-8 h-8 bg-green-600 rounded"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                 Cost Effective
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Reduce your water bills significantly with our efficient
//                 rainwater collection and storage systems that pay for themselves
//                 over time.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <div className="w-8 h-8 bg-purple-600 rounded"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                 Expert Installation
//               </h3>
//               <p className="text-gray-600 text-center">
//                 Our certified professionals ensure proper installation and
//                 maintenance of your rainwater harvesting system for optimal
//                 performance.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-16">
//         <div className="max-w-4xl mx-auto text-center px-4">
//           <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
//             Ready to Take Control of Your Water Needs?
//           </h2>
//           <p className="text-blue-100 text-lg mb-8">
//             Experience reliable, efficient, and sustainable water solutions with
//             Drinking Water Organisation. From drilling to rainwater harvesting,
//             we provide end-to-end services tailored to your specific
//             requirements. Let’s build a water-secure future—starting today.
//           </p>
//           <button
//             onClick={() => navigate("/contact-us")}
//             className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//           >
//             Get Started Today
//           </button>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fade-in-up {
//           animation: fade-in-up 0.8s ease-out forwards;
//         }

//         .animation-delay-200 {
//           animation-delay: 0.2s;
//           opacity: 0;
//         }

//         .animation-delay-400 {
//           animation-delay: 0.4s;
//           opacity: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ChevronDown,
} from "lucide-react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);

  const heroSlides = [
    {
      title: "Rainwater Harvesting",
      subtitle: "",
      description:
        "A Rainwater Harvesting System is an eco-friendly method of collecting, storing, and utilizing rainwater for purposes such as irrigation, household use, and groundwater recharge. It reduces dependence on conventional water sources, cuts utility costs, and supports sustainable water management.",
      image:
        "https://img.freepik.com/free-photo/view-realistic-hands-touching-clear-flowing-water_23-2151210243.jpg?t=st=1754113446~exp=1754117046~hmac=85a1d2ebb61607c7fb2abb8c754b1d9e3cfa4181db2485155d875b9325817db8&w=1060",
      buttons: ["OUR SERVICES", "GET A QUOTE"],
    },
    {
      title: "Water Sustainability",
      subtitle: "AND REMODELING",
      description:
        "Water Sustainability refers to the responsible management and use of water resources to ensure availability for current and future generations. It involves conserving freshwater, protecting natural ecosystems, reducing waste, and promoting efficient water use in agriculture, industry, and daily life.",
      image:
        "https://img.freepik.com/free-photo/branch-with-water-drops_181624-4631.jpg?t=st=1754116436~exp=1754120036~hmac=c28a406f459aab3b2aa68c310432d83df2d1d4bf7533e81c8399f30e7f7988eb&w=1060",
      buttons: ["OUR SERVICES", "GET A QUOTE"],
    },
    {
      title: "Water Efficiency",
      subtitle: "CONTRACTORS",
      description:
        "Smart Water Conservation uses technology and data-driven strategies to manage and reduce water use efficiently. It includes smart irrigation systems, water monitoring sensors, leak detection tools, and automated controls that help optimize water usage in homes, agriculture, and industries. ",
      image:
        "https://img.freepik.com/free-photo/realistic-water-drop-with-ecosystem_23-2151196384.jpg?t=st=1754116588~exp=1754120188~hmac=5f286ec2c7c815dae87a72b924d1a63ed254318a93a6fc800273b5ed91f82798&w=1060",
      buttons: ["OUR SERVICES", "GET A QUOTE"],
    },
  ];

  // Navigation menu data
  const menuItems = [
    { title: "HOME", href: "#", active: true },
    // {
    //   title: "PAGES",
    //   href: "#",
    //   hasDropdown: true,
    //   hot: true,
    //   dropdown: [
    //     { title: "About Pages", href: "#", active: true },
    //     {
    //       title: "Service Pages",
    //       href: "#",
    //       hasSubDropdown: true,
    //       subDropdown: [
    //         { title: "Services", href: "#" },
    //         { title: "Services - Alter", href: "#" },
    //         { title: "Service Single", href: "#" },
    //         { title: "Service Single - Alter", href: "#" },
    //       ],
    //     },
    //     { title: "Project Pages", href: "#" },
    //     { title: "Product Pages", href: "#" },
    //     { title: "Gallery Pages", href: "#" },
    //     { title: "FAQ Pages", href: "#" },
    //     { title: "Typography", href: "#" },
    //     { title: "Sitemap", href: "#" },
    //     { title: "Error 404", href: "#" },
    //   ],
    // },
    { title: "ABOUT US", href: "#" },
    {
      title: "OUR SERVICES",
      href: "#",
      hasDropdown: true,
      dropdown: [
        { title: "Drilling Services", href: "#" },
        { title: "Harvesting Service", href: "#" },
        { title: "Advanced Water Well Drilling Services", href: "#" },
        { title: "Installation Service", href: "#" },
        { title: "Irrigation Service", href: "#" },
        { title: "Rainwater Harvesting Service", href: "#" },
      ],
    },
    // { title: "EXPERIENCE", href: "#" },
    // { title: "PROJECTS", href: "#" },
    { title: "BLOG", href: "#" },
    // { title: "TESTIMONIAL", href: "#" },
    { title: "CONTACT", href: "#" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const handleMobileDropdownToggle = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
    setActiveMobileSubDropdown(null); // Close any open sub-dropdown
  };

  const handleMobileSubDropdownToggle = (index) => {
    setActiveMobileSubDropdown(
      activeMobileSubDropdown === index ? null : index
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm">
        {/* Top Contact Bar */}
        <div className="bg-gray-50 hidden md:block lg:block xl:block py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-500" />
              <span>509 , Laxmanpuri Extension Indira nagar,</span>
              <span className="text-gray-500">Lucknow 226016.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-500">Call</span>
                <span className="font-medium">(+91) 95328 88668</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-500">WhatsApp</span>
                <span className="font-medium">(+91) 93352 49074</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="bg-yellow-500 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mr-2">
                  DWO
                </div>
                <span className="text-xl font-bold">
                  Drinking Water Organisation
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() =>
                      item.hasDropdown && setActiveDropdown(index)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`px-4 py-3 hover:bg-opacity-10 transition-all duration-300 font-medium flex items-center relative ${
                        item.active
                          ? "text-yellow-500"
                          : "hover:text-yellow-400"
                      }`}
                    >
                      {item.title}
                      {item.hot && (
                        <span className="bg-red-500 text-xs px-2 py-1 rounded ml-2 text-white">
                          HOT
                        </span>
                      )}
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      )}
                    </a>

                    {/* Desktop Dropdown */}
                    {item.hasDropdown && activeDropdown === index && (
                      <div className="absolute top-full left-0 bg-blue-900 text-white min-w-64 shadow-xl border-t-4 border-yellow-500 z-50 opacity-100 transform translate-y-0 transition-all duration-300">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <div key={dropIndex} className="relative group/sub">
                            <a
                              href={dropItem.href}
                              className={`block px-5 py-4 hover:bg-gray-50 hover:text-blue-900 hover:pl-6 transition-all duration-300 border-b border-gray-100 ${
                                dropItem.active ? "text-white" : ""
                              }`}
                            >
                              {dropItem.title}
                              {dropItem.hasSubDropdown && (
                                <ChevronRight className="w-4 h-4 float-right mt-0.5" />
                              )}
                            </a>

                            {/* Desktop Sub-dropdown */}
                            {dropItem.hasSubDropdown && (
                              <div className="absolute top-0 left-full bg-blue-900 text-white min-w-52 shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transform translate-x-2 group-hover/sub:translate-x-0 transition-all duration-300 z-50">
                                {dropItem.subDropdown.map(
                                  (subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.href}
                                      className="block px-5 py-3 hover:bg-white hover:text-blue-900 hover:bg-opacity-10 hover:pl-6 transition-all duration-300 border-b border-white border-opacity-10 text-sm"
                                    >
                                      {subItem.title}
                                    </a>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold transition-colors ml-4">
                  GET A QUOTE
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-blue-800">
                <div className="flex flex-col">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          className={`block py-3 transition-colors font-medium flex-1 ${
                            item.active
                              ? "text-yellow-500"
                              : "hover:text-yellow-400"
                          }`}
                          onClick={(e) => {
                            if (item.hasDropdown) {
                              e.preventDefault();
                              handleMobileDropdownToggle(index);
                            }
                          }}
                        >
                          {item.title}
                          {item.hot && (
                            <span className="bg-red-500 text-xs px-2 py-1 rounded ml-2 text-white">
                              HOT
                            </span>
                          )}
                        </a>
                        {item.hasDropdown && (
                          <button
                            onClick={() => handleMobileDropdownToggle(index)}
                            className="p-2"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                activeMobileDropdown === index
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeMobileDropdown === index && (
                        <div className="bg-blue-800 ml-4">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <div key={dropIndex}>
                              <div className="flex items-center justify-between">
                                <a
                                  href={dropItem.href}
                                  className={`block py-3 pl-4 text-sm border-b border-blue-700 border-opacity-50 transition-colors flex-1 ${
                                    dropItem.active
                                      ? "text-yellow-500"
                                      : "text-white hover:text-yellow-400"
                                  }`}
                                  onClick={(e) => {
                                    if (dropItem.hasSubDropdown) {
                                      e.preventDefault();
                                      handleMobileSubDropdownToggle(dropIndex);
                                    }
                                  }}
                                >
                                  {dropItem.title}
                                </a>
                                {dropItem.hasSubDropdown && (
                                  <button
                                    onClick={() =>
                                      handleMobileSubDropdownToggle(dropIndex)
                                    }
                                    className="p-2"
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        activeMobileSubDropdown === dropIndex
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>
                                )}
                              </div>

                              {/* Mobile Sub-dropdown */}
                              {dropItem.hasSubDropdown &&
                                activeMobileSubDropdown === dropIndex && (
                                  <div className="bg-blue-700 ml-4">
                                    {dropItem.subDropdown.map(
                                      (subItem, subIndex) => (
                                        <a
                                          key={subIndex}
                                          href={subItem.href}
                                          className="block py-2 pl-6 text-sm text-white hover:text-yellow-400 transition-colors border-b border-blue-600 border-opacity-50"
                                        >
                                          {subItem.title}
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold transition-colors w-fit mt-4">
                    GET A QUOTE
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0"></div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center text-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl mx-auto text-white">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-yellow-500">
                    {slide.title}
                    <br />
                    {/* <span className="text-yellow-500">{slide.subtitle}</span> */}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-20 justify-center">
                    <button className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white px-8 py-3 rounded font-bold transition-colors">
                      {slide.buttons[0]}
                    </button>
                    <button className="border-2 cursor-pointer border-gray-400 hover:border-white text-white px-8 py-3 rounded font-bold transition-colors">
                      {slide.buttons[1]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-20"
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-500 transition-colors z-20"
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-yellow-500"
                  : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* SEO Meta Tags (would be in document head in real application) */}
      <div className="sr-only">
        <h1>NConstruct - Professional Construction Services</h1>
        <p>
          Leading construction company providing professional consultation, home
          improvements, remodeling, and affordable contracting services in
          California, TX.
        </p>
      </div>
    </div>
  );
};

export default Home;
