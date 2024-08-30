import React, { useState } from 'react';
import Pagination from '../pagination/pagination';
import { FiUser, FiCalendar, FiClock, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Tickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Static ticket data including the new columns
  const tickets = [
    { id: 'T001', customer: 'Alice Johnson', status: 'Active', createdAt: '2024-08-29', pickTime: '10:00 AM', startLocation: 'New York', startingTime: '10:30 AM' },
    { id: 'T002', customer: 'Bob Smith', status: 'Completed', createdAt: '2024-08-28', pickTime: '11:00 AM', startLocation: 'Los Angeles', startingTime: '11:20 AM' },
    { id: 'T003', customer: 'Charlie Brown', status: 'Pending', createdAt: '2024-08-27', pickTime: '12:00 PM', startLocation: 'Chicago', startingTime: '12:10 PM' },
    { id: 'T004', customer: 'David Wilson', status: 'Cancelled', createdAt: '2024-08-26', pickTime: '01:00 PM', startLocation: 'Houston', startingTime: '01:05 PM' },
  ];

  return (
    <div className="h-screen bg-[#f3f4f6]">
      <div className="w-[90%] m-auto h-screen">
        <div className="w-full flex justify-between mt-7">
          <p>
            <b>Manage Tickets</b>
          </p>
        </div>
        <div className="bg-white w-full rounded-md mt-7 px-8 py-4">
          <p className="text-lg font-semibold">All Tickets</p>
          <div className="mt-4">
            <table className="w-full">
              <thead>
                <tr className="text-[#575050] text-sm border-b border-[#EEEEEE]">
                  <th className="text-left py-2">Ticket ID</th>
                  <th className="text-left py-2">Customer Name</th>
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Created At</th>
                  <th className="text-left py-2">Pick Time</th>
                  <th className="text-left py-2">Start Location</th>
                  <th className="text-left py-2">Starting Time</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="text-sm border-b border-[#EEEEEE]">
                    <td className="text-left py-3">{ticket.id}</td>
                    <td className="text-left py-3">{ticket.customer}</td>
                    <td className="text-left py-3">
                      {ticket.status === 'Active' ? (
                        <span className="text-[#00B087] flex items-center">
                          <FiCheckCircle className="mr-1" /> {ticket.status}
                        </span>
                      ) : ticket.status === 'Completed' ? (
                        <span className="text-[#4CAF50] flex items-center">
                          <FiCheckCircle className="mr-1" /> {ticket.status}
                        </span>
                      ) : ticket.status === 'Pending' ? (
                        <span className="text-[#FFC107] flex items-center">
                          <FiClock className="mr-1" /> {ticket.status}
                        </span>
                      ) : (
                        <span className="text-[#DF0404] flex items-center">
                          <FiXCircle className="mr-1" /> {ticket.status}
                        </span>
                      )}
                    </td>
                    <td className="text-left py-3">{ticket.createdAt}</td>
                    <td className="text-left py-3">{ticket.pickTime}</td>
                    <td className="text-left py-3">{ticket.startLocation}</td>
                    <td className="text-left py-3">{ticket.startingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
