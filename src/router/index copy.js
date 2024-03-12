import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  //使用History路由模式
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //切换页面不保存页面位置 始终位于顶端
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0 };
    }
  },
  //路由配置 使用动态路由
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFound/404.vue"),
    },
    {
      path: "/",
      component: () => import("@/views/SwHome.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/SwAbout.vue"),
    },
    {
      path: "/trcinteriorsur",
      name: "trcinteriorsur",
      component: () => import("@/views/TRCInteriorSur.vue"),
    },
    {
      path: "/downloads",
      name: "downloads",
      redirect: () => import("@/views/SwDownloads/vue"),
      children: [
        {
          path: "/mc:version",
          component: () => import("@/views/SwMC.vue"),
        },
      ],
    },
    {
      path: "/genshin",
      name: "genshin",
      component: () => import("@/views/SwGenshin.vue"),
    },
    {
      path: "/dt",
      name: "dt",
      component: () => import("@/views/SwDt.vue"),
    },
    {
      path: "/jumplink",
      name: "jumplink",
      component: () => import("@/views/JumpTRC.vue"),
    },
  ],
});

export default router;
