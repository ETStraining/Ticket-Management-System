import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Cars from '../img/car.jpg';
import Logo from '../img/logo.png'
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const NewTicket = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaPhone className="text-lg" />
          <p>+250 7888 888 888</p>
        </div>
        <div className="flex items-center space-x-2 ml-[-55rem]">
          <FaEnvelope className="text-lg" />
          <p>ticketlead@gmail.com</p>
        </div>
        <div>
          <span className="text-lg">Hi, Devcent!</span>
        </div>
      </header>

      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
  <div className="flex items-center space-x-4">
    <img src={Logo} alt="logo" className="h-20 w-auto" />
    <h1 className="text-2xl font-bold text-blue-600">TICKET LEAD</h1>
  </div>
  <ul className="flex space-x-6">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li className="font-bold text-blue-600">Booking</li>
    <li>Contact</li>
  </ul>
</nav>


    
      <main className="p-8">
        <section className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden">
          <img src={Cars} alt="cars" className="absolute inset-0 w-full h-60 object-cover z-0" />

          <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

        
          <div className="relative z-20 flex items-center justify-center h-48">
            <h2 className="text-4xl font-bold text-white">Ticket - BOOKING</h2>
          </div>
        </section>
            
             <div className="relative z-20 mb-11 mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">1</div>
            <p className="font-semibold text-gray-700">Enter Ride Details</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full">2</div>
            <p className="font-semibold text-gray-700">Choose a vehicle</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full">3</div>
            <p className="font-semibold text-gray-700">Enter Contacts Details</p>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full">4</div>
            <p className="font-semibold text-gray-700">Booking Summary</p>
          </div>
        </div>
       <section>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h3 className="text-xl font-semibold">RIDE DETAILS</h3>

              <div className="mt-4">
                <label className="block font-semibold">PICKUP DATE</label>
                <input type="date" className="border p-2 mt-1 w-full" value="2024-08-22" />

                <label className="block font-semibold mt-4">PICKUP TIME</label>
                <input type="time" className="border p-2 mt-1 w-full" value="08:00" />

                <label className="block font-semibold mt-4">PICKUP LOCATION</label>
                <select className="border p-2 mt-1 w-full">
                  <option>Kigali</option>
                  <option>Rubavu</option>
                  <option>Musanze</option>
                </select>

                <label className="block font-semibold mt-4">DROP-OFF LOCATION</label>
                <select className="border p-2 mt-1 w-full">
                  <option>Kigali</option>
                  <option>Rubavu</option>
                  <option>Musanze</option>
                </select>

                <label className="block font-semibold mt-4">TRANSFER TYPE</label>
                <select className="border p-2 mt-1 w-full">
                  <option>One way</option>
                  <option>Round trip</option>
                </select>
              </div>
            </div>

            <div className="col-span-1">
              <h3 className="text-xl font-semibold">Map</h3>
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
        </section>
      </main>
    </div>
  );
};

export default NewTicket;
