import "@/style/initialize.css"
import "element-plus/theme-chalk/display.css"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

//根据不同环境改变请求地址
if (import.meta.env.DEV) {
	axios.defaults.baseURL = "http://127.0.0.1:3000"
} else {
	axios.defaults.baseURL = "https://starm.team:3000"
}

const app = createApp(App)

app.use(router)
app.mount("#app")
app.config.globalProperties.$https = axios
