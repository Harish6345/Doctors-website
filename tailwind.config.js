/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary':"#6370f8"
      },
      gridTemplateColumns:{
       'auto':'repeat(auto-fill, minmax(250px,1fr))'
      }
    },
  },
  plugins: [],
}