import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import jaJP from '@/locales/ja-JP.json'

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof enUS

const i18n = createI18n<[MessageSchema], 'en-US' | 'ja-JP'>({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en-US',
  fallbackLocale: 'en-US', // set fallback locale
  globalInjection: true,
  messages: {
    'en-US': enUS,
    'ja-JP': jaJP
  }
  // something vue-i18n options here ...
})

export default i18n
