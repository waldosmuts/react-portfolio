module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "nunito": ["Nunito", "sans-serif"],
      "grape": ["Grape Nuts", "cursive"],
      "inter": ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#6C63FF",
        "secondary": "#F5F5F5",
        "tertiary": "#544aff",
        "highlight": "#9f9aff",
      },
      scale: {
        "60": "0.6"
      },
      spacing: {
        "15": "3.75rem"
      },
    },
  },
  plugins: [],
}
