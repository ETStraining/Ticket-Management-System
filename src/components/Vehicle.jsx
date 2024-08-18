import React, { useState } from 'react';

const Vehicle = ({ onVehicleSelect }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVehicleSelect({ name: selectedVehicle, selectedTime });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Choose a Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block font-semibold">Vehicle</label>
          <select value={selectedVehicle} onChange={handleVehicleChange} className="border p-2 mt-1 w-full" required>
            <option value="" disabled>Select a vehicle</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <div className="mt-4">
          <label className="block font-semibold">Select Pickup Time</label>
          <input type="time" value={selectedTime} onChange={handleTimeChange} className="border p-2 mt-1 w-full" required />
        </div>
        <button type="submit" className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Continue to Contact Details
        </button>
      </form>
    </div>
  );
};

export default Vehicle;
