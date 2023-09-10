import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import '@/assets/scss/style.scss'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vuetify)
app.use(PerfectScrollbar)

app.mount('#app')
