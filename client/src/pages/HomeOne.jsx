import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Droplets,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Wrench,
  Shield,
  Clock,
} from "lucide-react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Drilling Service",
      description:
        "Professional water well drilling with advanced equipment and techniques for reliable water access.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Irrigation Service",
      description:
        "Complete irrigation solutions for agricultural and commercial applications with efficient water distribution.",
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: "Rain Water Harvesting System",
      description:
        "Sustainable rainwater collection and storage systems to conserve water and reduce dependency.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Dewatering Pump",
      description:
        "High-quality dewatering pumps for construction sites and water management applications.",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: "Rainwater Harvesting Service",
      description:
        "Professional installation and maintenance of rainwater harvesting systems.",
      icon: <Droplets className="w-8 h-8" />,
    },
  ];

  const stats = [
    { number: "29+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const features = [
    "Expert drilling services since 1995",
    "Advanced irrigation solutions",
    "Eco-friendly water harvesting",
    "Professional maintenance support",
    "Quality assured equipment",
    "Competitive pricing",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Information would be handled by parent component */}

      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Drinking Water Organisation
                </h1>
                <p className="text-sm text-gray-600">Est. 1995</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-in slide-in-from-top">
            <nav className="px-4 py-4 space-y-2">
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Professional
                <span className="text-blue-600 block">Water Solutions</span>
                Since 1995
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leading provider of drilling services, irrigation solutions, and
                rainwater harvesting systems. Trusted by clients for nearly
                three decades of excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all">
                  Learn More
                </button>
              </div>
            </div>

            <div className="animate-in slide-in-from-right duration-1000 delay-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                {/* <div className="bg-blue-600 rounded-2xl p-8 text-white transform rotate-3 hover:rotate-0 transition-transform duration-500"> */}
                {/* <div className="bg-white/20 rounded-xl p-6 mb-6">
                    <Droplets className="w-16 h-16 text-white mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    29+ Years of Excellence
                  </h3>
                  <p className="text-blue-100">
                    Providing reliable water solutions with cutting-edge
                    technology and unmatched expertise.
                  </p> */}
                {/* </div> */}
                {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">
                      Trusted by 500+ Clients
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center text-white animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water solutions tailored to meet your specific needs
              with professional expertise and quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-blue-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in slide-in-from-left duration-1000">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Established in 1995, M/S Drinking Water Organisation has been at
                the forefront of providing innovative water solutions. As a
                trusted manufacturer and service provider, we specialize in
                drilling services, irrigation systems, and rainwater harvesting
                solutions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Learn More About Us
              </button>
            </div>

            <div className="animate-in slide-in-from-right duration-1000 delay-300">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <div className="text-2xl font-bold">29+</div>
                    <div className="text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center col-span-2">
                    <Droplets className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                    <div className="text-lg font-semibold">
                      Quality Water Solutions
                    </div>
                    <div className="text-blue-200">Professional & Reliable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your water solution project? Contact us today for a
              consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">Available 24/7 for emergencies</p>
              <p className="text-white font-semibold mt-2">+91 XXX XXX XXXX</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">Get a quote within 24 hours</p>
              <p className="text-white font-semibold mt-2">
                info@drinkingwater.com
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100">Our office location</p>
              <p className="text-white font-semibold mt-2">Your City, State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    M/S Drinking Water Organisation
                  </h3>
                  <p className="text-gray-400 text-sm">Est. 1995</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading provider of water solutions including drilling services,
                irrigation systems, and rainwater harvesting. Serving clients
                with excellence for over 29 years.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Drilling Service</li>
                <li>Irrigation Service</li>
                <li>Rain Water Harvesting</li>
                <li>Dewatering Pump</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: +91 XXX XXX XXXX</li>
                <li>Email: info@drinkingwater.com</li>
                <li>Location: Your City, State</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Drinking Water Organisation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
