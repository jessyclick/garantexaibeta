/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'custom-lg': ['19px', {
          lineHeight: '22.004px',
          fontWeight: '700',
        }],
      },
      // ...existing code...
    },
  },
  plugins: [],
};
