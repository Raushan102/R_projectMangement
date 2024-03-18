/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust path to your components
  theme: {
    extend: {
      fontFamily: {
        recursive: {
          src: ['"Recursive"', "sans-serif"]
        }
      },
     
    },
  },
  plugins: []
}


