"use client";

import { useEffect, useState } from "react";

// Funksjon for å bestemme pilretning basert på vindretning (Yr-stil)
function getWindDirectionArrow(direction: number | "N/A") {
  if (direction === "N/A") return "N/A";
  if (direction >= 337.5 || direction < 22.5) return "↑"; // Nord
  if (direction >= 22.5 && direction < 67.5) return "↗"; // Nordøst
  if (direction >= 67.5 && direction < 112.5) return "→"; // Øst
  if (direction >= 112.5 && direction < 157.5) return "↘"; // Sørøst
  if (direction >= 157.5 && direction < 202.5) return "↓"; // Sør
  if (direction >= 202.5 && direction < 247.5) return "↙"; // Sørvest
  if (direction >= 247.5 && direction < 292.5) return "←"; // Vest
  if (direction >= 292.5 && direction < 337.5) return "↖"; // Nordvest
  return "N/A";
}

// Resten av koden for værdata
interface WeatherData {
  properties: {
    timeseries: {
      time: string;
      data: {
        instant: {
          details: {
            wind_speed: number;
            wind_speed_of_gust: number;
            wind_from_direction: number;
            air_temperature: number;
          };
        };
        next_1_hours?: {
          summary?: {
            symbol_code: string;
          };
          details?: {
            precipitation_amount: number;
          };
        };
      };
    }[];
  };
}

export default function B2Page() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          "https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=60&lon=11",
          {
            headers: {
              "User-Agent": "Infoskjerm Hovedprosjekt",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Feil ved henting av værdata.");
        }
        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError("Kunne ikke hente værdata. Prøv igjen senere.");
        console.error(err);
      }
    }

    fetchWeather();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Kystvarsel for Hellestøstranda (24 timer)
      </h1>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : weatherData ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-center">Tid</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Vær</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Temp. (°C)</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Vind (kast) m/s</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Nedbør (mm)</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.properties.timeseries.slice(0, 24).map((item, index) => {
                const windSpeed = item.data.instant.details.wind_speed ?? "N/A";
                const windGust = item.data.instant.details.wind_speed_of_gust ?? "N/A";
                const windDirection = item.data.instant.details.wind_from_direction ?? "N/A";

                return (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {new Date(item.time).toLocaleTimeString("no-NO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.data.next_1_hours?.summary?.symbol_code ?? "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.data.instant.details.air_temperature ?? "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {windSpeed} ({windGust}) {getWindDirectionArrow(windDirection)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.data.next_1_hours?.details?.precipitation_amount ?? "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">Henter værdata...</p>
      )}
    </main>
  );
}
