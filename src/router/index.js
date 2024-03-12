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
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "/about",
          component: () => import("@/views/About/index.vue"),
        },
        {
          path: "/downloads",
          component: () => import("@/views/Downloads/index.vue"),
          children: [
            {
              path: "/mc/:version",
              component: () => import("@/views/MC/index.vue"),
            },
          ],
        },
        {
          path: "/trcinteriorsur",
          component: () => import("@/views/TRCInteriorSur/index.vue"),
        },
        {
          path: "/genshin",
          component: () => import("@/views/Genshin/index.vue"),
        },
        {
          path: "/dt",
          component: () => import("@/views/DT/index.vue"),
        },
        {
          path: "/jumplink",
          component: () => import("@/views/jumpTRC.vue"),
        },
      ],
    },
  ],
});

export default router;
