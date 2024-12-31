"use client";

import React from "react";
import Image from "next/image";

const raceData = [
  { round: 1, country: "Australia", circuit: "Melbourne", date: "14-16 mars 2025", flag: "https://flagcdn.com/w320/au.png", winnerImage: "/images/2024_R01.png" },
  { round: 2, country: "China", circuit: "Shanghai", date: "21-23 mars 2025", flag: "https://flagcdn.com/w320/cn.png", winnerImage: "/images/2024_R02.png" },
  { round: 3, country: "Japan", circuit: "Suzuka", date: "4-6 april 2025", flag: "https://flagcdn.com/w320/jp.png", winnerImage: "/images/2024_R03.png" },
  { round: 4, country: "Bahrain", circuit: "Sakhir", date: "11-13 april 2025", flag: "https://flagcdn.com/w320/bh.png", winnerImage: "/images/2024_R04.png" },
  { round: 5, country: "Saudi Arabia", circuit: "Jeddah", date: "18-20 april 2025", flag: "https://flagcdn.com/w320/sa.png", winnerImage: "/images/2024_R05.png" },
  { round: 6, country: "USA", circuit: "Miami", date: "2-4 mai 2025", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R06.png" },
  { round: 7, country: "Italy", circuit: "Imola", date: "16-18 mai 2025", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R07.png" },
  { round: 8, country: "Monaco", circuit: "Monaco", date: "23-25 mai 2025", flag: "https://flagcdn.com/w320/mc.png", winnerImage: "/images/2024_R08.png" },
  { round: 9, country: "Spain", circuit: "Barcelona", date: "30 mai – 1 juni 2025", flag: "https://flagcdn.com/w320/es.png", winnerImage: "/images/2024_R09.png" },
  { round: 10, country: "Canada", circuit: "Montreal", date: "13-15 juni 2025", flag: "https://flagcdn.com/w320/ca.png", winnerImage: "/images/2024_R10.png" },
  { round: 11, country: "Austria", circuit: "Spielberg", date: "27-29 juni 2025", flag: "https://flagcdn.com/w320/at.png", winnerImage: "/images/2024_R11.png" },
  { round: 12, country: "United Kingdom", circuit: "Silverstone", date: "4-6 juli 2025", flag: "https://flagcdn.com/w320/gb.png", winnerImage: "/images/2024_R12.png" },
  { round: 13, country: "Belgium", circuit: "Spa", date: "25-27 juli 2025", flag: "https://flagcdn.com/w320/be.png", winnerImage: "/images/2024_R13.png" },
  { round: 14, country: "Hungary", circuit: "Budapest", date: "1-3 august 2025", flag: "https://flagcdn.com/w320/hu.png", winnerImage: "/images/2024_R14.png" },
  { round: 15, country: "Netherlands", circuit: "Zandvoort", date: "29-31 august 2025", flag: "https://flagcdn.com/w320/nl.png", winnerImage: "/images/2024_R15.png" },
  { round: 16, country: "Italy", circuit: "Monza", date: "5-7 september 2025", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R16.png" },
  { round: 17, country: "Azerbaijan", circuit: "Baku", date: "19-21 september 2025", flag: "https://flagcdn.com/w320/az.png", winnerImage: "/images/2024_R17.png" },
  { round: 18, country: "Singapore", circuit: "Singapore", date: "3-5 oktober 2025", flag: "https://flagcdn.com/w320/sg.png", winnerImage: "/images/2024_R18.png" },
  { round: 19, country: "USA", circuit: "Austin", date: "17-19 oktober 2025", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R19.png" },
  { round: 20, country: "Mexico", circuit: "Mexico City", date: "24-26 oktober 2025", flag: "https://flagcdn.com/w320/mx.png", winnerImage: "/images/2024_R20.png" },
  { round: 21, country: "Brazil", circuit: "Sao Paulo", date: "7-9 november 2025", flag: "https://flagcdn.com/w320/br.png", winnerImage: "/images/2024_R21.png" },
  { round: 22, country: "USA", circuit: "Las Vegas", date: "20-22 november 2025", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R22.png" },
  { round: 23, country: "Qatar", circuit: "Lusail", date: "28-30 november 2025", flag: "https://flagcdn.com/w320/qa.png", winnerImage: "/images/2024_R23.png" },
  { round: 24, country: "Abu Dhabi", circuit: "Yas Marina", date: "5-7 desember 2025", flag: "https://flagcdn.com/w320/ae.png", winnerImage: "/images/2024_R24.png" },
];

export default function Page() {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">F1 Kalender 2025</h1>
      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        {raceData.map((race) => (
          <div key={race.round} className="bg-white rounded shadow p-2 flex items-center justify-between">
            <div className="flex items-center">
              <Image src={race.flag} alt={race.country} width={40} height={24} className="mr-2" />
              <div>
                <h2 className="font-bold text-sm">R{race.round}: {race.country}</h2>
                <p className="text-xs text-gray-600">{race.circuit} - {race.date}</p>
                <p className="text-xs text-gray-600">Starttid: {race.time}</p>
              </div>
            </div>
            <div>
              <Image src={race.winnerImage} alt={`Winner R${race.round}`} width={80} height={40} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
