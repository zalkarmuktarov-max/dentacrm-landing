import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#09090b",
          card: "#111113",
          secondary: "#18181b",
        },
        border: {
          DEFAULT: "#27272a",
        },
        blue: {
          DEFAULT: "#68a5e8",
          light: "#8bbcf0",
          dark: "#3a6ea5",
        },
        green: {
          DEFAULT: "#4ead7a",
        },
        yellow: {
          DEFAULT: "#d4a94e",
        },
        red: {
          DEFAULT: "#d45b5b",
        },
        teal: {
          DEFAULT: "#5eadb0",
        },
        text: {
          DEFAULT: "#e4e4e7",
          muted: "#a1a1aa",
          dim: "#52525b",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
