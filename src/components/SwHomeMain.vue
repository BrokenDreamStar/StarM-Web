<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '../assets/animations/loadingV2.json'

const imgUrl = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url)
}

const card = ref([
  { pageUrl: "/downloads", url: "TRCStudioInterior.jpg", title: "红色创意内服", xs: 24, sm: 24, md: 24, lg: 16 },
  { pageUrl: "/trc", url: "TRCStudioLobby.jpg", title: "红色创意服务器", xs: 24, sm: 24, md: 24, lg: 8 },
  { pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 },
  { pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 },
  { pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 },
])
</script>

<template>
  <main>
    <div class="home-main">
      <el-row :gutter="20">
        <el-col v-for="item in card" :key="item.id" :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg">
          <router-link :to="item.pageUrl" v-if="item.title !== '画饼中'"
            :style="{ backgroundImage: `url(${imgUrl(item.url)})` }">
            <div class="introduce">
              {{ item.title }}
            </div>
          </router-link>
          <router-link to="/" v-else class="pie">
            <div>
              <Vue3Lottie :animationData="AstronautJSON" :height="60" :width="60" :speed="1" :autoPlay="true"
                :loop="true" />
              <h3>{{ item.title }}</h3>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </main>
</template>

<style lang="less" scoped>
.home-main {
  width: 76vw;
  margin: 0 auto;

  .el-row {
    margin-bottom: 1.25rem;

    .el-col a {
      display: block;
      position: relative;
      height: 23.75rem;
      border-radius: .9375rem;
      overflow: hidden;
      margin-bottom: 20px;
      background: #fff no-repeat center/cover;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .el-col a:hover .introduce {
      bottom: 0;
    }

    .introduce {
      position: absolute;
      bottom: -6.25rem;
      width: 100%;
      height: 6.25rem;
      background-color: rgba(255, 255, 255, .6);
      backdrop-filter: blur(.625rem);
      text-align: center;
      transition: all .3s;
    }

    .pie {
      position: relative;

      div {
        position: absolute;
        left: 50%;
        top: 48%;
        transform: translate(-50%, -50%);

        h3 {
          margin-top: 100px;
        }
      }
    }
  }
}

@media (max-width:992px) {
  .home-main {
    .el-row {
      .el-col a {
        min-height: 13.75rem;
      }
    }
  }
}

// @media (max-width:1200px) {
//   .home-main {
//     .el-row {
//       .el-col a {
//         max-height: 10rem ;
//       }
//     }
//   }
// }
</style>