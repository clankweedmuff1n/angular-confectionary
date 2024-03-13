/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "first-card": "200px 5px 5px 5px",
        "second-card": "5px 200px 5px 5px",
        "third-card": "5px 5px 5px 200px",
        "fourth-card": "5px 5px 200px 5px",
      },
      boxShadow: {
        '3xl': '6px 6px 18px 0px rgba(0,0,0,0.3)',
      },
      colors: {
        "light-main": "white",
        "menu-green": "rgba(var(--menu-green), 1)",
        "menu-beige": "rgba(var(--menu-beige), 1)",
        "menu-brown": "rgba(var(--menu-brown), 1)",
        "menu-brown-light": "rgba(var(--menu-brown), .7)",
        "menu-beige-light": "rgba(var(--menu-beige-light), 1)",
        "menu-beige-dark": "rgba(var(--menu-beige-dark), 1)",
      },
    },
  },
  plugins: [],
}

