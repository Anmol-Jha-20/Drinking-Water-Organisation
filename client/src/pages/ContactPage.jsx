import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "../components/Header/Header.jsx";
import { motion } from "framer-motion";
import DrillingImage from "../assets/Drilling.jpeg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, and Message)");
      return;
    }

    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            CONTACT US
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
            <span className="text-yellow-400">Contact Us</span>
          </motion.nav>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                CONTACT US
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions or need expert assistance? Get in touch with us
                for reliable Drilling Services, Irrigation Solutions, and
                Rainwater Harvesting Systems. With decades of experience, we're
                here to provide trusted support and tailored water solutions.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    509, Laxmanpuri Extension
                  </p>
                  <p className="text-gray-600">Indira Nagar, Lucknow 226016</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Call: (+91) 95328 88668
                  </p>
                  <p className="text-gray-600">WhatsApp: (+91) 93352 49074</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Email: dwoairtel@gmail.com
                  </p>
                  {/* <p className="text-gray-600">Web: www.sitename.com</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    Mon - Sat: 8AM - 7PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.116806092269!2d80.98061957421942!3d26.86802976201159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd00158da84b%3A0x4ac24e68fee4a940!2sLaxmanpuri!5e0!3m2!1sen!2sin!4v1755767068553!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800">
                      Drinking Water Organisation
                    </h4>
                    <p className="text-sm text-gray-600">
                      509 , Laxmanpuri Extension Indira nagar
                      <br />
                      Lucknow, Uttar Pradesh – 226016, India
                    </p>
                  </div>
                  <a
                    href="https://www.google.co.in/maps/dir//26.86749,80.98384/@26.8674661,80.9014385,12z?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-600 text-sm font-medium"
                  >
                    Directions
                  </a>
                </div>
                <a
                  href="https://www.google.com/maps/place/Laxmanpuri/@26.8680298,80.9806196,17z/data=!4m10!1m2!2m1!1s509,+laxmanpuri+extension!3m6!1s0x399bfd00158da84b:0x4ac24e68fee4a940!8m2!3d26.868025!4d80.9831945!15sChk1MDksIGxheG1hbnB1cmkgZXh0ZW5zaW9ukgEUZmFzdF9mb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11vqmc1fr0?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-600 text-sm font-medium mt-2 inline-block"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                DROP US A MESSAGE
              </h2>
              <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Established in 1995, we are a trusted Manufacturer and Service
                Provider offering a wide range of water management solutions,
                including Drilling Services, Irrigation Systems, and Rainwater
                Harvesting Solutions. With decades of experience and a
                commitment to quality, we’re here to support your needs with
                reliable and efficient services. Drop us a message — our team
                will be happy to assist you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="service"
                    placeholder="Interest of Service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Messages *"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors bg-gray-50"
                ></textarea>
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 uppercase tracking-wide"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
