import React from "react";
import DepartureCard from "./DepartureCard";

const Departures = () => {
  return (
    <div className="flex flex-col gap-5 px-8 md:px-20 py-10">
      <div className=" flex flex-col items-center justify-center">
        <p className=" italic text-2xl flex mb-5  font-semibold">
          {" "}
          TMS link people with places
        </p>
        <p className=" sm:text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          odit. Accusamus, at amet est incidunt inventore voluptates quidem
          ratione. Itaque, exercitationem quo? Voluptatum quasi eveniet placeat!
          Distinctio omnis dolores natus? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quia voluptas blanditiis saepe fugit
          corrupti eaque recusandae aspernatur! Numquam porro reiciendis ipsam
          maiores repudiandae sapiente officiis nemo nisi rem ipsum. Voluptatum.
        </p>
      </div>
      <div className="w-full flex  justify-center font-bold">
        <div className="mx-5 bg-indigo-500 w-5/6 h-20 flex items-center justify-center rounded-3xl text-2xl">
          Departures
        </div>
      </div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 ">
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
        <DepartureCard />
      </div>
    </div>
  );
};
export default Departures;
