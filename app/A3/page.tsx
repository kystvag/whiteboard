"use client";

import React from "react";

const YrWidgetsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="grid grid-cols-2 gap-4 p-4 max-w-screen-lg">
        {/* Widget Sunndalsøra */}
        <div
          className="bg-white rounded shadow-lg overflow-hidden"
          style={{ height: "450px", width: "100%" }}
        >
          <iframe
            src="https://www.yr.no/en/content/1-191289/card.html?mode=dark"
            title="Yr Widget Sunndalsøra"
            frameBorder="0"
            className="w-full h-full"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Widget Trondheim */}
        <div
          className="bg-white rounded shadow-lg overflow-hidden"
          style={{ height: "450px", width: "100%" }}
        >
          <iframe
            src="https://www.yr.no/en/content/1-211102/card.html?mode=dark"
            title="Yr Widget Trondheim"
            frameBorder="0"
            className="w-full h-full"
            style={{ border: "none" }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YrWidgetsPage;
