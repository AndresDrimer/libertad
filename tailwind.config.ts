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
          "100%": {transform: "translateX(-250%)" }
        }
      },
      animation: {
        "useSlideshow": "slideshow 8s linear infinite"
      }
    },
  },
  plugins: [],
}
export default config
