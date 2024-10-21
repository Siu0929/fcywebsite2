import daisyui from "daisyui";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '700px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["black"],
  },
};

