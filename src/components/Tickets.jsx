import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../pagination/pagination';
import { FiUser, FiCalendar, FiClock, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const Tickets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { darkMode } = useTheme();
  const totalPages = 10; 

  useEffect(() => {
    const fetchTickets = async () => {
      const token = localStorage.getItem("token");
  
      try {
        const response = await axios.get(
          "https://tm-system-1.onrender.com/api/v1/tickets",
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        setTickets(response.data); 
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch tickets");
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#f3f4f6]'}`}>
      <div className="w-[90%] m-auto h-screen">
        <div className="w-full flex justify-between mt-7">
          <p className={`${darkMode ? 'text-white' : 'text-black'}`}>
            <b>Manage Tickets</b>
          </p>
        </div>
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} w-full rounded-md mt-7 px-8 py-4`}>
          <p className="text-lg font-semibold">All Tickets</p>
          <div className="mt-4 overflow-x-auto">
            {isLoading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <table className="w-full min-w-full mt-2">
                <thead>
                  <tr className={`${darkMode ? 'text-gray-300' : 'text-[#575050]'} text-sm border-b ${darkMode ? 'border-gray-700' : 'border-[#EEEEEE]'}`}>
                    <th className="text-left py-2">Ticket ID</th>
                    {/* <th className="text-left py-2">Customer</th> */}
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Created At</th>
                    <th className="text-left py-2">Pick Time</th>
                    <th className="text-left py-2">Start Location</th>
                    <th className="text-left py-2">Starting Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className={`text-sm ${darkMode ? 'border-gray-700' : 'border-[#EEEEEE]'} border-b`}>
                      <td className="text-left py-3">{ticket._id}</td>
                      {/* <td className="text-left py-3">{ticket.customer}</td> */}
                      <td className="text-left py-3">
                        <span className={`px-2 py-1 rounded ${
                          ticket.status === 'Active' ? 'bg-green-100 text-green-600' :
                          ticket.status === 'Completed' ? 'bg-blue-100 text-blue-600' :
                          ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="text-left py-3">{ticket.createdAt}</td>
                      <td className="text-left py-3">{ticket.pickupTime}</td>
                      <td className="text-left py-3">{ticket.pickupLocation} - {ticket.dropOffLocation}</td>
                      <td className="text-left py-3">{ticket.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
