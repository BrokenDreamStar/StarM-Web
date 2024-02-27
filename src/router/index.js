import { createRouter, createWebHashHistory } from 'vue-router'
// import NotFound from '../views/NotFound/404.vue';
import SwHome from '../views/SwHome.vue'
import SwAbout from '../views/SwAbout.vue'
import SwDownloads from '../views/SwDownloads.vue'
import SwGenshin from '../views/SwGenshin.vue'
import SwDt from '../views/SwDt.vue'
import SwMC from '../views/SwMC.vue';

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
      component: SwDownloads
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
    {
      path: '/downloads/mc/1.7',
      name: '1.7',
      component: SwMC
    }
  ]
})

export default router