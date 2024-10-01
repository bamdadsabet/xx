import { createVuetify } from 'vuetify'
import { aliases, phosphor } from './icons'
import { lightColors } from './colors'
const vuetify = createVuetify({
  defaults: {
    global: {
      ripple: false,
      flat: true,
    },
    VTextField: {
      variant: 'outlined',
      class: 'mb-3',
    },
    VSelect: {
      variant: 'outlined',
      closableChips: true,
      class: 'mb-3',
    },
    VFileInput: {
      style: 'display: none',
    },
  },
  icons: {
    defaultSet: 'phosphor',
    aliases,
    sets: { phosphor },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: lightColors,
        variables: {
          'font-family': 'Inter',
        },
      },
    },
  },
})
export default vuetify
