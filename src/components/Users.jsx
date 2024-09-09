import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../pagination/pagination";
import search from "../assets/search 1.png";
import { useTheme } from "./ThemeContext";

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const totalPages = 10; 
  const { darkMode } = useTheme();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://tm-system-1.onrender.com/api/v1/users");
        setUsers(response.data.allUsers);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={`h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#f3f4f6]'}`}>
      <div className="w-[90%] m-auto h-screen">
        <div className="w-full flex justify-between mt-7">
          <div className={`w-[280px] h-[38px] ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-sm flex items-center px-2 justify-between`}>
            <img src={search} width="20" height="20" alt="search icon" className="mr-[-40px]" />
            <input
              type="search"
              placeholder="search"
              className={`w-[90%] outline-none ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'} border rounded-[30px] h-8 pl-5`}
            />
          </div>
        </div>     
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} w-full rounded-md mt-7 px-8 py-4`}>
          <p>All Users</p>
          <p className="text-xs mt-2" style={{ color: "#5932EA" }}>Active now</p>

          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            // Wrap table in a responsive container
            <div className="overflow-x-auto">
              <table className="w-full min-w-full mt-2">
                <thead>
                  <tr className={`${darkMode ? 'text-gray-300 border-gray-700' : 'text-[#575050] border-[#EEEEEE]'} text-sm border-b`}>
                    <th className="text-left py-2">User Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className={`text-sm ${darkMode ? 'border-gray-700' : 'border-[#EEEEEE]'} border-b`}>
                      <td className="text-left py-3">{user.FullName}</td>
                      <td className="text-left py-3">{user.Email}</td>
                      <td className="text-left py-3">{user.TelphoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

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

export default Users;
