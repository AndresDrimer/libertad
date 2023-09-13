import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:{
        slideshow: {
          "0%": {transform: "translateX(0%)" },
          "100%": {transform: "translateX(-240%)" },
        },
        slideshowMd: {
          "0%": {transform: "translateX(0%)" },
          "100%": {transform: "translateX(-160%)" },
        },
        slideshowXl: {
          "0%": {transform: "translateX(0%)" },
          "100%": {transform: "translateX(-60%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
      },
      animation: {
        "useSlideshow": "slideshow 10s linear infinite",
        "useSlideShowMd": "slideshowMd 14s linear infinite",
        "useSlideShowXl": "slideshowXl 30s linear infinite",
        "useWiggle": "wiggle 1s ease-in-out infinite"
      },
    },
  },
  variants: {
    extend: {
      translate: ["responsive", "hover"],
    },
  },
  plugins: [],
}
export default config
