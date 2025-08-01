import React from "react";
import { Droplets } from "lucide-react";

function Footer() {
  return (
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
                  Drinking Water Organisation
                </h3>
                <p className="text-gray-400 text-sm">Est. 1995</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of water solutions including drilling services,
              irrigation systems, and rainwater harvesting. Serving clients with
              excellence for over 29 years.
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
              <li>Phone: +91 933 524 9074</li>
              <li>Email: info@drinkingwater.com</li>
              <li>
                Location: 509 , Laxmanpuri Extension Indira nagar, Lucknow,
                226016
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Drinking Water Organisation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
