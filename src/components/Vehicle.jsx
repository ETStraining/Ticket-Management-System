import React, { useState } from "react";

const vehicles = [
  {
    id: 1,
    name: "Public bus",
    times: ["08:00", "08:30", "09:00", "09:30", "10:00"],
  },
  {
    id: 2,
    name: "Private bus",
    times: ["09:00", "09:30", "10:00", "10:30", "11:00"],
  }
];

const Vehicle = ({ onVehicleSelect }) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const handleVehicleChange = (e) => {
    const vehicle = vehicles.find((v) => v.id === parseInt(e.target.value, 10));
    setSelectedVehicle(vehicle);
    setSelectedTime("");
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVehicleSelect({ name: selectedVehicle.name, time: selectedTime });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Choose a Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label className="block font-semibold">Vehicle</label>
          <select
            value={selectedVehicle?.id || ""}
            onChange={handleVehicleChange}
            className="border border-gray-300 rounded p-2 mt-1 w-full"
            required
          >
            <option value="" disabled>
              Select a vehicle
            </option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        {selectedVehicle && (
          <div className="mt-4">
            <label className="block font-semibold">Select Pickup Time</label>
            <select
              value={selectedTime}
              onChange={handleTimeChange}
              className="border border-gray-300 rounded p-2 mt-1 w-full"
              required
            >
              <option value="" disabled>
                Select a time
              </option>
              {selectedVehicle.times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        )}
        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          disabled={!selectedVehicle || !selectedTime}
        >
          Continue to Contact Details
        </button>
      </form>
    </div>
  );
};

export default Vehicle;
