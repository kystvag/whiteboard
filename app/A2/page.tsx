"use client";

import Image from "next/image";

export default function A2Page() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <Image
        src="https://www.yr.no/en/content/1-2776491/meteogram.svg?mode=dark"
        alt="Meteogram fra YR"
        className="w-full max-w-xl h-auto"
        width={800}
        height={600}
        priority
      />
    </div>
  );
}
