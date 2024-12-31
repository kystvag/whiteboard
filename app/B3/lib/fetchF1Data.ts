
import axios from 'axios';

const BASE_URL = 'https://ergast.com/api/f1';

// Define a type for the Race object
interface Race {
  date: string;
  raceName: string;
  [key: string]: any; // Add additional properties if needed
}

// Henter 2025 kalender
export const getSeasonCalendar = async (year: number) => {
  const response = await axios.get(`${BASE_URL}/${year}.json`);
  return response.data.MRData.RaceTable.Races || [];
};

// Resultat fra forrige helg
export const getLastWeekendResults = async () => {
  const response = await axios.get(`${BASE_URL}/current/last/results.json`);
  return response.data.MRData.RaceTable.Races[0] || null;
};

// Tider for kommende helg
export const getNextWeekendDetails = async () => {
  const response = await axios.get(`${BASE_URL}/current.json`);
  const races: Race[] = response.data.MRData.RaceTable.Races;
  const upcomingRace = races.find((race) => new Date(race.date) > new Date());
  return upcomingRace || null;
};