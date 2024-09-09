import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Cars from "../img/car.jpg";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import Vehicle from "./Vehicle";
import ContactDetail from "./ContactDetail";
import Footer from "./Footer.jsx";
import axios from "axios";

const NewTicket = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [rideDetails, setRideDetails] = useState({});
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);  
  const [pickupDate, setPickupDate] = useState(getCurrentDate());
  const [pickupTime, setPickupTime] = useState(getCurrentTime());


  const handleRideDetailsSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const rideData = Object.fromEntries(formData);
    setRideDetails(rideData);
    setCurrentStep(2);
  };

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); 
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    return `${hours}:${minutes}`;
  }

  const handleVehicleSelect = (vehicleData) => {
    setSelectedVehicle(vehicleData);
    setCurrentStep(3);
  };

  const handleContactSubmit = (info) => {
    setContactInfo(info);
    setCurrentStep(4);
    console.log("Booking Summary:", {
      rideDetails,
      selectedVehicle,
      contactInfo: info,
    });
  };

  const handleConfirmBooking = async () => {
    const bookingData = {
      pickupDate: rideDetails.pickupDate,
      pickupTime: rideDetails.pickupTime,
      pickupLocation: rideDetails.pickupLocation,
      dropOffLocation: rideDetails.dropoffLocation,
      dueDate: "2024-09-08", 
    };
  
    try {
      const response = await axios.post("https://tm-system-1.onrender.com/api/v1/tickets/createTicket",
        bookingData);
      
      console.log("Booking confirmed:", response.data);
    } catch (error) {
      console.error("Error confirming booking:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen px-4 sm:px-8 md:px-20 pt-20">
        <header className="bg-orange-300 text-gray-900 p-4 flex flex-col sm:flex-row justify-end sm:gap-20 items-center fixed sm:h-16 left-0 top-0 w-full z-50">
          <div className="flex items-center space-x-2">
            <FaPhone className="text-lg" />
            <div>+250 788 888 888</div>
          </div>
          <div className="flex items-center space-x-2  sm:mt-0">
            <FaEnvelope className="text-lg" />
            <div>ticket@tsm.com</div>
          </div>
        </header>

        <main className="p-4 sm:p-8">
          <section className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg overflow-hidden">
            <img
              src={Cars}
              alt="cars"
              className="absolute inset-0 w-full h-48 sm:h-60 object-cover z-0"
            />
            <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
            <div className="relative z-20 flex items-center justify-center h-48">
              <h2 className="text-2xl sm:text-4xl font-bold text-white text-center overflow-hidden">
                Ticket-Booking
              </h2>
            </div>
          </section>

          <div className="sticky top-8 bg-white left-0 z-20 mb-11 mt-6 flex flex-col sm:flex-row justify-between sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  currentStep >= 1 ? "bg-indigo-500" : "bg-gray-400"
                } text-white rounded-full`}
              >
                1
              </div>
              <p className="font-semibold text-gray-900 text-center">
                Enter Ride Details
              </p>
            </div>
            <div className="flex-1 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  currentStep >= 2 ? "bg-indigo-500" : "bg-gray-400"
                } text-white rounded-full`}
              >
                2
              </div>
              <p className="font-semibold text-gray-900 text-center">
                Choose a Vehicle
              </p>
            </div>
            <div className="flex-1 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  currentStep >= 3 ? "bg-indigo-500" : "bg-gray-400"
                } text-white rounded-full`}
              >
                3
              </div>
              <p className="font-semibold text-gray-900 text-center">
                Enter Contact Details
              </p>
            </div>
            <div className="flex-1 h-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center space-x-4">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  currentStep >= 4 ? "bg-indigo-500" : "bg-gray-400"
                } text-white rounded-full`}
              >
                4
              </div>
              <p className="font-semibold text-gray-900 text-center">
                Booking Summary
              </p>
            </div>
          </div>

          <section>
            {currentStep === 1 && (
              <form onSubmit={handleRideDetailsSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      Ride Details
                    </h3>
                    <div className="mt-4">
                      <label className=" font-semibold hidden ">Pickup Date</label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={pickupDate}
                        className="border p-2 mt-1 w-full hidden"
                      />
                      <label className=" font-semibold mt-4 hidden">
                        Pickup Time
                      </label>
                      <input
                        type="time"
                        name="pickupTime"
                        value={pickupTime}
                        className="border p-2 mt-1 w-full hidden"

                      />
                      <label className="block font-semibold mt-4">
                        Pickup Location
                      </label>
                      <select
                        name="pickupLocation"
                        className="border p-2 mt-1 w-full"
                        required
                      >
                        <option>Kigali</option>
                        <option>Rubavu</option>
                        <option>Musanze</option>
                        <option>Muhanga</option>
                        <option>Huye</option>
                        <option>Karongi</option>
                        <option>Rusizi</option>
                        <option>Kamembe</option>
                        <option>Kayonza</option>
                      </select>

                      <label className="block font-semibold mt-4">
                        Drop-off Location
                      </label>
                      <select
                        name="dropoffLocation"
                        className="border p-2 mt-1 w-full"
                        required
                      >
                       <option>Kigali</option>
                        <option>Rubavu</option>
                        <option>Musanze</option>
                        <option>Muhanga</option>
                        <option>Huye</option>
                        <option>Karongi</option>
                        <option>Rusizi</option>
                        <option>Kamembe</option>
                        <option>Kayonza</option>
                      </select>

                      <label className="block font-semibold mt-4">
                        Transfer Type
                      </label>
                      <select
                        name="transferType"
                        className="border p-2 mt-1 w-full"
                        required
                      >
                        <option>One way</option>
                        <option>Round trip</option>
                      </select>

                      <button
                        type="submit"
                        className="mt-6 w-full sm:w-auto bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                      >
                        Continue to Vehicle Selection
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4">
                      Route Map
                    </h3>
                    <MapContainer
                      center={[-1.9403, 29.8739]}
                      zoom={7}
                      className="h-48 sm:h-64 w-full rounded-lg overflow-hidden shadow"
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[-1.9403, 29.8739]}>
                        <Popup>Kigali</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </div>
              </form>
            )}

            {currentStep === 2 && (
              <Vehicle
                onVehicleSelect={handleVehicleSelect}
                rideDetails={rideDetails}
              />
            )}

            {currentStep === 3 && (
              <ContactDetail onSubmit={handleContactSubmit} />
            )}

            {currentStep === 4 && (
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-4">
                  Booking Summary
                </h3>
                <p className="mb-2">
                  <strong>Pickup Date:</strong> {rideDetails.pickupDate}
                </p>
                <p className="mb-2">
                  <strong>Pickup Time:</strong> {rideDetails.pickupTime}
                </p>
                <p className="mb-2">
                  <strong>Pickup Location:</strong> {rideDetails.pickupLocation}
                </p>
                <p className="mb-2">
                  <strong>Drop-off Location:</strong>{" "}
                  {rideDetails.dropoffLocation}
                </p>
                <p className="mb-2">
                  <strong>Transfer Type:</strong> {rideDetails.transferType}
                </p>
                <p className="mb-2">
                  <strong>Selected Vehicle:</strong> {selectedVehicle.name}
                </p>
                <p className="mb-2">
                  <strong>Starting time:</strong> {selectedVehicle.time}
                </p>
                <p className="mb-2">
                  <strong>Contact Name:</strong> {contactInfo.fullName}
                </p>
                <p className="mb-2">
                  <strong>Contact Email:</strong> {contactInfo.email}
                </p>
                <p className="mb-2">
                  <strong>Contact Phone:</strong> {contactInfo.phoneNumber}
                </p>
                <button
                  onClick={handleConfirmBooking}
                  className="w-full sm:w-auto bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-6"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NewTicket;
