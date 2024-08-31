import React, { useState } from "react";
import {
  FiUserPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiUserCheck,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const Officials = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { darkMode } = useTheme();

  const officials = [
    {
      id: 1,
      name: "John Doe",
      role: "Manager",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Support Lead",
      email: "janesmith@example.com",
      phone: "098-765-4321",
      status: "Inactive",
    },
  ];

  const handleToggleDetails = (id) => {
    setShowDetails(showDetails === id ? null : id);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} p-4 rounded-md shadow-sm w-full md:w-[96%]`}>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Officials Management</h2>
        <button className={`${darkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-500 text-white'} px-4 py-2 rounded-md flex items-center`}>
          <FiUserPlus className="mr-2" />
          Add Official
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for officials"
            className={`pl-8 pr-3 py-2 text-sm ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'} border rounded-md w-full`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className={`absolute left-2.5 top-2.5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} />
        </div>
        <select className={`${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'} border rounded-md px-3 py-2 text-sm`}>
          <option>All Roles</option>
          <option>Manager</option>
          <option>Support Lead</option>
        </select>
      </div>

      <div className="space-y-4">
        {officials
          .filter(
            (official) =>
              official.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              official.role.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((official) => (
            <div
              key={official.id}
              className={`${darkMode ? 'border-gray-700' : 'border-gray-200'} border rounded-md p-4`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-semibold">{official.name}</h3>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{official.role}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      official.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {official.status}
                  </span>
                  <FiEdit className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`} />
                  <FiTrash2 className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`} />
                  <button
                    onClick={() => handleToggleDetails(official.id)}
                    className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                  >
                    {showDetails === official.id ? (
                      <FiChevronUp />
                    ) : (
                      <FiChevronDown />
                    )}
                  </button>
                </div>
              </div>
              {showDetails === official.id && (
                <div className={`mt-4 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    <strong>Email:</strong> {official.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {official.phone}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Officials;