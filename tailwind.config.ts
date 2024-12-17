import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sourGrummy: ["var(--font-sour-grummy)"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(5px) translateY(0px)" },
          "50%": { transform: "translateX(0) translateY(0px)" },
          "75%": { transform: "translateX(5px) translateY(0px)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
      },
      animation: {
        wave: "wave 0.5s ease-in-out 20",
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
