<script setup>
// import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '@/assets/animations/loadingV2.json'
const downloadsMCPageData = ref([
  // { subversion: '1.8.9' },
])
</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="container">
      <h2 class="title">下载由StarM Team制作的MineCraft客户端</h2>
      <div class="card-container">
        <div class="card" v-for="item in downloadsMCPageData" :key="item.id">
          <h3>{{ item.subversion }}</h3>
          <div class="text">
            适用于红色创意竞技场和小游戏服
          </div>
          <div class="downloads-btn">
            <ul>
              <li>
                <a href="">
                  <img src="/src/assets/icon/minecraft/grass.png" alt="">
                  安装包下载
                </a>
                <!-- <router-link></router-link> -->
              </li>
              <li>
                <a href="">
                  <img src="/src/assets/icon/minecraft/furnace.png" alt="">
                  完整包下载
                </a>
                <!-- <router-link></router-link> -->
              </li>
              <li>
                <a href="">
                  <img src="/src/assets/icon/minecraft/craft_table.png" alt="">
                </a>
                <!-- <router-link></router-link> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="card pie" v-show="downloadsMCPageData.length === 0">
          <div>
            <Vue3Lottie :animationData="AstronautJSON" :height="60" :width="60" :speed="1" :autoPlay="true"
              :loop="true" />
            <h3>画饼中...</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}

main {
  margin-top: 5rem;

  .container {

    .title {
      text-align: center;
      font-weight: normal;
      margin-bottom: 3.75rem;
    }

    .card-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .card {
        display: flex;
        flex-direction: column;
        min-width: 14.375rem;
        height: 20.625rem;
        background-color: #fff;
        margin: 1.25rem;
        border-radius: .625rem;
        box-shadow: 0 2px 8px rgba(57, 76, 96, .15), 0 0 0 1px rgba(68, 92, 116, .02);

        h3 {
          text-align: center;
          font-size: 1.875rem;
          margin-top: 1.25rem;
        }

        .text {
          flex: 1;
        }

        .downloads-btn {
          ul {
            li {
              display: block;
              width: 80%;
              height: 1.875rem;
              margin: 0 auto;
              margin-bottom: .4375rem;
              background-color: #999;

              a:nth-child(1) {
                display: block;

                img {
                  width: 1.875rem;
                  vertical-align: middle;
                }
              }
            }
          }

        }
      }

      .pie {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
}

@media (max-width: 992px) {
  .container {
    .card-container {
      flex-direction: column;
    }
  }
}
</style>