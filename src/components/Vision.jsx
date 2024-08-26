import React from "react";

const Vision = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-6 px-20 text-gray-900">
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Ticket System Management</h2>
        <p className="text-sm">
          TMS ltd is a public-private partnership transport company that was
          established to improve public transport services in Rwanda and in the
          region in order to bring out of isolation citizens living in rural
          areas facilitating their access to development activities at
          affordable prices.
        </p>
      </div>
      <div className="md:w-1/2">
        <h3 className="text-lg font-[400] mb-4">
          TMS ltd aims not only to improve public transport services but also
        </h3>
        <ol className="pl-5 space-y-2 list-disc list-inside first-letter:font-bold first-letter:text-xl">
          <li className="text-sm">
            Provide quality services and serve as role model of intercity public
            transport in the country using modern vehicles, comfortable and
            capable to ensure appropriate and secured public transportation.
          </li>
          <li className="text-sm">
            Remove isolation of citizens living in rural areas by regular
            transportation.
          </li>
          <li className="text-sm">
            Promotion and modernization of public transport in Rwanda.
          </li>
          <li className="text-sm">
            Create new jobs and fight against poverty.
          </li>
          <li className="text-sm">Provision of better services</li>
        </ol>
      </div>
    </div>
  );
};

export default Vision;
