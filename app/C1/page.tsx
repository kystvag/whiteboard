"use client";

import React from "react";

const raceData = [
  { round: 1, country: "Australia", circuit: "Melbourne", date: "16. mars 2025", time: "07:00", flag: "https://flagcdn.com/w320/au.png", winnerImage: "/images/2024_R01.png" },
  { round: 2, country: "Kina", circuit: "Shanghai", date: "23. mars 2025", time: "08:00", flag: "https://flagcdn.com/w320/cn.png", winnerImage: "/images/2024_R02.png" },
  { round: 3, country: "Japan", circuit: "Suzuka", date: "6. april 2025", time: "07:00", flag: "https://flagcdn.com/w320/jp.png", winnerImage: "/images/2024_R03.png" },
  { round: 4, country: "Bahrain", circuit: "Sakhir", date: "13. april 2025", time: "17:00", flag: "https://flagcdn.com/w320/bh.png", winnerImage: "/images/2024_R04.png" },
  { round: 5, country: "Saudi-Arabia", circuit: "Jeddah", date: "20. april 2025", time: "19:00", flag: "https://flagcdn.com/w320/sa.png", winnerImage: "/images/2024_R05.png" },
  { round: 6, country: "USA", circuit: "Miami", date: "4. mai 2025", time: "21:30", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R06.png" },
  { round: 7, country: "Italy", circuit: "Imola", date: "18. mai 2025", time: "15:00", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R07.png" },
  { round: 8, country: "Monaco", circuit: "Monaco", date: "25. mai 2025", time: "15:00", flag: "https://flagcdn.com/w320/mc.png", winnerImage: "/images/2024_R08.png" },
  { round: 9, country: "Spain", circuit: "Barcelona", date: "1. juni 2025", time: "15:00", flag: "https://flagcdn.com/w320/es.png", winnerImage: "/images/2024_R09.png" },
  { round: 10, country: "Canada", circuit: "Montreal", date: "15. juni 2025", time: "20:00", flag: "https://flagcdn.com/w320/ca.png", winnerImage: "/images/2024_R10.png" },
  { round: 11, country: "Austria", circuit: "Spielberg", date: "29. juni 2025", time: "15:00", flag: "https://flagcdn.com/w320/at.png", winnerImage: "/images/2024_R11.png" },
  { round: 12, country: "United Kingdom", circuit: "Silverstone", date: "6. juli 2025", time: "16:00", flag: "https://flagcdn.com/w320/gb.png", winnerImage: "/images/2024_R12.png" },
  { round: 13, country: "Belgium", circuit: "Spa", date: "27. juli 2025", time: "15:00", flag: "https://flagcdn.com/w320/be.png", winnerImage: "/images/2024_R13.png" },
  { round: 14, country: "Hungary", circuit: "Budapest", date: "3. august 2025", time: "15:00", flag: "https://flagcdn.com/w320/hu.png", winnerImage: "/images/2024_R14.png" },
  { round: 15, country: "Netherlands", circuit: "Zandvoort", date: "31. august 2025", time: "15:00", flag: "https://flagcdn.com/w320/nl.png", winnerImage: "/images/2024_R15.png" },
  { round: 16, country: "Italy", circuit: "Monza", date: "7. september 2025", time: "15:00", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R16.png" },
  { round: 17, country: "Azerbaijan", circuit: "Baku", date: "21. september 2025", time: "14:00", flag: "https://flagcdn.com/w320/az.png", winnerImage: "/images/2024_R17.png" },
  { round: 18, country: "Singapore", circuit: "Singapore", date: "5. oktober 2025", time: "14:00", flag: "https://flagcdn.com/w320/sg.png", winnerImage: "/images/2024_R18.png" },
  { round: 19, country: "USA", circuit: "Austin", date: "19. oktober 2025", time: "21:00", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R19.png" },
  { round: 20, country: "Mexico", circuit: "Mexico City", date: "26. oktober 2025", time: "21:00", flag: "https://flagcdn.com/w320/mx.png", winnerImage: "/images/2024_R20.png" },
  { round: 21, country: "Brazil", circuit: "Sao Paulo", date: "9. november 2025", time: "20:00", flag: "https://flagcdn.com/w320/br.png", winnerImage: "/images/2024_R21.png" },
  { round: 22, country: "USA", circuit: "Las Vegas", date: "22. november 2025", time: "21:00", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R22.png" },
  { round: 23, country: "Qatar", circuit: "Lusail", date: "30. november 2025", time: "17:00", flag: "https://flagcdn.com/w320/qa.png", winnerImage: "/images/2024_R23.png" },
  { round: 24, country: "Abu Dhabi", circuit: "Yas Marina", date: "7. desember 2025", time: "17:00", flag: "https://flagcdn.com/w320/ae.png", winnerImage: "/images/2024_R24.png" },
];

export default function Page() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-4">F1 Kalender 2025</h1>
      <div className="flex flex-col items-center gap-3">
        {raceData.map((race) => (
          <div
            key={race.round}
            className="flex items-center rounded shadow"
            style={{
              background: "linear-gradient(to right, red, yellow)",
              height: "140px",
              width: "600px",
              padding: "5px",
            }}
          >
            <div
              className="flex items-center justify-start text-left font-bold text-white"
              style={{
                width: "140px",
                fontSize: "80px",
                paddingLeft: "5px",
              }}
            >
              R{race.round}
            </div>
            <div
              className="flex items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                margin: "0 10px",
              }}
            >
              <img
                src={race.flag}
                alt={`${race.country} flag`}
                className="object-contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="flex-1 text-black font-semibold">
              <h2 className="text-xl tracking-wide uppercase">{race.country}</h2>
              <p className="text-sm italic text-gray-800">{race.circuit} - {race.date}</p>
              <p className="text-sm font-bold text-gray-900">Starttid: {race.time}</p>
            </div>
            <div
              className="flex items-center justify-center"
              style={{
                width: "100px",
                height: "100px",
                marginLeft: "10px",
              }}
            >
              <img
                src={race.winnerImage}
                alt={`Winner R${race.round}`}
                className="object-cover rounded"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
