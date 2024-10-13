import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verydark_heuristic: "#212222",
        dark_heuristic: "#2F3030",
        blue_heuristic: "#546382",
        yellow_heuristic: "#F4F1D0",
        


        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
