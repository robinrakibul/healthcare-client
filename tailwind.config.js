module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        healthcareTheme: {
          primary: "#C4DDFF",
          secondary: "#7FB5FF",
          accent: "#001D6E",
          neutral: "#FEE2C5",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}