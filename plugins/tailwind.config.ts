import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { fontFamily, generateTextUtils, screens } from './dls/utils'
import { lightColors } from './dls/colors'
const config:Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily,
      screens,
      colors: lightColors,
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '0',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newTextUtilities = generateTextUtils()
      addUtilities(newTextUtilities)
    }),
  ],
}
export default config
