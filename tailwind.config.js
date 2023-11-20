

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{jsx,tsx}",
  ],
  darkMode: "class",
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    inter: ["Inter", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#9042F5",
        subprimary: "#C288FF",
        secondary: "#C69AF5",
        fucksecondary: "#C288FF",
        light: "#fffeff",
        lightbc: "#FEF6FF",
        sublight: "#E2DEEA",
        lightgray: "#B1A8B9",
        dark: "#1F1926",
        subdark: "#888181",
      },
      animation: {
        fadeUp: "fadeUp 1s linear"
      },
      keyframes: {
        fadeUp: {
          "0%": "h-0 overflow-hidden",
          "100%": "h-fit transition delay-500",
        }
      }
    },
  },
  plugins: [
    
  ],
  safelist: [{
      pattern: /(bg|text|border)-(((sub)?(primary|dark|light))|secondary)/
    }
  ]
}

