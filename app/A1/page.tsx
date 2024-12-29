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
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>__/2 ørret på over 2 kg</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>__/10 ørret på over 1 kg</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Ørret i Mjøsa</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Havabbor</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Piggvar over 2 kg</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Sjøørret på Averøya</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Sjøørret på over 2 kg</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Aurefestival på Jølster</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Fisketur til Øvre Tysdalsvatn</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Fisketur til Suldalsvatnet</span>
        </li>
        <li className="flex items-center">
          <input type="checkbox" className="mr-4" />
          <span>Kjøpe kayak eller båt :)</span>
        </li>
      </ul>
    </div>
  );
}
