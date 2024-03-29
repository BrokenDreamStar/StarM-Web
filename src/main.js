import "@/style/initialize.css"
import "element-plus/theme-chalk/display.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

axios.defaults.baseURL = "https://starm.team:3000"

const app = createApp(App)

app.use(router)
app.mount("#app")
app.config.globalProperties.$https = axios
