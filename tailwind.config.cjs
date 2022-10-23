/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      "colors": {
        "primary": {
          "100": "#370511ff",
          "500": "#643843ff",
          "700": "#775860ff"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "0.5em",
        "Quadruple": "4em",
        "DoubleUnit": "2em",
        "Unit": "1em",
        "TripleUnit": "3em"
      },
      "borderRadius": {
        "Radius 4": "4px",
        "Radius 2": "2px",
        "Round": "50%",
        "Radius 8": "8px"
      },
      "scale": {
        "DoubleUnit": "2rem",
        "Unit": "1rem",
        "TripleUnit": "3rem",
        "HalfUnit": "0.5rem"
      }
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}
