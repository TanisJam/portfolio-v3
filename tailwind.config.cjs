module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        retro_light: "#B9B99D",
        retro_white: "#C4C4C4",
        retro_dark: "#242120",
        retro_red: "#C14530",
        retro_green: "#66964F",
        retro_blue: "#3D638C",
      },
      keyframes: {
        slideInOut: {
          "0%": { opacity: 0, transform: "translateY(0%)" },
          "40%": { opacity: 1, transform: "translateY(-50%)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
      },
      animation: {
        slideIn: "slideInOut .5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
