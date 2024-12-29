import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1E1E1E", // Mørk bakgrunn
          800: "#2C2C2C", // Seksjonsbakgrunn
          700: "#3D3D3D", // Skillelinjer
          400: "#CCCCCC", // Sekundærtekst
          200: "#EEEEEE", // Primærtekst
        },
        blue: {
          400: "#5294E2", // Primær Yr-blå
          200: "#66B2FF", // Aksent
        },
        yellow: {
          400: "#FFD700", // Gult for viktige elementer
        },
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"], // Moderne sans-serif
        mono: ["Roboto Mono", "monospace"], // For tall og data
      },
      boxShadow: {
        soft: "0 2px 4px rgba(0, 0, 0, 0.1)", // Myk skygge
        strong: "0 4px 8px rgba(0, 0, 0, 0.2)", // Kraftig skygge
      },
    },
  },
  plugins: [],
};

export default config;
