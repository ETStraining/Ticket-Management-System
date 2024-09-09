import React from "react";
import { Link } from "react-router-dom";
import bgImage from '../assets/image.png'

function LearnMore() {
  return (
    <div className="flex w-screen ">
      <div style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
      }} className="flex items-center w-full"
      >
      </div>
      <div className="pt-[15vh] pb-10 w-full flex flex-col justify-center items-center px-10 sm:px-20">
        <h1 className="text-xl text-indigo-700 font-bold mb-6 text-center overflow-hidden">
          Discover the Benefits of Our Ticket Management System
        </h1>
        <p className=" text-lg mb-10 text-center">
          Our Ticket Management System is designed to enhance your support
          experience. Here’s how we can help:
        </p>
        <div className=" text-sm mb-8">
          <ul className="list-disc list-inside">
            <li className="mb-4">
              <strong>Streamlined Ticket Submission:</strong> Easily submit
              tickets through our user-friendly interface, ensuring that your
              issues are logged quickly and efficiently.
            </li>
            <li className="mb-4">
              <strong>Real-Time Tracking:</strong> Monitor the status of your
              tickets in real-time, so you always know where your request stands.
            </li>
            <li className="mb-4">
              <strong>Dedicated Support Team:</strong> Our team is committed to
              providing prompt assistance, ensuring that your concerns are
              addressed swiftly.
            </li>
            <li className="mb-4">
              <strong>Comprehensive Reporting:</strong> Access detailed reports
              and analytics to understand ticket trends and improve your support
              processes.
            </li>
            <li className="mb-4">
              <strong>Customizable Features:</strong> Tailor the system to meet
              your specific needs, making it a perfect fit for your organization.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/new-ticket"
            className="bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-3 px-6 rounded-lg mr-6 transition-colors duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;