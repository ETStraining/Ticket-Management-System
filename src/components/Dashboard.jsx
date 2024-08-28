import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FiGrid,
  FiUsers,
  FiTag,
  FiUserCheck,
  FiSettings,
  FiBell,
  FiChevronDown,
  FiSearch,
  FiPlus,
} from "react-icons/fi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("All Tickets");
  const [currentPage, setCurrentPage] = useState(1);

  const sidebarItems = [
    { icon: FiGrid, text: "Dashboard" },
    { icon: FiUsers, text: "Users" },
    { icon: FiTag, text: "Tickets" },
    { icon: FiUserCheck, text: "Officials" },
    { icon: FiSettings, text: "Site Settings" },
  ];

  const tickets = [
    {
      id: "2023-CS123",
      title: "How to deposit money to my portal?",
      user: "John Snow",
      priority: "Normal",
      status: "On-Going",
    },
    {
      id: "2023-CS122",
      title: "How to deposit money to my portal?",
      user: "John Snow",
      priority: "High",
      status: "New",
    },
    {
      id: "2023-CS121",
      title: "How to deposit money to my portal?",
      user: "John Snow",
      priority: "Normal",
      status: "Resolved",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-sm pt-4 mb-4">
      <div className="hidden sm:block md:w-56 bg-white shadow-md">
        <div className="p-3 text-lg font-bold">ALL TICKETS</div>
        <nav>
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="users"
              className="flex items-center p-3 text-gray-700 hover:bg-purple-100"
            >
              <item.icon className="mr-3 text-sm" />
              <span>{item.text}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="flex-1 overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button className="mr-3">
                <FiGrid className="text-gray-500 text-sm" />
              </button>
              <h1 className="text-base font-semibold">Welcome! Bosco</h1>
            </div>
            <div className="flex items-center">
              <button className="mr-3 relative">
                <FiBell className="text-gray-500 text-[17px]" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="mr-2 text-[13px]">Admin Name</span>
                <FiChevronDown className="text-gray-500 text-[13px]" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 overflow-auto h-[calc(100vh-56px)]">
          <h2 className="text-[22px] font-semibold mb-4">Tickets</h2>
          <div className="flex justify-between mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for ticket"
                className="pl-8 pr-3 py-1.5 text-[13px] border rounded-md w-full"
              />
              <FiSearch className="absolute left-2.5 top-2 text-gray-400 text-[13px]" />
            </div>
            <div className="flex space-x-3">
              <select className="border rounded-md px-3 py-1.5 text-[13px]">
                <option>Select Priority</option>
              </select>
              <select className="border rounded-md px-3 py-1.5 text-[13px]">
                <option>This Week</option>
              </select>
              <button
                onClick={() => navigate("/new-ticket")}
                className="bg-indigo-500 text-white px-3 py-1.5 rounded-md flex items-center text-[13px]"
              >
                <FiPlus className="mr-1.5 text-[13px]" />
                New Ticket
              </button>
            </div>
          </div>
          <div className="flex space-x-3 mb-4">
            {["All Tickets", "New", "On-Going", "Resolved"].map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1.5 rounded-md text-[13px] ${
                  selectedTab === tab
                    ? "text-white bg-indigo-600 "
                    : "text-gray-900"
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white p-3 rounded-md shadow">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="flex items-center">
                    <span
                      className={`w-2 h-2 rounded-full mr-1.5 ${
                        ticket.status === "New"
                          ? "bg-blue-500"
                          : ticket.status === "On-Going"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    ></span>
                    <span className="font-semibold text-[13px]">
                      Ticket# {ticket.id}
                    </span>
                    {ticket.priority === "High" && (
                      <span className="ml-1.5 text-xxs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                        High Priority
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    Posted at 12:45 AM
                  </span>
                </div>
                <h3 className="font-semibold mb-1.5 text-[13px]">
                  {ticket.title}
                </h3>
                <p className="text-gray-900 mb-3 text-[13px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/30"
                      alt="User"
                      className="w-8 h-8 rounded-full mr-1.5"
                    />
                    <span className="text-[13px]">{ticket.user}</span>
                  </div>
                  <button className="text-indigo-500 text-[13px]">
                    Open Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="px-3 py-1.5 rounded-md bg-indigo-500 text-white text-[13px]"
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              className="px-3 py-1.5 rounded-md text-gray-900 text-[13px]"
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button
              className="px-3 py-1.5 rounded-md text-gray-900 text-[13px]"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
