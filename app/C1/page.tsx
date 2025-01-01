import Image from "next/image";

const raceData = [
  { round: 1, country: "Australia", circuit: "Melbourne", date: "14-16 mars", time: "07:00", flag: "https://flagcdn.com/w320/au.png", winnerImage: "/images/2024_R01.png" },
  { round: 2, country: "China", circuit: "Shanghai", date: "21-23 mars", time: "08:00", flag: "https://flagcdn.com/w320/cn.png", winnerImage: "/images/2024_R02.png" },
  { round: 3, country: "Japan", circuit: "Suzuka", date: "4-6 april", time: "07:00", flag: "https://flagcdn.com/w320/jp.png", winnerImage: "/images/2024_R03.png" },
  { round: 4, country: "Bahrain", circuit: "Sakhir", date: "11-13 april", time: "17:00", flag: "https://flagcdn.com/w320/bh.png", winnerImage: "/images/2024_R04.png" },
  { round: 5, country: "Saudi Arabia", circuit: "Jeddah", date: "18-20 april", time: "19:00", flag: "https://flagcdn.com/w320/sa.png", winnerImage: "/images/2024_R05.png" },
  { round: 6, country: "USA", circuit: "Miami", date: "2-4 mai", time: "21:30", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R06.png" },
  { round: 7, country: "Italy", circuit: "Imola", date: "16-18 mai", time: "15:00", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R07.png" },
  { round: 8, country: "Monaco", circuit: "Monaco", date: "23-25 mai", time: "15:00", flag: "https://flagcdn.com/w320/mc.png", winnerImage: "/images/2024_R08.png" },
  { round: 9, country: "Spain", circuit: "Barcelona", date: "30 mai - 1 juni", time: "15:00", flag: "https://flagcdn.com/w320/es.png", winnerImage: "/images/2024_R09.png" },
  { round: 10, country: "Canada", circuit: "Montreal", date: "13-15 juni", time: "20:00", flag: "https://flagcdn.com/w320/ca.png", winnerImage: "/images/2024_R10.png" },
  { round: 11, country: "Austria", circuit: "Spielberg", date: "27-29 juni", time: "15:00", flag: "https://flagcdn.com/w320/at.png", winnerImage: "/images/2024_R11.png" },
  { round: 12, country: "United Kingdom", circuit: "Silverstone", date: "4-6 juli", time: "16:00", flag: "https://flagcdn.com/w320/gb.png", winnerImage: "/images/2024_R12.png" },
  { round: 13, country: "Belgium", circuit: "Spa", date: "25-27 juli", time: "15:00", flag: "https://flagcdn.com/w320/be.png", winnerImage: "/images/2024_R13.png" },
  { round: 14, country: "Hungary", circuit: "Budapest", date: "1-3 august", time: "15:00", flag: "https://flagcdn.com/w320/hu.png", winnerImage: "/images/2024_R14.png" },
  { round: 15, country: "Netherlands", circuit: "Zandvoort", date: "29-31 august", time: "15:00", flag: "https://flagcdn.com/w320/nl.png", winnerImage: "/images/2024_R15.png" },
  { round: 16, country: "Italy", circuit: "Monza", date: "5-7 september", time: "15:00", flag: "https://flagcdn.com/w320/it.png", winnerImage: "/images/2024_R16.png" },
  { round: 17, country: "Azerbaijan", circuit: "Baku", date: "19-21 september", time: "14:00", flag: "https://flagcdn.com/w320/az.png", winnerImage: "/images/2024_R17.png" },
  { round: 18, country: "Singapore", circuit: "Singapore", date: "3-5 oktober", time: "14:00", flag: "https://flagcdn.com/w320/sg.png", winnerImage: "/images/2024_R18.png" },
  { round: 19, country: "USA", circuit: "Austin", date: "17-19 oktober", time: "21:00", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R19.png" },
  { round: 20, country: "Mexico", circuit: "Mexico City", date: "24-26 oktober", time: "21:00", flag: "https://flagcdn.com/w320/mx.png", winnerImage: "/images/2024_R20.png" },
  { round: 21, country: "Brazil", circuit: "Sao Paulo", date: "7-9 november", time: "19:00", flag: "https://flagcdn.com/w320/br.png", winnerImage: "/images/2024_R21.png" },
  { round: 22, country: "USA", circuit: "Las Vegas", date: "20-22 november", time: "22:00", flag: "https://flagcdn.com/w320/us.png", winnerImage: "/images/2024_R22.png" },
  { round: 23, country: "Qatar", circuit: "Lusail", date: "28-30 november", time: "18:00", flag: "https://flagcdn.com/w320/qa.png", winnerImage: "/images/2024_R23.png" },
  { round: 24, country: "Abu Dhabi", circuit: "Yas Marina", date: "5-7 desember", time: "17:00", flag: "https://flagcdn.com/w320/ae.png", winnerImage: "/images/2024_R24.png" },
];

export default function F1Calendar() {
  // Del opp løpene i to grupper: 1-12 og 13-24
  const firstHalf = raceData.slice(0, 12); // Løp 1-12
  const secondHalf = raceData.slice(12); // Løp 13-24

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Opprett to kolonner ved bruk av CSS grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Første kolonne: Løp 1-12 */}
        <div className="space-y-3">
          {firstHalf.map((race) => (
            <div
              key={race.round}
              className="flex items-center justify-between bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow p-4"
              style={{ height: "60px", width: "500px" }} // Juster høyde og bredde for ruten
            >
            {/* R1-delen */}
<div
  className="text-white font-bold flex items-center justify-start" // Endret justify-center til justify-start
  style={{
    fontSize: "50px", // Fontstørrelse for R1
    width: "80px", // Fast bredde for R1
    height: "100%", // Full høyde
    textAlign: "left", // Venstrestilling av teksten
    paddingLeft: "10px", // Legger til litt innrykk fra venstre for ekstra polstring
  }}
>
  R{race.round}
</div>


              {/* Flagg-delen */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "60px", // Fast bredde for flagget
                  height: "100%", // Full høyde
                  marginLeft: "30px", // Avstand fra R1
                }}
              >
                <Image
                  src={race.flag}
                  alt={race.country}
                  layout="intrinsic"
                  width={70}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Løpsinfo-delen */}
              <div
                className="flex-1 ml-2"
                style={{
                  minWidth: "120px", // Minimum bredde for løpsinfo
                }}
              >
                <h2 className="font-bold">{race.country.toUpperCase()}</h2>
                <p className="text-sm">
                  {race.circuit} - {race.date}
                </p>
                <p className="text-sm">Starttid: {race.time}</p>
              </div>

             {/* Vinnerbildet */}
<div
  style={{
    width: "80px", // Fast bredde for vinnerbilde
    height: "50px", // Fast høyde for vinnerbilde
    overflow: "hidden", // Skjuler overflødig innhold
    borderRadius: "8px", // Avrundede hjørner
    display: "flex", // Fleksibel layout for sentrering
    justifyContent: "center", // Sentrer bildet horisontalt
    alignItems: "center", // Sentrer bildet vertikalt
    marginLeft: "auto", // Sørg for at bildet holder seg på høyre side
  }}
>
  <Image
    src={race.winnerImage}
    alt={`Vinnerbilde R${race.round}`}
    width={80} // Match bredden her
    height={50} // Match høyden her
    className="object-cover rounded-lg"
  />
</div>
            </div>
          ))}
        </div>

        {/* Andre kolonne: Løp 13-24 */}
        <div className="space-y-3">
          {secondHalf.map((race) => (
            <div
              key={race.round}
              className="flex items-center justify-between bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg shadow p-4"
              style={{ height: "60px", width: "500px" }} // Juster høyde og bredde for ruten
            >
           {/* R1-delen */}
<div
  className="text-white font-bold flex items-center justify-start" // Endret justify-center til justify-start
  style={{
    fontSize: "50px", // Fontstørrelse for R1
    width: "80px", // Fast bredde for R1
    height: "100%", // Full høyde
    textAlign: "left", // Venstrestilling av teksten
    paddingLeft: "0px", // Legger til litt innrykk fra venstre for ekstra polstring
  }}
>
  R{race.round}
</div>


              {/* Flagg-delen */}
              <div
                className="flex items-center justify-center"
                style={{
                  width: "60px",
                  height: "100%",
                  marginLeft: "30px",
                }}
              >
                <Image
                  src={race.flag}
                  alt={race.country}
                  layout="intrinsic"
                  width={70}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Løpsinfo-delen */}
              <div
                className="flex-1 ml-4"
                style={{
                  minWidth: "100px",
                }}
              >
                <h2 className="font-bold">{race.country.toUpperCase()}</h2>
                <p className="text-sm">
                  {race.circuit} - {race.date}
                </p>
                <p className="text-sm">Starttid: {race.time}</p>
              </div>

              {/* Vinnerbildet */}
<div
  style={{
    width: "80px", // Fast bredde for vinnerbilde
    height: "50px", // Fast høyde for vinnerbilde
    overflow: "hidden", // Skjuler overflødig innhold
    borderRadius: "8px", // Avrundede hjørner
    display: "flex", // Fleksibel layout for sentrering
    justifyContent: "center", // Sentrer bildet horisontalt
    alignItems: "center", // Sentrer bildet vertikalt
    marginLeft: "auto", // Sørg for at bildet holder seg på høyre side
  }}
>
  <Image
    src={race.winnerImage}
    alt={`Vinnerbilde R${race.round}`}
    width={80} // Match bredden her
    height={50} // Match høyden her
    className="object-cover rounded-lg"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
