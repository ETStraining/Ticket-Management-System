import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateUser = ({ user, onClose, onUpdate }) => {
  const [fullName, setFullName] = useState(user.FullName);
  const [email, setEmail] = useState(user.Email);
  const [phoneNumber, setPhoneNumber] = useState(user.TelphoneNumber);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.put(`https://tm-system-1.onrender.com/api/v1/users/${user.id}`, {
        FullName: fullName,
        Email: email,
        TelphoneNumber: phoneNumber
      });
      toast.success("User updated successfully!");
      onUpdate(); 
      onClose();  
    } catch (err) {
      setError("Failed to update user");
      toast.error("Failed to update user.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white text-gray-700 p-6 rounded shadow-lg w-[400px]">
        <h2 className="text-xl mb-4">Update User</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white font-bold py-2 px-4 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
