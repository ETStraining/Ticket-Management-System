import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import search from "../assets/search 1.png";

const Users = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // You can dynamically calculate this based on the data

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Fetch new data based on the page or update the displayed data
  };

  return (
    <div className="h-screen bg-[#f3f4f6]">
      <div className="w-[90%] m-auto h-screen">
        <div className="w-full flex justify-between mt-7">
          <p>
            <b>Hello Nzayisena👋</b>
          </p>
          <div className="w-[280px] h-[38px] bg-white rounded-sm flex items-center px-2 justify-between">
            <img src={search} width="20" height="20" alt="search icon" />
            <input
              type="search"
              placeholder="search"
              className="w-[90%] outline-none"
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-md py-7 px-8 mt-7 flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000000]">
              <i className="bi bi-person-fill" style={{ color: "#5932EA" }}></i>
            </div>
            <div className="text-sm">
              <b>
                Total Users
                <br />
                2000
              </b>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000000]">
              <i className="bi bi-person-fill" style={{ color: "#5932EA" }}></i>
            </div>
            <div className="text-xs">
              <b>
                Total Users
                <br />
                2000
                <br />
                this month
              </b>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-full w-10 h-10 flex justify-center items-center border-[1px] border-[#000000]">
              <i className="bi-window-fullscreen" style={{ color: "#5932EA" }}></i>
            </div>
            <div className="text-sm">
              <b>
                Active now
                <br />
                2000
                <br />
              </b>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-md mt-7 px-8 py-4">
          <p>All Users</p>
          <p className="text-xs mt-2" style={{ color: "#5932EA" }}>Active now</p>
          <table className="w-full mt-2">
            <thead>
              <tr className="text-[#575050] text-sm border-b border-[#EEEEEE]">
                <th className="text-left py-2">User Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Phone Number</th>
                <th className="text-left py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through your user data here */}
              <tr className="text-sm border-b border-[#EEEEEE]">
                <td className="text-left py-3">Nzayisenga Emmanuel</td>
                <td className="text-left py-3">nzayisengaemmy2001@gmail.com</td>
                <td className="text-left py-3">0790838315</td>
                <td className="text-left text-[#00B087] py-3">Active</td>
              </tr>
              <tr className="text-sm border-b border-[#EEEEEE]">
                <td className="text-left py-3">Nzayis</td>
                <td className="text-left py-3">nzayisengaemmy2001@gmail.com</td>
                <td className="text-left py-3">0790838315</td>
                <td className="text-left text-[#DF0404] py-3">In Active</td>
              </tr>
              <tr className="text-sm border-b border-[#EEEEEE]">
                <td className="text-left py-3">Nzayis</td>
                <td className="text-left py-3">nzayisengaemmy2001@gmail.com</td>
                <td className="text-left py-3">0790838315</td>
                <td className="text-left text-[#DF0404] py-3">In Active</td>
              </tr>
              
              {/* More rows as needed */}
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
  );
};

export default Users;
