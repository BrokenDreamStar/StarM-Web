<script setup>
import { RouterLink } from 'vue-router'
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '../assets/animations/loadingV2.json'
</script>

<template>
  <main>
    <div class="home-main">
      <el-row :gutter="20" type="flex">
        <el-col :xs="24" :sm="24" :md="24" :lg="16">
          <router-link to="/" class="mc">
          </router-link>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8">
          <router-link to="/" class="trc">

          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="20" type="flex">
        <el-col :xs="24" :sm="12" :md="8" :lg="8">
          <router-link to="/" class="pie">
            <div>
              <Vue3Lottie :animationData="AstronautJSON" :height="60" :width="60" :speed="1" :autoPlay="true"
                :loop="true" />
              <h3>画饼中...</h3>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8">
          <router-link to="/" class="pie">
            <div>
              <Vue3Lottie :animationData="AstronautJSON" :height="60" :width="60" :speed="1" :autoPlay="true"
                :loop="true" />
              <h3>画饼中...</h3>
            </div>
          </router-link>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8">
          <router-link to="/" class="pie">
            <div>
              <Vue3Lottie :animationData="AstronautJSON" :height="60" :width="60" :speed="1" :autoPlay="true"
                :loop="true" />
              <h3>画饼中...</h3>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </main>
</template>

<style lang="less" scoped>
main {

  .home-main {
    width: 80%;
    margin: 0 auto;

    .el-row {
      margin-bottom: 1.25rem;

      .el-col a {
        display: block;
        height: 23.75rem;
        border-radius: .9375rem;
        background-color: #fff;
      }

      // .el-col a:hover {

      // }


      .mc {
        background: url(../assets/images/home-bg.png) no-repeat center/cover;

      }

      .trc {
        background: url(../assets/images/TRCStudioLobby.png) no-repeat center/cover;
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
}
</style>