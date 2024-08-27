/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'custom': '1px 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
