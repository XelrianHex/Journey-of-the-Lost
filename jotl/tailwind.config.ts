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
        dark: "var(--color-dark)",
        grey: "var(--color-grey)",
        darkGrey: "var(--color-dark-grey)",
        offWhite: "var(--color-off-white)",
        white: "var(--color-white)",
        blue: "var(--color-blue)",
        midnight: "var(--color-midnight)",
        flatBlue: "var(--color-flat-blue)",
        purple: "var(--color-purple)",
        red: "var(--color-red)",
        yellow: "var(--color-yellow)",
        lightBlue: "var(--color-light-blue)",
        black10: "var(--color-black-10)",
        black20: "var(--color-black-20)",
        black30: "var(--color-black-30)",
        black50: "var(--color-black-50)",
        black70: "var(--color-black-70)",
        white10: "var(--color-white-10)",
        white20: "var(--color-white-20)",
      },
    },
  },
  plugins: [],
} satisfies Config;
