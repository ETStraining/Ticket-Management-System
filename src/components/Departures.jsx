import React from "react";
import DepartureCard from "./DepartureCard";

const Departures = () => {
  return (
    <div className="flex flex-col gap-5 px-8 md:px-20 py-10">
      <div className="flex flex-col items-center justify-center">
        <p className="italic text-2xl flex mb-5 font-semibold">
          TMS link people with places
        </p>
        <p className="sm:text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          odit. Accusamus, at amet est incidunt inventore voluptates quidem
          ratione. Itaque, exercitationem quo? Voluptatum quasi eveniet placeat!
          Distinctio omnis dolores natus? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Quia voluptas blanditiis saepe fugit
          corrupti eaque recusandae aspernatur! Numquam porro reiciendis ipsam
          maiores repudiandae sapiente officiis nemo nisi rem ipsum. Voluptatum.
        </p>
      </div>
      <div className="w-full flex justify-center font-bold">
        <div className="mx-5 bg-indigo-500 w-5/6 h-20 flex items-center justify-center rounded-3xl text-2xl">
          Departures
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2">
        <DepartureCard 
          route='KIGALI - RUBAVU' 
          frequency="EVERY 30 MINUTES" 
          price="4839 frw" 
          location="Nyabugogo" 
          phone="0798888888" 
          location1="Rubavu" 
          phone1="0798485639"  
          
        />
        <DepartureCard  
          route='KIGALI - KAYONZA' 
          frequency="EVERY 1 HOUR" 
          price="2310 frw" 
          location="Nyabugogo" 
          phone="078222371"  
          location1="Kayonza" 
          phone1="079798368" 
        />
        <DepartureCard 
          route='KIGALI - KAMEMBE ' 
          frequency="EVERY 1 HOUR" 
          price="8450 frw" 
          location="Nyabugogo" 
          phone="0798888888"  
          location1="Kamembe" 
          phone1="0798983473" 
        />
        <DepartureCard 
          route='KIGALI - HUYE' 
          frequency="EVERY 30 MINUTES" 
          price="3742 frw" 
          location="Nyabugogo" 
          phone="0798888888"  
          location1="Huye" 
          phone1="0798089595" 
        />
        <DepartureCard 
          route='KIGALI - MUHANGA' 
          frequency="EVERY 30 MINUTES" 
          price="1506 frw" 
          location="Nyabugogo" 
          phone="0798888888"  
          location1="Muhanga" 
          phone1="0798973955" 
        />
        
        <DepartureCard 
          route='KIGALI - RUSIZI' 
          frequency="EVERY 1 HOUR" 
          price="7602 frw" 
          location="Nyabugogo" 
          phone="0798888888"  
          location1="Rusizi" 
          phone1="079800000" 
        />
        <DepartureCard 
          route='KIGALI - MUSANZE' 
          frequency="EVERY 1 HOUR" 
          price="2821 frw" 
          location="Nyabugogo" 
          phone="079899999"  
          location1="Musanze" 
          phone1="0798888888" 
        />
        <DepartureCard 
          route='KIGALI - KARONGI' 
          frequency="EVERY 1 HOUR" 
          price="4064 frw" 
          location="Kigali" 
          phone="0785930806"  
          location1="Karongi" 
          phone1="0798888888" 
        />
       
      </div>
    </div>
  );
};

export default Departures;