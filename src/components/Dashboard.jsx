import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Users from './Users'
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
  FiMenu,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import Settings from "./Settings";
import Tickets from "./Tickets";
import Officials from "./Officials";
import { IoClose } from "react-icons/io5";
import { useTheme } from "./ThemeContext";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("All Tickets");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDiv, setActiveDiv] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(()=>{
    const FetchAllTickets=async()=>{
      try {
        const response=await axios.get('https://tm-system-1.onrender.com/api/v1/tickets')
        console.log(" All Tickects: "+response.data)
      } catch (error) {
        console.error(error)
      }
    }
    FetchAllTickets()
  },[])
  const tickets = [
    {
      id: "2023-CS123",
      title: "How to deposit money to my portal?",
      user: "John Snow",
      priority: "Normal",
      status: "On-Going",
    }
  ];

  const getDivClass = (divName) => {
    return activeDiv === divName 
      ? `flex items-center p-3 ${darkMode ? 'text-white bg-gray-700' : 'text-gray-950 bg-gray-300'} cursor-pointer`
      : `flex items-center p-3 ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-950 hover:bg-gray-200'} cursor-pointer`;
  };

  return (
    <div className={`flex md:h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen text-sm pt-4 mb-4 w-screen md:overflow-y-hidden md:fixed md:left-0 md:top-0 md:overflow-hidden`}>
      <div className={`md:w-56 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md ${sidebarOpen ? "block" : "hidden"} h-screen sm:block`}>
        <div className={`p-3 text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>ALL TICKETS</div>
        <nav>
          <div onClick={() =>{ setSidebarOpen(false)
             setActiveDiv("Dashboard")}} className={getDivClass("Dashboard")}>
            <FiGrid className="mr-3 text-sm" />
            <span>Dashboard</span>
          </div>
          <div onClick={() =>{ setSidebarOpen(false)
             setActiveDiv("Users")}} className={getDivClass("Users")}>
            <FiUsers className="mr-3 text-sm" />
            <span>Users</span>          
          </div>
          <div onClick={() =>{ setSidebarOpen(false)
             setActiveDiv("Tickets")}} className={getDivClass("Tickets")}>
            <FiTag className="mr-3 text-sm" />
            <span>Tickets</span>
          </div>
          <div onClick={() =>{ setSidebarOpen(false)
             setActiveDiv("Officials")}} className={getDivClass("Officials")}>
            <FiUserCheck className="mr-3 text-sm" />
            <span>Officials</span>
          </div>
          <div onClick={() =>{ setSidebarOpen(false)
             setActiveDiv("Settings")}} className={getDivClass("Settings")}>
            <FiSettings className="mr-3 text-sm" />
            <span>Site Settings</span>
          </div>
        </nav>
      </div>
      <div className="flex-1 overflow-hidden">
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'}  shadow-sm`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button className="mr-4 md:hidden" onClick={toggleSidebar}>
                {sidebarOpen ? (
                  <IoClose className={`${darkMode ? 'text-white' : 'text-gray-900'}  mt-[-10px] h-8 w-6`} />
                ) : (
                  <FiMenu className={`${darkMode ? 'text-white' : 'text-gray-900'} text-sm h-8 w-6`} />
                )}
              </button>
              <button className="mr-3">
                <FiGrid className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} ${sidebarOpen?"hidden":"block"} text-sm`} />
              </button>
              <h1 className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Welcome! Bosco</h1>
            </div>
            <div className="flex items-center">
              <button onClick={toggleDarkMode} className="mr-3">
                {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-500" />}
              </button>
              <button className="mr-3 relative">
                <FiBell className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} ${sidebarOpen?"hidden":"block"} text-[17px]`} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/30"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className={`mr-2 text-[13px] ${darkMode ? 'text-white' : 'text-black'} ${sidebarOpen?"hidden":"block"}`}>Admin Name</span>
                <FiChevronDown className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} ${sidebarOpen?"hidden":"block"} text-[13px]`} />
              </div>
            </div>
          </div>
        </header>
        <div className="h-[80vh] fixed w-full md:w-[85%]">
          {activeDiv === "Dashboard" && (
            <main className={`p-4 overflow-auto h-[calc(100vh-56px)] ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
              <h2 className={`text-[22px] font-semibold mb-4 overflow-hidden ${darkMode ? 'text-white' : 'text-black'}`}>Tickets</h2>
              <div className="flex justify-between mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for ticket"
                    className={`pl-8 pr-3 py-1.5 text-[13px] border rounded-md w-full ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'}`}
                  />
                  <FiSearch className={`absolute left-2.5 top-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-[13px]`} />
                </div>
                <div className="flex space-x-3">                
                  <button
                    onClick={() => navigate("/new-ticket")}
                    className={`${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} text-white px-3 py-1.5 rounded-md flex items-center text-[13px]`}
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
                        ? `text-white ${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`
                        : darkMode ? 'text-gray-300' : 'text-gray-900'
                    }`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded-md shadow`}>
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
                        <span className={`font-semibold text-[13px] ${darkMode ? 'text-white' : 'text-black'}`}>
                          Ticket# {ticket.id}
                        </span>
                        {ticket.priority === "High" && (
                          <span className="ml-1.5 text-xxs bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                            High Priority
                          </span>
                        )}
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Posted at 12:45 AM
                      </span>
                    </div>
                    <h3 className={`font-semibold mb-1.5 text-[13px] ${darkMode ? 'text-white' : 'text-black'}`}>
                      {ticket.title}
                    </h3>
                    <p className={`mb-3 text-[13px] ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
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
                        <span className={`text-[13px] ${darkMode ? 'text-white' : 'text-black'}`}>{ticket.user}</span>
                      </div>
                      <button className={`text-[13px] ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`}>
                        Open Ticket
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className={`px-3 py-1.5 rounded-md ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'} text-white text-[13px]`}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </button>
                <button
                  className={`px-3 py-1.5 rounded-md text-[13px] ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </button>
                <button
                  className={`px-3 py-1.5 rounded-md text-[13px] ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </main>        
          )}
          {activeDiv === "Users" && <Users />}
          {activeDiv === "Settings" && <Settings />}
          {activeDiv === "Tickets" && <Tickets />}
          {activeDiv === "Officials" && <Officials />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;