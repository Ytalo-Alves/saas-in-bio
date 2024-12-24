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
        "BACKGROUND-PRIMARY": "#050505",
        "BACKGROUND-SECONDARY": "#0F0F10",
        "BACKGROUND-TERTIARY": "#19191A",
        "CONTENT-BODY": "#CDCBCC",
        "CONTENT-PLACEHOLDER": "#827D7F",
        "CONTENT-HEADLINE": "#B2B2B2",
        "BORDER-PRIMARY": "#19191A",
        "BORDER-SECONDARY": "#323234",
        "BORDER-TERTIARY": "#97979B",
        "ACCENT-PURPLE": "#4B2DBB",
        "ACCENT-GREEN": "#87BB2D",
        "ACCENT-PINK": "#B5446B"
      },
    },
  },
  plugins: [],
} satisfies Config;
