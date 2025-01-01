"use client";

export default function A3Page() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Vær Widgets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Widget 1 */}
        <iframe
          src="https://www.yr.no/en/content/10-985616/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 1"
        ></iframe>

        {/* Widget 2 */}
        <iframe
          src="https://www.yr.no/en/content/1-191289/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 2"
        ></iframe>

        {/* Widget 3 */}
        <iframe
          src="https://www.yr.no/en/content/1-211102/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 3"
        ></iframe>

        {/* Widget 4 */}
        <iframe
          src="https://www.yr.no/en/content/1-90090/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 4"
        ></iframe>

        {/* Widget 5 */}
        <iframe
          src="https://www.yr.no/en/content/2-11847683/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 5"
        ></iframe>

        {/* Widget 6 */}
        <iframe
          src="https://www.yr.no/en/content/1-201541/card.html?mode=dark"
          width="100%"
          height="365"
          style={{ border: "none" }}
          title="Widget 6"
        ></iframe>
      </div>
    </div>
  );
}
