/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxxs: "378px",
      xxs: "424px",
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};

export default tailwindConfig;
