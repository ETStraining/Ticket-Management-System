import React, { useState } from 'react';
import { FaCar, FaClock, FaUsers, FaSuitcase } from 'react-icons/fa';

const vehicles = [
  {
    id: 1,
    name: 'Standard Sedan',
    image: 'https://via.placeholder.com/300x200?text=Standard+Sedan',
    capacity: 4,
    luggage: 2,
    pricePerKm: 500,
  },
  {
    id: 2,
    name: 'Luxury SUV',
    image: 'https://via.placeholder.com/300x200?text=Luxury+SUV',
    capacity: 6,
    luggage: 4,
    pricePerKm: 800,
  },
  {
    id: 3,
    name: 'Minivan',
    image: 'https://via.placeholder.com/300x200?text=Minivan',
    capacity: 8,
    luggage: 6,
    pricePerKm: 700,
  },
];

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(time);
    }
  }
  return slots;
};

const Vehicle = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const timeSlots = generateTimeSlots();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Choose Your Vehicle</h2>
      
      <div className="mb-6">
        <label htmlFor="time-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Pickup Time
        </label>
        <select
          id="time-select"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">Choose a time</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="border rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{vehicle.name}</h3>
              <div className="flex items-center mb-2">
                <FaClock className="text-gray-500 mr-2" />
                <p>Selected time: {selectedTime || 'Not selected'}</p>
              </div>
              <div className="flex items-center mb-2">
                <FaUsers className="text-gray-500 mr-2" />
                <p>Capacity: {vehicle.capacity} passengers</p>
              </div>
              <div className="flex items-center mb-2">
                <FaSuitcase className="text-gray-500 mr-2" />
                <p>Luggage: {vehicle.luggage} pieces</p>
              </div>
              <div className="flex items-center mb-4">
                <FaCar className="text-gray-500 mr-2" />
                <p>Price: {vehicle.pricePerKm} RWF/km</p>
              </div>
              <button 
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                disabled={!selectedTime}
              >
                Select Vehicle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;