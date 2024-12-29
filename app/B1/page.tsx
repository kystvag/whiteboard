"use client";

import React, { useEffect, useState } from "react";

const embedLinks = [
  "https://www.instagram.com/p/DEKzx7msAt0/",
  "https://www.instagram.com/p/DCin_jEIJ0Y/",
  "https://www.instagram.com/p/DAkuH3BoQvZ/",
  "https://www.instagram.com/p/DEAiZx6M51i/",
  "https://www.instagram.com/p/CvP0gV-sO7u/",
];

const B1Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % embedLinks.length);
    }, 10000); // Roterer hvert 10. sekund
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Last inn Instagram-embed-script på nytt for hver lenke
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Rydd opp script om nødvendig
      document.body.removeChild(script);
    };
  }, [currentIndex]);

  return (
    <div>
      <h1>B1</h1>
      <p>Instagram-innlegg som roterer hvert 10. sekund:</p>
      <div style={{ maxWidth: "540px", margin: "0 auto" }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={embedLinks[currentIndex]}
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "0",
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "540px",
            minWidth: "326px",
            padding: "0",
            width: "99.375%",
          }}
        ></blockquote>
      </div>
    </div>
  );
};

export default B1Page;
