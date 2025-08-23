import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-yellow-400 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-gray-800 text-lg sm:text-xl font-medium mb-2 sm:mb-0">
            Need expert support for water access, harvesting, or irrigation?
            We're here to help.
          </h2>
          <button
            onClick={() => (window.location.href = "tel:9532888668")}
            className="bg-blue-900 text-white px-6 py-2 cursor-pointer rounded font-medium hover:bg-blue-800 transition-colors"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 className="text-yellow-400 text-lg font-semibold mb-4 uppercase tracking-wide">
                About DWO
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                <strong className="text-white">
                  Drinking Water Organisation(DWO)
                </strong>{" "}
                is Manufacturer & Service Provider of Drilling Service,
                Irrigation Service, Rain Water Harvesting System, PVC Household
                Tubewell Installation Services, PVC Submersible Pump
                Installation Service and PVC Domestic Tubewell Installation
                Service, etc
              </p>
              <a
                href="/about-us"
                className="text-yellow-400 hover:text-yellow-300 text-sm underline"
              >
                Read More
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-yellow-400 text-lg font-semibold mb-4 uppercase tracking-wide">
                Quick Links
              </h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="fixed bottom-6 left-0 z-50">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919335249074?text=Hey!%20I%20am%20interested%20in%20your%20services.",
                    "_blank"
                  )
                }
                className="bg-green-600 hover:bg-green-700 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
                aria-label="Need Help?"
              >
                <FaWhatsapp size={24} />
              </button>
            </div>
            <div className="fixed bottom-6 right-0 z-50">
              <button
                onClick={() => (window.location.href = "tel:9532888668")}
                className="bg-[#1C398E] cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
                aria-label="Need Help?"
              >
                <MdCall size={24} />
              </button>
            </div>

            <div className="fixed bottom-28 right-0 z-50">
              <button
                onClick={() =>
                  (window.location.href = "mailto:dwoairtel@gmail.com")
                }
                className="bg-[#1C398E] cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce"
                aria-label="Email Us"
              >
                <MdEmail size={24} />
              </button>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-yellow-400 text-lg font-semibold mb-4 uppercase tracking-wide">
                Our Services
              </h3>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Drilling Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Harvesting Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Advanced Water Well Drilling Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Installation Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Irrigation Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Rainwater Harvesting Service
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-yellow-400 text-lg font-semibold mb-4 uppercase tracking-wide">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">
                      509 , Laxmanpuri Extension Indira nagar, Lucknow 226016.
                    </p>
                    {/* <p className="text-sm">At vero eos, D58 8975, London.</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Call : (+91) 95328 88668</p>
                    <p className="text-sm">WhatsApp : (+91) 93352 49074</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm">Email : dwoairtel@gmail.com</p>
                    {/* <p className="text-sm flex items-center">
                      Web : www.sitename.com
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-2 sm:mb-0">
            Copyright © 2025 Drinking Water Organisation. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-red-500 hover:text-red-400 transition-colors"
              aria-label="Google Plus"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.635 10.909v2.619h4.187c-.18 1.494-.772 2.772-1.633 3.619-.866.826-1.958 1.252-3.554 1.252-2.804 0-5.202-2.267-5.202-5.074s2.398-5.074 5.202-5.074c1.404 0 2.584.536 3.466 1.414l2.003-2.004C10.312 5.87 8.64 5.25 6.635 5.25 2.97 5.25 0 8.256 0 12s2.97 6.75 6.635 6.75c1.934 0 3.467-.627 4.632-1.792 1.2-1.2 1.573-2.898 1.573-4.27 0-.427-.036-.835-.1-1.25H7.635v.03z" />
                <path d="M24 10.364V8.909h-2.182V6.727h-1.455v2.182h-2.182v1.455h2.182v2.182h1.455v-2.182H24z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
