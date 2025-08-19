/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // override default sans
        sans: ["'Nata Sans'", "Avenir", "Futura", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
