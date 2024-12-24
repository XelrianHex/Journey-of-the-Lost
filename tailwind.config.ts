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
        "off-white": "#ddd",
        dark: "#333",
        grey: "#555",
        "dark-grey": "#444",
        white: "#fff",
        blue: "#007bff",
        midnight: "#1d3557",
        "flat-blue": "#457b9d",
        purple: "#6a11cb",
        red: "#e63946",
        yellow: "#ffcc33",
        "light-blue": "#a8dadc",
        "black-30": "#0000004d",
        "black-10": "#0000001a",
        "black-50": "#00000080",
        "black-20": "#00000033",
        "black-70": "#000000b3",
        "white-10": "#ffffff1a",
        "white-20": "#ffffff33",
      },
    },
  },
  plugins: [],
} satisfies Config;
