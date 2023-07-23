/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#191919",
        secondary: "#F4F4F4",
        tertiary: "#272727",
        background: "#0A0A0A",
        textGray: "#A0A0A0",
        themeGreen: "#046367",

        // Home Page
        homeBlue: "#C1FDFF",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        jakarta: ["var(--font-jakarta)"],
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        primary: "-0.005rem",
        secondary: "-0.13px",
      },
    },
  },
  plugins: [],
}
