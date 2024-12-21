"use client";

import React from "react";

const HomePage = () => {
  const races = [
    { round: "1", raceName: "Melbourne", date: "16. mars kl. 16:00", locality: "Australia" },
    { round: "2", raceName: "Jeddah", date: "30. mars kl. 15:00", locality: "Saudi Arabia" },
    { round: "3", raceName: "Suzuka", date: "6. april kl. 14:00", locality: "Japan" },
    { round: "4", raceName: "Shanghai", date: "20. april kl. 16:00", locality: "Kina" },
    { round: "5", raceName: "Miami", date: "4. mai kl. 15:00", locality: "USA" },
    { round: "6", raceName: "Imola", date: "18. mai kl. 15:00", locality: "Italia" },
    { round: "7", raceName: "Monaco", date: "25. mai kl. 15:00", locality: "Monaco" },
    { round: "8", raceName: "Montreal", date: "8. juni kl. 14:00", locality: "Canada" },
    { round: "9", raceName: "Barcelona", date: "22. juni kl. 15:00", locality: "Spania" },
    { round: "10", raceName: "Silverstone", date: "6. juli kl. 15:00", locality: "Storbritannia" },
    { round: "11", raceName: "Budapest", date: "20. juli kl. 15:00", locality: "Ungarn" },
    { round: "12", raceName: "Spa", date: "3. august kl. 15:00", locality: "Belgia" },
    { round: "13", raceName: "Zandvoort", date: "24. august kl. 15:00", locality: "Nederland" },
    { round: "14", raceName: "Monza", date: "7. september kl. 15:00", locality: "Italia" },
    { round: "15", raceName: "Singapore", date: "21. september kl. 15:00", locality: "Singapore" },
    { round: "16", raceName: "Suzuka", date: "5. oktober kl. 14:00", locality: "Japan" },
    { round: "17", raceName: "Austin", date: "19. oktober kl. 15:00", locality: "USA" },
    { round: "18", raceName: "Mexico City", date: "2. november kl. 15:00", locality: "Mexico" },
    { round: "19", raceName: "São Paulo", date: "16. november kl. 15:00", locality: "Brasil" },
    { round: "20", raceName: "Las Vegas", date: "30. november kl. 15:00", locality: "USA" },
    { round: "21", raceName: "Abu Dhabi", date: "7. desember kl. 15:00", locality: "UAE" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Hugos Infotavle</h1>
      </header>

      {/* Innhold */}
      <div className="flex flex-grow p-4 gap-4">
        {/* F1-løpene */}
        <div className="w-1/2 bg-white shadow p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">F1-løp 2025</h2>
          <ul className="list-disc pl-4">
            {races.map((race) => (
              <li key={race.round}>
                {race.round}. {race.raceName} – {race.locality} ({race.date})
              </li>
            ))}
          </ul>
        </div>

        {/* Meteogram-widget */}
        <div className="w-1/2 bg-white shadow p-4">
          <h2 className="text-xl font-bold mb-4">Værmelding</h2>
          <iframe
            src="https://www.yr.no/en/content/1-90090/meteogram.svg?mode=dark"
            className="w-full"
            style={{ height: "500px", border: "none" }}
            title="Meteogram"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 mt-auto">
        <p>Du er logget inn som Hugo</p>
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">Logg ut</button>
      </footer>
    </div>
  );
};

export default HomePage;
