import React from "react";

const OurLocations = () => {
  const countries = [
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇧🇩", name: "Bangladesh" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇬🇧", name: "UK" },
    { flag: "🇦🇺", name: "AU" },
    { flag: "🇨🇴", name: "Colombia" },
    { flag: "🇳🇱", name: "Netherlands" },
    { flag: "🇸🇪", name: "Sweden" },
    { flag: "🇨🇭", name: "Switzerland" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇧🇪", name: "Belgium" },
    { flag: "🇵🇱", name: "Poland" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇲🇽", name: "Mexico" },
    { flag: "🇨🇱", name: "Chile" },
    { flag: "🇨🇳", name: "China" },
    { flag: "🇯🇵", name: "Japan" },
    { flag: "🇦🇪", name: "United Arab Emirates" },
    { flag: "🇮🇳", name: "India" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:mx-[15%] bg-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Locations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country, index) => (
          <div
            key={index}
            className="group relative bg-white p-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            <div className="text-center">
              {/* You can replace the emoji with an image tag for actual flags */}
              <div className="text-6xl">{country.flag}</div>
              <h3 className="mt-4 text-xl font-medium">{country.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;
