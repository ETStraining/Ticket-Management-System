import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgimage.png";

function Hero() {
  return (
    <div
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "100vh",
      // }}
      className="w-screen flex justify-center bg-black bg-opacity-90 h-screen items-center "
    >
      <div className="max-w-4xl mx-auto flex  flex-col justify-center items-center px-10 sm:px-20 py-20">
        <h1 className="text-5xl text-indigo-700 font-bold mb-6 text-center overflow-hidden">
          Revolutionize Your Support with Our Ticket System
        </h1>
        <p className="text-white text-2xl mb-10 text-center">
          Streamline your support process, boost efficiency, and provide
          exceptional customer service with our cutting-edge Ticket Management
          System.
        </p>
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/new-ticket"
            className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-3 px-6 rounded-lg mr-6 transition-colors duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/learn-more"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;