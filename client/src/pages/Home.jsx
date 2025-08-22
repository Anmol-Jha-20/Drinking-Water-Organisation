import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import waterefficiencyImage from "../assets/waterefficiency.webp";
import smartwaterconservationimage from "../assets/SmartWaterConservation.webp";
import WaterSustainbilityImage from "../assets/WaterSustainbility.webp";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState(null);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "Rainwater Harvesting",
      subtitle: "",
      description:
        "A Rainwater Harvesting System is an eco-friendly method of collecting, storing, and utilizing rainwater for purposes such as irrigation, household use, and groundwater recharge. It reduces dependence on conventional water sources, cuts utility costs, and supports sustainable water management.",
      image: waterefficiencyImage,
      buttons: ["ABOUT US", "GET A QUOTE"],
    },
    {
      title: "Water Sustainability",
      subtitle: "AND REMODELING",
      description:
        "Water Sustainability refers to the responsible management and use of water resources to ensure availability for current and future generations. It involves conserving freshwater, protecting natural ecosystems, reducing waste, and promoting efficient water use in agriculture, industry, and daily life.",
      image: WaterSustainbilityImage,
      buttons: ["ABOUT US", "GET A QUOTE"],
    },
    {
      title: "Water Efficiency",
      subtitle: "CONTRACTORS",
      description:
        "Smart Water Conservation uses technology and data-driven strategies to manage and reduce water use efficiently. It includes smart irrigation systems, water monitoring sensors, leak detection tools, and automated controls that help optimize water usage in homes, agriculture, and industries. ",
      image: smartwaterconservationimage,
      buttons: ["ABOUT US", "GET A QUOTE"],
    },
  ];

  // Navigation menu data
  const menuItems = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about-us" },
    {
      title: "OUR SERVICES",
      href: "#",
      hasDropdown: true,
      dropdown: [
        { title: "Drilling Services", href: "/drilling-service" },
        { title: "Harvesting Service", href: "/harvesting-service" },
        {
          title: "Advanced Water Well Drilling Services",
          href: "/water-well-drilling-service",
        },
        { title: "Installation Service", href: "/installation-service" },
        { title: "Irrigation Service", href: "/irrigation-service" },
        {
          title: "Rainwater Harvesting Service",
          href: "/rainwater-harvesting-service",
        },
      ],
    },

    { title: "GALLERY", href: "/gallery" },
    { title: "CONTACT", href: "/contact-us" },
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
                <MessageCircle className="w-4 h-4 text-yellow-500" />
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
                <button
                  onClick={() => (window.location.href = "tel:9532888668")}
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold transition-colors ml-4"
                >
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
                  <button
                    onClick={() => (window.location.href = "tel:9532888668")}
                    className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-6 py-3 rounded font-bold transition-colors w-fit mt-4"
                  >
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
                  <p className="text-xl md:text-2xl mb-8 font-medium leading-relaxed opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-20 justify-center">
                    <button
                      onClick={() => navigate("/about-us")}
                      className="bg-blue-900 cursor-pointer hover:bg-blue-800 text-white px-8 py-3 rounded font-bold transition-colors"
                    >
                      {slide.buttons[0]}
                    </button>
                    <button
                      onClick={() => (window.location.href = "tel:9532888668")}
                      className="border-2 cursor-pointer border-gray-400 hover:border-white text-white px-8 py-3 rounded font-bold transition-colors"
                    >
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
