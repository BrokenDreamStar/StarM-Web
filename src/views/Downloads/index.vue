<script setup>
import { ref, onMounted } from "vue"
import { RouterLink, useRouter } from "vue-router"
import axios from "axios";

const imgUrl = (url) => {
  return new URL(`/src/assets/icon/minecraft/${url}`, import.meta.url)
}

const downloadPageData = ref([])

const router = useRouter()
const isLoading = ref(false)

const loadingTimer = () => {
  const loading = setTimeout(() => {
    if (downloadPageData.value.length !== 0) {
      isLoading.value = false
      clearTimeout(loading)
    }
  }, 800)
}

onMounted(async () => {
  try {
    const storedData = sessionStorage.getItem("downloadPageData")
    if (storedData) {
      downloadPageData.value = JSON.parse(storedData)
    } else {
      isLoading.value = true
      const res = await axios("http://127.0.0.1:3000/downloads")
      downloadPageData.value = res.data
      sessionStorage.setItem("downloadPageData", JSON.stringify(res.data))
      loadingTimer()
    }
  } catch (err) {
    if (axios.isAxiosError(err) && err.response.status === 404) {
      router.push({ name: "NotFound" })
    }
  }
})
</script>

<template>
  <div class="top-box"></div>
  <main v-loading.fullscreen.lock="isLoading" element-loading-background="#fff">
    <div class="downloads" v-if="!isLoading">
      <el-row :gutter="20">
        <el-col v-for="item in downloadPageData" :key="item.id" :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <router-link :to="`/downloads/mc/${item.version}`">
            <div>
              <img :src="imgUrl(item.imgName)" alt="" />
              <p class="version">{{ item.version }}</p>
              <p class="title">{{ item.title }}</p>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </main>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}

main {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  .downloads {
    width: 65vw;
    height: fit-content;
    margin: 0 auto;
    background-color: #fff;

    .el-row {
      .el-col {
        height: 7.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 7.5rem;
          width: 100%;
          text-align: center;

          div {
            img {
              width: 2rem;
            }

            .version {
              font-size: 1.125rem;
              font-weight: 700;
            }

            .title {
              font-size: 0.875rem;
            }
          }
        }

        a:hover {
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }
      }
    }
  }
}

// 响应式布局设置
@media (max-width: 992px) {
  main {
    .downloads {
      .el-row {
        .el-col {
          a:hover {
            box-shadow: none;
          }
        }
      }
    }
  }
}
</style>
