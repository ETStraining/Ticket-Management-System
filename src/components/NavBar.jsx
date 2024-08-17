import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className=" hidden sm:flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 md:px-20 fixed top-0 left-0 w-screen z-50
    border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl font-bold">Support Ticket System
        </div>
        <ul className="flex space-x-4">
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
             <Link to='/dashboard' >Dashboard</Link>
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              New Ticket
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
               <Link to='/login'>Login</Link> 
          </li>
          <li className="text-white hover:bg-blue-700 px-3 py-2 rounded">
              <IoMdNotifications className='w-6 h-8'/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;