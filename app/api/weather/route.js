import { NextResponse } from "next/server";

export async function GET() {
  try {
    const lat = 58.842702;
    const lon = 5.561869;

    console.log("Starter henting av værdata...");

    const weatherResponse = await fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`,
      {
        headers: {
          "User-Agent": "Hellesto-Widget/1.0 (kystvag@gmail.com)",
        },
      }
    );

    if (!weatherResponse.ok) {
      console.error(`Weather API error: ${weatherResponse.status}`);
      throw new Error(`Weather API error: ${weatherResponse.status}`);
    }

    const weatherData = await weatherResponse.json();

    console.log("Vellykket henting av værdata.");

    // Returner kun værdata foreløpig
    return NextResponse.json({
      weather: weatherData,
    });
  } catch (error) {
    console.error("Feil ved henting av data:", error.message);
    return NextResponse.json(
      { error: "Kunne ikke hente værdata", details: error.message },
      { status: 500 }
    );
  }
}
