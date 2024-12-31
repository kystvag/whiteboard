"use client";

import { useEffect, useState } from "react";

// Funksjon for å bestemme pilretning basert på vindretning (Yr-stil)
function getWindDirectionArrow(direction) {
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

// Funksjon for å hente værikoner basert på symbol_code
function getWeatherIcon(symbolCode) {
  const iconMap = {
    cloudy: "☁️",
    fair: "🌤️",
    heavyrain: "🌧️",
    lightsnow: "❄️",
    partlycloudy_day: "⛅",
    partlycloudy_night: "🌙",
    sleet: "🌨️",
    snow: "❄️",
    rain: "🌧️",
    thunderstorm: "⛈️",
  };
  return iconMap[symbolCode] || "❓";
}

export default function B2Page() {
  const [weatherData, setWeatherData] = useState(null);

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
        const data = await response.json();
        console.log("Full API-respons:", JSON.stringify(data, null, 2));

        // Logg spesifikke vinddata for debugging
        data.properties.timeseries.forEach((item) => {
          const time = new Date(item.time).toLocaleTimeString("no-NO", {
            hour: "2-digit",
            minute: "2-digit",
          });
          const wind = item.data.instant.details;
          console.log(`Vinddata kl. ${time}:`, wind);
        });

        setWeatherData(data);
      } catch (error) {
        console.error("Feil ved henting av værdata:", error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <main className="p-4">
      <h1 className="text-center text-2xl font-bold mb-4">
        Kystvarsel for Hellestøstranda (24 timer)
      </h1>
      {weatherData ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Tid</th>
                <th className="border border-gray-300 px-4 py-2">Vær</th>
                <th className="border border-gray-300 px-4 py-2">Temp. (°C)</th>
                <th className="border border-gray-300 px-4 py-2">Vind (kast) m/s</th>
                <th className="border border-gray-300 px-4 py-2">Nedbør (mm)</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.properties.timeseries.slice(0, 24).map((item, index) => {
                const windSpeed = item.data.instant.details.wind_speed || "N/A";
                const windGust = item.data.instant.details.wind_speed_of_gust || "N/A";
                const windDirection = item.data.instant.details.wind_from_direction || "N/A";

                return (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {new Date(item.time).toLocaleTimeString("no-NO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {getWeatherIcon(item.data.next_1_hours?.summary?.symbol_code)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.data.instant.details.air_temperature || "N/A"}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {windSpeed} ({windGust}) {getWindDirectionArrow(windDirection)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.data.next_1_hours?.details?.precipitation_amount || "N/A"}
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
