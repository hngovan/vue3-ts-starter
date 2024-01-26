import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Ref } from 'vue'

/** Config Store */
export const useConfigStore = defineStore('config', () => {
  /** Dark Theme mode */
  const theme: Ref<boolean> = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

  const locale: Ref<string> = ref(window.navigator.languages[0] ?? window.navigator.language)

  /**
   * Toggle Dark/Light mode
   */
  const toggleTheme = () => (theme.value = !theme.value)
  /**
   * Set Locale.
   *
   * @param locale - Locale
   */
  const setLocale = (l: string) => (locale.value = l)

  return { theme, toggleTheme, setLocale }
})
