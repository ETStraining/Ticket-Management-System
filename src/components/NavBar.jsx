import React, { useState } from "react";
import { IoMdNotifications, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-500 p-4 md:px-20 fixed top-0 left-0 w-screen z-50">
      {/* Desktop Navbar */}
      <div className="hidden sm:flex container mx-auto justify-between items-center">
        <div className="text-white text-3xl font-bold overflow-hidden">
          Support Ticket System
        </div>
        <ul className="flex space-x-4">        
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            <Link to="/about">About</Link>
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            <Link to="/new-ticket">New Ticket</Link>
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
            <IoMdNotifications className="w-6 h-8" />
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center sm:hidden p-5 mt-[-20px]">
        <div className="text-white text-2xl font-bold">Support Ticket</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <IoMdClose className="w-8 h-8 hover:text-red-500" />
          ) : (
            <IoMdMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0,width:0 }}
          animate={{ height: "auto",width:"auto" }}
          transition={{ duration: 0.4 }}
          className="sm:hidden bg-indigo-500 "
        >
          <ul className="flex flex-col space-y-2 p-5 h-screen">
            <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              <Link to="/about" onClick={()=>setIsOpen(!isOpen)}>About</Link>
            </li>
            <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              <Link to="/new-ticket" onClick={()=>setIsOpen(!isOpen)}>New Ticket</Link>
            </li>
            <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              <Link to="/login" onClick={()=>setIsOpen(!isOpen)}>Login</Link>
            </li>
            <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              <IoMdNotifications onClick={()=>setIsOpen(!isOpen)} className="w-6 h-8" />
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default NavBar;
