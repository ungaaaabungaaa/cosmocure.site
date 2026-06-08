/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0EA",
        gold: "#C8A882",
        caramel: "#A0855E",
        espresso: "#1E1B18",
        charcoal: "#2E2B26",
        muted: "#3D3A35",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        accent: ["var(--font-accent)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
