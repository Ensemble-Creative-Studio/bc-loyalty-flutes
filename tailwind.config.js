/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "92px": [
          "9.2rem",
          {
            lineHeight: "9.3rem",
            fontWeight: "300",
            letterSpacing: "-0.02em;",
          },
        ],

        "63px": [
          "6.3rem",
          {
            lineHeight: "101%",
            fontWeight: "500",
            letterSpacing:'-0.01em'
          },
        ],
        "48px": [
          "4.8rem",
          {
            lineHeight: "135%",
            fontWeight: "100",
          },
        ],
        "36px": [
          "3.6rem",
          {
            lineHeight: "102%",
            fontWeight: "400",
            letterSpacing:'-0.01em'
          },
        ],
        "27px": [
          "2.7rem",
          {
            lineHeight: "150%",
            fontWeight: "200",
            letterSpacing:'0.01em'
          },
        ],
        "20px": [
          "2rem",
          {
            lineHeight: "150%",
            fontWeight: "300",
          },
        ],
        "20px-bold-narrow": [
          "2rem",
          {
            lineHeight: "115%",
            fontWeight: "500",
          },
        ],
        "18px": [
          "1.8rem",
          {
            lineHeight: "145%",
            fontWeight: "300",
          },
        ],
        "16px": [
          "1.6rem",
          {
            lineHeight: "130%",
            fontWeight: "300",
            letterSpacing:'-0.01em'
          },
        ],
        "15px": [
          "1.5rem",
          {
            lineHeight: "90%",
            fontWeight: "300",
            letterSpacing: "0.06em",
          },
        ],
        
      },
      colors: {
        'light-grey': '#F6F3EF',
        "soft-black": "#1A1A19",
        "soft-white": "#FCFBF8",
        "opacity-white": "#CDC9C1",
        "soft-grey": "#E9E7E2",
        "mid-grey": "#726F6A",
        "soft-black-text": "#32312F",
        "spec-black": "#13181F",
      "bronze": "#F7A674",
      },
    },
  },
  plugins: [],
};
