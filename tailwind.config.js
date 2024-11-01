/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mi-color-personalizado': '#021520',
        'mi-otrocolor-personalizado': '#F2B705',
        'mi-tercer-personalizado': '#0A2F45',
        'mi-cuarto-personalizado': '#010B13',
        'mi-sexto-personalizado': '#399D4C',
        'mi-septimo-personalizado': '#031825',
      },
    },
  },
  plugins: [],
};
