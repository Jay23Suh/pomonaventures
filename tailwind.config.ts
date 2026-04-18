/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // override default sans
        sans: ["'Work Sans'", "Avenir", "Futura", "Helvetica", "Arial", "sans-serif"],
        heading: ["'Outfit'", "sans-serif"],
      },
      colors: {
        brand: {
          blue: {
            deep: '#1E3A8A',
            DEFAULT: '#2563EB',
          },
          orange: {
            DEFAULT: '#F97316',
            hover: '#EA580C',
          }
        }
      }
    },
  },
  plugins: [],
};
