import type { ThemeDefinition } from 'vuetify'

const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#696CFF',
    'on-primary': '#fff',
    secondary: '#8592A3',
    'on-secondary': '#fff',
    success: '#71DD37',
    'on-success': '#fff',
    info: '#03C3EC',
    'on-info': '#fff',
    warning: '#FFAB00',
    'on-warning': '#fff',
    error: '#FF3E1D',
    background: '#232333',
    'on-background': '#DBDBEB',
    surface: '#2B2C40',
    'on-surface': '#DBDBEB',
    'grey-50': '#2A2E42',
    'grey-100': '#444463',
    'grey-200': '#4A5072',
    'grey-300': '#5E6692',
    'grey-400': '#7983BB',
    'grey-500': '#8692D0',
    'grey-600': '#AAB3DE',
    'grey-700': '#B6BEE3',
    'grey-800': '#CFD3EC',
    'grey-900': '#E7E9F6',
    'perfect-scrollbar-thumb': '#4A5072',
    'skin-bordered-background': '#2b2c40',
    'skin-bordered-surface': '#2b2c40'
  },
  variables: {
    'code-color': '#d400ff',
    'overlay-scrim-background': '#0D0E24',
    'overlay-scrim-opacity': 0.6,
    'border-color': '#DBDBEB',
    'snackbar-background': '#DBDBEB',
    'snackbar-color': '#2B2C40',
    'tooltip-background': '#464A65',
    'tooltip-opacity': 0.9,
    'table-header-background': '#3A3E5B',

    // Shadows
    'shadow-key-umbra-opacity': 'rgba(20, 21, 33, 0.06)',
    'shadow-key-penumbra-opacity': 'rgba(20, 21, 33, 0.04)',
    'shadow-key-ambient-opacity': 'rgba(20, 21, 33, 0.02)'
  }
}
export { DarkTheme }
