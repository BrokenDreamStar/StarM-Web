import { createRouter, createWebHashHistory } from 'vue-router'
import SwHome from '../views/SwHome.vue'
import SwAbout from '../views/SwAbout.vue'
import SwDownload from '../views/SwDownload.vue'
import SwGenshin from '../views/SwGenshin.vue'
import SwDt from '../views/SwDt.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SwHome
    },
    {
      path: '/about',
      name: 'about',
      component: SwAbout
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: SwDownload
    },
    {
      path: '/genshin',
      name: 'genshin',
      component: SwGenshin
    },
    {
      path: '/dt',
      name: 'dt',
      component: SwDt
    },
  ]
})

export default router