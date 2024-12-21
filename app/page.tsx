"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";

interface User {
  id: string;
  email: string;
}

interface Race {
  round: string;
  raceName: string;
  date: string;
  time: string;
  circuit: {
    circuitName: string;
    locality: string;
  };
}

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [races, setRaces] = useState<Race[]>([]);
  const [nextRace, setNextRace] = useState<Race | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email || "Ingen e-post funnet",
        });
      } else {
        setUser(null);
      }
    };

    const fetchRaces = async () => {
      try {
        const response = await fetch("https://ergast.com/api/f1/2025.json");
        const data = await response.json();

        const raceData = data.MRData.RaceTable.Races.map((race: any) => ({
          round: race.round,
          raceName: race.raceName,
          date: race.date,
          time: race.time,
          circuit: {
            circuitName: race.Circuit.circuitName,
            locality: race.Circuit.Location.locality,
          },
        }));

        setRaces(raceData);

        const now = new Date();
        const next = raceData.find((race: Race) => new Date(race.date) > now);
        setNextRace(next || null);
      } catch (error) {
        console.error("Feil ved henting av løpsdata:", error);
      }
    };

    fetchUser();
    fetchRaces();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Top section */}
      <div className="flex justify-between p-4 bg-white shadow">
        {/* F1-løp liste */}
        <div className="w-1/2">
          <h2 className="text-lg font-bold">F1-løp 2025</h2>
          <ul className="list-disc pl-4">
            {races.map((race) => (
              <li key={race.round}>
                {race.round}. {race.raceName} – {race.circuit.locality} ({race.date})
              </li>
            ))}
          </ul>
        </div>

        {/* Neste løp */}
        <div className="w-1/2 text-right">
          <h2 className="text-lg font-bold">Neste løp</h2>
          {nextRace ? (
            <div>
              <p className="text-sm font-semibold">{nextRace.raceName}</p>
              <p className="text-sm">
                {nextRace.date} kl. {nextRace.time}
              </p>
              <p className="text-sm">
                Bane: {nextRace.circuit.circuitName} ({nextRace.circuit.locality})
              </p>
            </div>
          ) : (
            <p>Ingen kommende løp funnet.</p>
          )}
        </div>
      </div>

      {/* Mid-section */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold mb-4">Velkommen til Whiteboard</h1>
        {user ? (
          <div className="text-center">
            <p className="mb-4">
              Du er logget inn som <span className="font-semibold">{user.email}</span>
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logg ut
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">Ingen bruker er logget inn.</p>
            <a
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
            >
              Logg inn
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
