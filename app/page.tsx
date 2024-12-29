import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-screen bg-gray-900">
      {/* Section A1 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="A1">
        <iframe
          src="https://yr.no/some-widget"
          className="w-full h-64 md:h-80 border-none rounded-md"
          title="Yr Widget"
        ></iframe>
      </div>

      {/* Section A2 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="A2">
        <iframe
          src="https://yr.no/some-widget"
          className="w-full h-64 md:h-80 border-none rounded-md"
          title="Yr Widget"
        ></iframe>
      </div>

      {/* Section A3 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="A3">
        <iframe
          src="https://yr.no/some-widget"
          className="w-full h-64 md:h-80 border-none rounded-md"
          title="Yr Widget"
        ></iframe>
      </div>

      {/* Section B1 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="B1">
        <p className="text-center text-gray-200">Innhold for seksjon B1</p>
      </div>

      {/* Section B2 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="B2">
        <p className="text-center text-gray-200">Innhold for seksjon B2</p>
      </div>

      {/* Section B3 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center" id="B3">
        <p className="text-center text-gray-200">Innhold for seksjon B3</p>
      </div>
    </div>
  );
};

export default HomePage;
