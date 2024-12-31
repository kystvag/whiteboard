"use client";

import React from "react";

interface Race {
  round: number;
  country: string;
  circuit: string;
  date: string;
  time: string;
  flag: string;
}

export default function RaceCard({ race }: { race: Race }) {
  return (
    <div className="bg-white rounded shadow p-4 flex items-center">
      <img src={race.flag} alt={race.country} className="w-12 h-8 mr-4" />
      <div>
        <h2 className="font-bold text-lg">R{race.round}: {race.country}</h2>
        <p className="text-sm text-gray-600">{race.circuit} - {race.date}</p>
        <p className="text-sm text-gray-600">Starttid: {race.time}</p>
      </div>
    </div>
  );
}
