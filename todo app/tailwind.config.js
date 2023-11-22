/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      fontFamily: {
        "primary": "Inter-Regular",
        "primary-bold": "Inter-Bold"
      }
    },
  },
  plugins: [],
}

