import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center py-12 px-8 bg-gray-100 min-h-screen pt-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
          About TMS Ltd
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          TMS Ltd is a leading public-private partnership transport company
          established to enhance public transport services across Rwanda and the
          region. Our mission is to connect isolated communities in rural areas
          to development opportunities by providing accessible and affordable
          transportation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to be a benchmark in the intercity public transport sector,
              providing modern, comfortable, and secure vehicles that guarantee
              exceptional service and safety for all passengers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Deliver high-quality public transport services across the
                country.
              </li>
              <li>
                Regularly connect rural communities with urban centers to remove
                isolation.
              </li>
              <li>Promote and modernize public transportation in Rwanda.</li>
              <li>
                Create employment opportunities and contribute to poverty
                reduction.
              </li>
              <li>
                Ensure customer satisfaction through reliable and efficient
                service.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At TMS Ltd, we are committed to making transportation accessible to
            everyone. Our fleet of modern vehicles, combined with our dedication
            to quality service, sets us apart as a reliable and trusted provider
            in the region. Whether you're traveling for business or leisure, we
            ensure that you reach your destination safely and comfortably.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
