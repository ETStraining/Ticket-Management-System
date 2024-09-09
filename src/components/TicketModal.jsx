// src/components/TicketModal.js
import React from "react";
import { IoClose } from "react-icons/io5";

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white p-4 rounded-md shadow-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Ticket Details</h2>
          <button onClick={onClose}>
            <IoClose className="text-gray-500" />
          </button>
        </div>
        <div className="mb-4">
          <p><strong>Ticket ID:</strong> {ticket._id}</p>
          <p><strong>Priority:</strong> {ticket.priority}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
          <p><strong>Pickup Location:</strong> {ticket.pickupLocation}</p>
          <p><strong>Drop Off Location:</strong> {ticket.dropOffLocation}</p>
          <p><strong>Pickup Time:</strong> {ticket.pickupTime}</p>
          <p><strong>Description:</strong> This ticket is for a scheduled pickup from {ticket.pickupLocation} to {ticket.dropOffLocation}. Please ensure to be available at the pickup location by {ticket.pickupTime}.</p>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
