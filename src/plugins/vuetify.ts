import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { en } from 'vuetify/locale'
import { LightTheme } from '@/theme/LightTheme'
import { DarkTheme } from '@/theme/DarkTheme'

import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: LightTheme,
      dark: DarkTheme
    }
  },
  defaults: {
    VAlert: {
      density: 'comfortable',
      VBtn: {
        color: undefined
      }
    },
    VAvatar: {
      // ℹ️ Remove after next release
      variant: 'flat'
    },
    VBadge: {
      // set v-badge default color to primary
      color: 'primary'
    },
    VBtn: {
      // set v-btn default color to primary
      color: 'primary'
    },
    VChip: {
      elevation: 0,
      density: 'comfortable'
    },
    VList: {
      VListItem: {
        color: 'primary'
      }
    },
    VPagination: {
      density: 'compact'
    },
    VTabs: {
      // set v-tabs default color to primary
      color: 'primary',
      VSlideGroup: {
        showArrows: true
      }
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top'
    },
    VCheckboxBtn: {
      color: 'primary'
    },
    VCheckbox: {
      // set v-checkbox default color to primary
      color: 'primary',
      density: 'comfortable',
      hideDetails: 'auto'
    },
    VRadioGroup: {
      color: 'primary',
      density: 'comfortable',
      hideDetails: 'auto'
    },
    VRadio: {
      density: 'comfortable',
      hideDetails: 'auto'
    },
    VSelect: {
      variant: 'outlined',
      color: 'primary',
      hideDetails: 'auto'
    },
    VRangeSlider: {
      // set v-range-slider default color to primary
      thumbSize: 14,
      color: 'primary',
      density: 'comfortable',
      thumbLabel: true,
      hideDetails: 'auto'
    },
    VRating: {
      // set v-rating default color to primary
      color: 'rgba(var(--v-theme-on-background),0.22)',
      activeColor: 'warning'
    },
    VProgressCircular: {
      // set v-progress-circular default color to primary
      color: 'primary'
    },
    VSlider: {
      // set v-slider default color to primary
      thumbSize: 14,
      color: 'primary',
      hideDetails: 'auto'
    },
    VTextField: {
      variant: 'outlined',
      color: 'primary',
      hideDetails: 'auto'
    },
    VCombobox: {
      variant: 'outlined',
      color: 'primary',
      hideDetails: 'auto'
    },
    VFileInput: {
      variant: 'outlined',
      color: 'primary',
      hideDetails: 'auto'
    },
    VTextarea: {
      variant: 'outlined',
      density: 'comfortable',
      color: 'primary',
      hideDetails: 'auto'
    },
    VSwitch: {
      // set v-switch default color to primary
      color: 'primary',
      hideDetails: 'auto'
    }
  }
})
