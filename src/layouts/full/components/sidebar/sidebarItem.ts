import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
export interface menu {
  header?: string
  title?: string
  icon?: string
  to?: string
  chip?: string
  chipColor?: string
  chipVariant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  chipIcon?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  children?: menu[]
  disabled?: boolean
  type?: string
  subCaption?: string
}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: 'navigation.dashboard',
    icon: 'mdi-view-dashboard',
    to: '/'
  },
  { header: 'auth' },
  {
    title: 'navigation.login',
    icon: 'mdi-login',
    to: '/auth/login'
  },
  {
    title: 'navigation.register',
    icon: 'mdi-account-plus',
    to: '/auth/register'
  },
  { header: 'extra' },
  {
    title: 'navigation.sample_page',
    icon: 'mdi-shape-outline',
    to: '/sample-page'
  }
]

export default computed(() => {
  const { t } = useI18n()
  return sidebarItem.map(item => {
    if (item.title) {
      return {
        ...item,
        title: t(item.title)
      }
    }
    return item
  })
})
