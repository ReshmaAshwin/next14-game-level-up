import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold-light': '#fff8e1', // Light gold
        'gold': '#FFD700',       // Standard gold
        'gold-dark': '#ffb300',  // Darker shade of gold
      },
      backgroundImage: theme => ({
        'gold-gradient': 'linear-gradient(90deg, #fff8e1, #FFD700, #ffb300)',
      }),
    },
  },
  plugins: [],
};
export default config;
