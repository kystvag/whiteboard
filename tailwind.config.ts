import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1E3A8A", // Eksempel farge for primære handlinger
        secondary: "#FBBF24", // Eksempel farge for sekundære handlinger
        accent: "#10B981", // Eksempel aksentfarge
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Standard sans-serif font
        serif: ["Merriweather", "serif"], // Standard serif font
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;
