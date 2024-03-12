import { createRouter, createWebHistory } from 'vue-router'
import SwHome from '@/views/SwHome.vue'
import SwAbout from '@/views/SwAbout.vue'
import SwDownloads from '@/views/SwDownloads.vue'
import SwGenshin from '@/views/SwGenshin.vue'
import SwDt from '@/views/SwDt.vue'
import SwMC from '@/views/SwMC.vue';
import TRCInteriorSur from '@/views/TRCInteriorSur.vue'
import JumpTRC from '@/views/JumpTRC.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound/404.vue')
    },
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
      path: '/trcinteriorsur',
      name: 'trcinteriorsur',
      component: TRCInteriorSur
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
      path: '/downloads/mc/:version',
      name: 'SwMC',
      component: SwMC
    },
    {
      path: '/jumplink',
      name: 'jumplink',
      component: JumpTRC
    }
  ]
})

export default router