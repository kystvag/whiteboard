"use client";

export default function A1Page() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Fiskemål 2025</h1>
      <ul className="grid grid-cols-2 gap-4 text-base">
        {[
          "__/2 ørret på over 2 kg",
          "__/10 ørret på over 1 kg",
          "Ørret i Mjøsa",
          "Havabbor",
          "Piggvar over 2 kg",
          "Sjøørret på Averøya",
          "Sjøørret på over 2 kg",
          "Aurefestival på Jølster",
          "Fisketur til Øvre Tysdalsvatn",
          "Fisketur til Suldalsvatnet",
          "Kjøpe kayak eller båt :)",
        ].map((goal, index) => (
          <li key={index} className="flex items-center">
            <input type="checkbox" className="mr-4" />
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
