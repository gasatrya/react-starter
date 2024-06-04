import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: [
          '"Inter", sans-serif',
          {
            fontFeatureSettings: '"liga" 1, "calt" 1'
          }
        ]
      }
    }
  },
  plugins: []
} satisfies Config
