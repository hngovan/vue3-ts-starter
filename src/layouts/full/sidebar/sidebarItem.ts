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
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/'
  },
  { header: 'auth' },
  {
    title: 'Login',
    icon: 'mdi-login',
    to: '/auth/login'
  },
  {
    title: 'Register',
    icon: 'mdi-account-plus',
    to: '/auth/register'
  }
]

export default sidebarItem
