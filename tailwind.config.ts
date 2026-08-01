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
        bedrock: "#14171C",
        granite: "#2B2F36",
        brass: "#C9A24B",
        forest: "#24402F",
        mist: "#EDE9DF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      transitionDuration: {
        micro: "180ms",
      },
      transitionTimingFunction: {
        micro: "ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
