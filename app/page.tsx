import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen bg-gray-900">
      {/* Section A1 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="A1">
        <iframe
          src="/A1"
          className="w-full h-full border-none rounded-md"
          title="A1 Content"
        ></iframe>
      </div>

      {/* Section A2 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="A2">
        <iframe
          src="/A2"
          className="w-full h-full border-none rounded-md"
          title="A2 Content"
        ></iframe>
      </div>

      {/* Section A3 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="A3">
        <iframe
          src="/A3"
          className="w-full h-full border-none rounded-md"
          title="A3 Content"
        ></iframe>
      </div>

      {/* Section B1 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="B1">
        <iframe
          src="/B1"
          className="w-full h-full border-none rounded-md"
          title="B1 Content"
        ></iframe>
      </div>

      {/* Section B2 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="B2">
        <iframe
          src="/B2"
          className="w-full h-full border-none rounded-md"
          title="B2 Content"
        ></iframe>
      </div>

      {/* Section B3 */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4" id="B3">
        <iframe
          src="/B3"
          className="w-full h-full border-none rounded-md"
          title="B3 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
