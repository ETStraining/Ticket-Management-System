// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Subscription Section */}
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-1.5 border rounded-md text-[13px] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
          <button className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-[13px] hover:bg-purple-700">
            Subscribe
          </button>
        </div>

        {/* Copyright and Links Section */}
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600">Terms of Service</a>
            <a href="#" className="hover:text-purple-600">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;