import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaCreditCard, FaPaypal, FaMobileAlt } from 'react-icons/fa';

const ContactDetail = ({ onSubmit }) => {
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    paymentMethod: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contactInfo);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Enter Contact Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            <FaUser className="inline mr-2" />
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={contactInfo.fullName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
            <FaPhone className="inline mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={contactInfo.phoneNumber}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <FaEnvelope className="inline mr-2" />
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={contactInfo.paymentMethod === 'creditCard'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <FaCreditCard className="mr-2" />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={contactInfo.paymentMethod === 'paypal'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <FaPaypal className="mr-2" />
              PayPal
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="mobileMoney"
                checked={contactInfo.paymentMethod === 'mobileMoney'}
                onChange={handleInputChange}
                className="mr-2"
              />
              <FaMobileAlt className="mr-2" />
              Mobile Money
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Proceed to Booking Summary
        </button>
      </form>
    </div>
  );
};

export default ContactDetail;
