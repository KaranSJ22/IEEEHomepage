import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust as per your project
  ],
  theme: {
    extend: {
      keyframes: {
        "border-spin": {
          "0%": {
              transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        "border-beam": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      animation: {
        'border-spin':'border-spin 7s linear infinite',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
