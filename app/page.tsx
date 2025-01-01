"use client";

import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState("/A1");

  useEffect(() => {
    const pages = ["/A1", "/A2", "/B3"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % pages.length;
      setCurrentPage(pages[index]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen bg-gray-900">
      <iframe
        src={currentPage}
        className="w-full h-full border-none"
        title="Dynamic Content"
      ></iframe>
    </div>
  );
};

export default HomePage;
