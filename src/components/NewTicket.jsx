
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Cars from '../img/car.jpg';
import Logo from '../img/logo.png';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Vehicle from './Vehicle';
import ContactDetail from './ContactDetail';
import { Link } from 'react-router-dom';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from './config.js'; 

const NewTicket = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [rideDetails, setRideDetails] = useState({});
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);

  const handleRideDetailsSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rideData = Object.fromEntries(formData);
    setRideDetails(rideData);
    setCurrentStep(2);
  };

  const handleVehicleSelect = (vehicleData) => {
    setSelectedVehicle(vehicleData);
    setCurrentStep(3);
  };

  const handleContactSubmit = (info) => {
    setContactInfo(info);
    setCurrentStep(4);
    console.log('Booking Summary:', { rideDetails, selectedVehicle, contactInfo: info });
  };

  const handleConfirmBooking = async () => {
    try {
      const bookingId = new Date().getTime().toString();
      await setDoc(doc(db, "bookings", bookingId), {
        rideDetails,
        selectedVehicle,
        contactInfo
      });
      alert('Booking confirmed successfully!');
    } catch (error) {
      console.error("Error confirming booking: ", error);
      alert('Error confirming booking. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-20">
      <header className="bg-indigo-500 text-white p-4 flex justify-between items-center absolute left-0 top-0 w-screen px-20">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-lg" />
          <p>+250 7888 888 888</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-lg" />
          <p>ticketlead@gmail.com</p>
        </div>
        <div>
          <span className="text-lg">Hi, Devcent!</span>
        </div>
      </header>

      <nav className="bg-white shadow-md p-4 flex justify-between items-center mt-8">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="logo" className="h-20 w-auto" />
          <h1 className="text-2xl font-bold text-indigo-500bg-indigo-500">TICKET LEAD</h1>
        </div>
        <ul className="flex space-x-6">
          <Link to="/">Home</Link> 
          <Link to=''>About</Link>
          <Link to='/new-ticket'>Booking</Link>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="p-8">
        <section className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
          <img src={Cars} alt="cars" className="absolute inset-0 w-full h-60 object-cover z-0" />
          <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
          <div className="relative z-20 flex items-center justify-center h-48">
            <h2 className="text-4xl font-bold text-white">Ticket-Booking</h2>
          </div>
        </section>

        <div className="sticky top-8 bg-white left-0 z-20 mb-11 mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 1 ? 'bg-indigo-500' : 'bg-gray-400'} text-white rounded-full`}>1</div>
            <p className="font-semibold text-gray-700">Enter Ride Details</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 2 ? 'bg-indigo-500' : 'bg-gray-400'} text-white rounded-full`}>2</div>
            <p className="font-semibold text-gray-700">Choose a Vehicle</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-400'} text-white rounded-full`}>3</div>
            <p className="font-semibold text-gray-700">Enter Contact Details</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className={`w-10 h-10 flex items-center justify-center ${currentStep >= 4 ? 'bg-indigo-500' : 'bg-gray-400'} text-white rounded-full`}>4</div>
            <p className="font-semibold text-gray-700">Booking Summary</p>
          </div>
        </div>

        <section>
          {currentStep === 1 && (
            <form onSubmit={handleRideDetailsSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <h3 className="text-xl font-semibold">Ride Details</h3>
                  <div className="mt-4">
                    <label className="block font-semibold">Pickup Date</label>
                    <input type="date" name="pickupDate" className="border p-2 mt-1 w-full" required />
                    <label className="block font-semibold mt-4">Pickup Time</label>
                    <input type="time" name="pickupTime" className="border p-2 mt-1 w-full" required />
                    <label className="block font-semibold mt-4">Pickup Location</label>
                    <select name="pickupLocation" className="border p-2 mt-1 w-full" required>
                      <option>Kigali</option>
                      <option>Rubavu</option>
                      <option>Musanze</option>
                    </select>

                    <label className="block font-semibold mt-4">Drop-off Location</label>
                    <select name="dropoffLocation" className="border p-2 mt-1 w-full" required>
                      <option>Kigali</option>
                      <option>Rubavu</option>
                      <option>Musanze</option>
                    </select>

                    <label className="block font-semibold mt-4">Transfer Type</label>
                    <select name="transferType" className="border p-2 mt-1 w-full" required>
                      <option>One way</option>
                      <option>Round trip</option>
                    </select>

                    <button type="submit" className="mt-6 bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                      Continue to Vehicle Selection
                    </button>
                  </div>
                </div>

                <div className="col-span-1">
                  <h3 className="text-xl font-semibold mb-4">Route Map</h3>
                  <MapContainer center={[-1.9403, 29.8739]} zoom={7} className="h-64 w-full">
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[-1.9403, 29.8739]}>
                      <Popup>Kigali, Rwanda</Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <Vehicle onVehicleSelect={handleVehicleSelect} />
          )}

          {currentStep === 3 && (
            <ContactDetail onSubmit={handleContactSubmit} />
          )}

          {currentStep === 4 && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
              <p><strong>Pickup Date:</strong> {rideDetails.pickupDate}</p>
              <p><strong>Pickup Time:</strong> {rideDetails.pickupTime}</p>
              <p><strong>Pickup Location:</strong> {rideDetails.pickupLocation}</p>
              <p><strong>Drop-off Location:</strong> {rideDetails.dropoffLocation}</p>
              <p><strong>Transfer Type:</strong> {rideDetails.transferType}</p>
              <p><strong>Vehicle:</strong> {selectedVehicle?.name}</p>
              <p><strong>Pickup Time:</strong> {selectedVehicle?.selectedTime}</p>
              <p><strong>Full Name:</strong> {contactInfo.fullName}</p>
              <p><strong>Phone Number:</strong> {contactInfo.phoneNumber}</p>
              <p><strong>Email:</strong> {contactInfo.email}</p>
              <p className="mb-2"><strong>Payment Method:</strong> {contactInfo.paymentMethod}</p>

              <button 
                onClick={handleConfirmBooking} 
                className="mt-6 bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Confirm Booking
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default NewTicket;
