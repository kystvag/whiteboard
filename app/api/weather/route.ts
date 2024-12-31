import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact",
      {
        headers: {
          "User-Agent": "Infoskjerm Hovedprosjekt", // Kun tillatt fra server
        },
        params: {
          lat: 58.8897,
          lon: 5.6472,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Feil ved henting av værdata fra server:", error.message);
      return NextResponse.json(
        { error: "Kunne ikke hente værdata" },
        { status: 500 }
      );
    }
    console.error("Ukjent feil ved henting av værdata:", error);
    return NextResponse.json(
      { error: "En ukjent feil oppstod" },
      { status: 500 }
    );
  }
}
