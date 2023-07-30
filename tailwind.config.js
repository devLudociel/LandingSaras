/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}","./main.jsx","./index.html","./App.jsx"],
  theme: {
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... };

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... };
    },
    extend: {},
  },
  plugins: [],
}

