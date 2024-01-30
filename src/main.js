import './style/base.css'
import 'element-plus/theme-chalk/display.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)

app.use(router, Vue3Lottie)
app.mount('#app')
