import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex sm:flex-row flex-col">
      <div className=" w-full h-full flex flex-col justify-center items-center px-10 sm:items-start sm:px-20">
        <h1 className="text-5xl text-white text-center font-bold mb-4 sm:text-left font-inter">
          Streamline Your Support with Our Ticket System
        </h1>
        <p className="text-white text-lg mb-8 sm:text-left">
          Get quick and efficient support for your issues. Submit a ticket and our dedicated team will assist you promptly.
        </p>
        <div className="flex justify-center sm:justify-start md: mt-10 items-center">
          <Link
            to="/"
            className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Book Your Ticket Now
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-200 font-medium"
          >
            View FAQs
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Get Prompt Assistance</h1>
          <p className="mb-6">
            Our support team is dedicated to resolving your issues quickly and efficiently.
          </p>
          <div className="flex justify-end">
            <Link
              to="/submit-ticket"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;