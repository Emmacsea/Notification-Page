/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(1, 90%, 64%)",
          blue: "hsl(219, 85%, 26%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          vlgrayishblue: "hsl(210, 60%, 98%)",
          lgrayishblue: "hsl(211, 68%, 94%)",
          lgrayishblue2: "hsl(205, 33%, 90%)",
          grayishblue: "hsl(219, 14%, 63%)",
          dgrayishblue: "hsl(219, 12%, 42%)",
          vdarkblue: "hsl(224, 21%, 14%)",
        }
      },

      fontfamily: {
        body: ["Plus Jakarta Sans"]
      }
    },
  },
  plugins: [],
}