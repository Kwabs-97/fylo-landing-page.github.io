/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
        Sans: ["Sans"],
      },
      height: {
        "50vh": "50vh",
      },
      width: {
        "50vh": "50vh",
      },
      colors: {
        intro: "#1C2431",
        main: "#181F2A",
        testimonial: "#202A3C",
        cyan: "#65E2D9",
        blue: "#339ECC",
        footer: "#0B1523",
      },
      backgroundImage: {
        "big-curvy-mobile": "url('../images/bg-curvy-mobile.svg')",
        "big-curvy-desktop": "url('../images/bg-curvy-desktop.svg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200%": "300%",
        16: "4rem",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      spacing: {
        1200: "1000px",
        69: "69%",
      },
      animation: {
        fadeInLeft: "fadeInLeft 2s both",
        fadeInRight: "fadeInRight 2s both",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
