import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        musgo: "#1F3327",
        "musgo-2": "#2A4433",
        papel: "#F6EEDE",
        coral: "#FF5B3D",
        "coral-dark": "#B93C24",
        girasol: "#F2A93B",
        tinta: "#14201A",
        cordel: "#C9A876",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
