import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import jaJP from '@/locales/ja-JP.json'
import type { MessageSchema, DefineNumberFormat, DefineDateTimeFormat } from '@/types/i18n'

const i18n = createI18n<
  {
    message: MessageSchema
    datetime: DefineDateTimeFormat
    number: DefineNumberFormat
  },
  'en-US' | 'ja-JP'
>({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en-US',
  fallbackLocale: 'en-US',
  globalInjection: true,
  messages: {
    'en-US': enUS,
    'ja-JP': jaJP
  },
  datetimeFormats: {
    'en-US': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    },
    'ja-JP': {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
    }
  },
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard'
      },
      decimal: {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      percent: {
        style: 'percent',
        useGrouping: false
      }
    },
    'ja-JP': {
      currency: {
        style: 'currency',
        currency: 'JPY',
        useGrouping: true,
        currencyDisplay: 'symbol'
      },
      decimal: {
        style: 'decimal',
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 5
      },
      percent: {
        style: 'percent',
        useGrouping: false
      }
    }
  }
})

export default i18n
