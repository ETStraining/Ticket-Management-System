import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import ContactFormModal from "./ContactFormModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className={`bg-gray-900 text-gray-400 pt-10 pb-2 px-8 md:px-20 relative transition-opacity duration-300 ${isModalOpen ? "opacity-50" : "opacity-100"}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li>Background</li>
              <li>Mission</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Media</h3>
            <ul>
              <li>Event</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li>Transportation</li>
              <li>Vehicle Valuation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>Address: KN 1 ST Nyarugenge</li>
              <li>Email: info@tsmo.rw</li>
              <li>Tel: (+250) 786 946 188</li>
              <li>P.Box: Kigali / Rwanda</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col">
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-1.5 border rounded-md text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <button className="bg-purple-600 text-white px-4 ml-4 py-2 rounded-md text-[13px] hover:bg-purple-700">
            Subscribe
          </button>
        </div>
        <hr className="my-8 border-gray-300 w-full" />
        <div className="text-gray-400 text-sm">
          <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="flex space-x-4 mt-2">
              <Link to="" className="hover:text-purple-900">
                Privacy Policy
              </Link>
              <Link to="" className="hover:text-purple-900">
                Terms of Service
              </Link>
              <Link to="" onClick={openModal} className="hover:text-purple-900">
                Contact Us
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} XCodes. All rights reserved.</p>
            <div className="flex space-x-4 text-xl">
              <Link to="" className="hover:text-blue-700">
                <FaFacebookF />
              </Link>
              <Link to="" className="hover:text-blue-500">
                <FaTwitter />
              </Link>
              <Link to="" className="hover:text-red-500">
                <FaMapMarkerAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={openModal}
        className="absolute right-8 bottom-16 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer flex items-center space-x-2"
      >
        <FaEnvelope className="text-lg" />
        <span className="hidden sm:block">Message Us</span>
      </div>

      <ContactFormModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </footer>
  );
};

export default Footer;
