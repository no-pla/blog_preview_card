import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      yellow: "#F4D04E",
      black: "#111111",
      pureWhite: "#FFFFFF",
      grey: "#7F7F7F",
    },
    screens: {
      sm: [{ max: "384px" }],
    },
    extend: {
      boxShadow: {
        cardShadow: "8px 8px 0px 0px #000;",
      },
    },
  },
  plugins: [],
};
export default config;
