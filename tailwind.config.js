/** @type {import('tailwindcss').Config} */

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
      ms: "720px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};

export default tailwindConfig;
