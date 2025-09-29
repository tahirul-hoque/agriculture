/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',   // Extra small devices (portrait phones)
      'sm': '640px',   // Small devices (landscape phones)
      'ms': '675px',  // Medium-small devices
      'md': '768px',   // Medium devices (tablets)
      'lg': '1024px',  // Large devices (laptops/desktops)
      'xl': '1280px',  // Extra large devices (large laptops and desktops)
      '2xl': '1536px', // 2x extra large devices (large monitors)
      '3xl': '1920px', // 3x extra large devices (full HD monitors)
    },
    extend: {},
  },
  plugins: [],
}

