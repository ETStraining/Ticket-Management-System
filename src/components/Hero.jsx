import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgimage.png";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-screen bg-gradient-to-r  flex sm:flex-row flex-col pt-10 sm:pt-0 "
    >
      <div className=" w-full h-full flex flex-col justify-center items-center px-10 sm:items-start sm:px-20">
        <h1 className="text-2xl text-white text-center font-bold mb-4 sm:text-left font-inter overflow-hidden">
          Streamline Your Support with Our Ticket System
        </h1>
        <p className="text-white text-lg mb-8 sm:text-left">
          Get quick and efficient support for your issues. Submit a ticket and
          our dedicated team will assist you promptly.
        </p>
        <div className="flex justify-center sm:justify-start md: mt-10 items-center">
          <Link
            to="/new-ticket"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Book Your Ticket Now
          </Link>
          <Link to="/" className="text-white hover:text-gray-200 font-medium">
            View FAQs
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-center overflow-y-hidden">
        <div className="max-w-md p-6 bg-white rounded-lg shadow-md ">
          <h1 className="text-3xl font-bold mb-4">Get Prompt Assistance</h1>
          <p className="mb-6">
            Our support team is dedicated to resolving your issues quickly and
            efficiently.
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
