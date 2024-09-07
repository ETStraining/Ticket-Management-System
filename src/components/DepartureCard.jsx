import React from "react";
import { Link } from "react-router-dom";
function DepartureCard({route,frequency,price,location,phone,location1,phone1} ) {

  return (
    <div className="max-w-sm rounded  shadow-lg p-4 m-4 bg-gray-200">
      <div className="bg-indigo-500 mt-[-16px] mx-[-16px]  rounded-t-lg">
        <div className=" text-center text-white text-lg font-bold py-2">
          {route}
        </div>
        <div className=" text-center text-white text-sm py-1">
          Departure: {frequency}
        </div>
      </div>

      <div className="py-4">
        <p className="text-gray-600 text-lg font-semibold">Price: {price}</p>
        <p className="text-gray-700 mt-2">Contact:</p>
       
          <p className="text-gray-600">
            {location}: {phone}
          </p>
          <p className="text-gray-600">
            {location1}: {phone1}
          </p>
      </div>
      <Link to="/new-ticket">
        <button
          className="border-none px-4 py-2 bg-indigo-600 rounded-md text-white font-semibold
      hover:bg-indigo-800"
        >
          Book now
        </button>
      </Link>
    </div>
  );
}

export default DepartureCard;
