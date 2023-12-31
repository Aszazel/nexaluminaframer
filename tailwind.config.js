/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#eaecf0",
          "300": "rgba(234, 236, 240, 0.34)",
        },
        "neutral-0": "#000",
        "neutral-200": "#edeff5",
        "neutral-800": "#3e4047",
        "neutral-100": "#fff",
        "neutral-80": "#c7c9d1",
        "neutral-40": "#5c6070",
        "neutral-50": "#73778c",
        "neutral-60": "#8f93a3",
        "neutral-70": "#abaeba",
        "neutral-90": "#e3e4e8",
        "neutral-10": "#17181c",
        "gray-4": "#bdbdbd",
        "gray-6": "#f2f2f2",
        "gray-1": "#333",
        silver: {
          "100": "#c0c5d0",
          "200": "rgba(200, 200, 200, 0.5)",
        },
        gray1: {
          "100": "#2c2c2c",
          "200": "#1a1a1a",
          "300": "#090d1f",
          "400": "rgba(255, 255, 255, 0.7)",
          "500": "rgba(0, 0, 0, 0.34)",
        },
        "gray-500": "#667085",
        ghostwhite: {
          "100": "#f8f9fc",
          "200": "#f9f5ff",
        },
        "primary-600": "#7e56d9",
        "pink-50": "#fdf2fa",
        "pink-700": "#c11574",
        darkslateblue: "#363e72",
        slateblue: "#6941c6",
        lavenderblush: "#fff1f3",
        crimson: "#c11048",
        honeydew: "#ecfdf3",
        seagreen: "#037a48",
        aliceblue: {
          "100": "#f0f9ff",
          "200": "#eef4ff",
        },
        darkblue: "#3538cd",
        seashell: "#fff6ed",
        firebrick: "#c4320a",
        steelblue: "#026aa2",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "neutral-30": "#454854",
        "gray-900": "#101828",
      },
      spacing: {},
      fontFamily: {
        "block-quote": "Inter",
        "hk-grotesk-wide": "'HK Grotesk Wide'",
        helvetica: "Helvetica",
        inherit: "inherit",
        roboto: "Roboto",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "6xs": "7px",
        "3xs": "10px",
        "981xl": "1000px",
        "81xl": "100px",
        xl: "20px",
        "10xl": "29px",
      },
    },
    fontSize: {
      "13xl": "32px",
      lg: "18px",
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      base: "16px",
      "21xl": "40px",
      "37xl": "56px",
      "53xl": "72px",
      "45xl": "64px",
      xl: "20px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
