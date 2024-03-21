<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from 'vue-router'
import axios from "axios"

const imgUrl = (url) => {
  return new URL(`/src/assets/icon/logo/${url}`, import.meta.url)
}

const aboutPageData = ref([])

const router = useRouter()

const isLoading = ref(false)

const loadingTimer = () => {
  const loading = setTimeout(() => {
    if (aboutPageData.value.length !== 0) {
      isLoading.value = false
      clearTimeout(loading)
    }
  }, 800)
}

onMounted(async () => {
  try {
    const storedData = sessionStorage.getItem("aboutPageData")
    if (storedData) {
      aboutPageData.value = JSON.parse(storedData)
    } else {
      isLoading.value = true
      const res = await axios("http://127.0.0.1:3000/about")
      aboutPageData.value = res.data
      sessionStorage.setItem("aboutPageData", JSON.stringify(res.data))
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
    <div class="about" v-if="!isLoading">
      <!-- 关于StarM Team -->
      <div class="about-container">
        <div class="about-container-title">
          <div>
            <img src="/src/assets/icon/about.svg" alt="" />
            <span>关于StarM Team</span>
          </div>
        </div>
        <el-row class="about-card-container about-starm">
          <el-col :span="8" class="img">
            <img src="/src/assets/logo/logo.svg" alt="" />
          </el-col>
          <el-col :span="16" class="text">
            <p>
              StarM Team只是我一时兴起建立的一个名义上的个人工作室
              成立于2021年7月18日
            </p>
            <p>其名称也只是BrokenDream_Star (碎梦星尘Star) 这个名字的缩写</p>
            <p>S 碎的拼音首字母 M 梦的拼音首字母 Star 星</p>
            <del>说是Team 但其实只有我一个人</del>
          </el-col>
        </el-row>
      </div>
      <!-- 本站使用技术及工具 -->
      <div class="about-container">
        <div class="about-container-title">
          <div>
            <img src="/src/assets/icon/cmd.svg" alt="" />
            <span>本站使用技术及工具</span>
          </div>
        </div>
        <el-row :gutter="20" class="about-card-container">
          <el-col v-for="item in aboutPageData" :key="item.id" :xs="12" :sm="12" :md="8" :lg="6" :xl="4"
            class="about-card-col">
            <a :href="item.hrefUrl" target="_blank" class="about-card">
              <div class="about-card-img">
                <img :src="imgUrl(item.imgName)" alt="" />
              </div>
              <div class="about-card-text">
                <span class="about-card-title">{{ item.title }}</span>
                <span class="about-card-description">{{
                  item.description
                }}</span>
              </div>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </main>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}

main {
  margin-bottom: 2.5rem;

  .about {
    width: 65vw;
    margin: 0 auto;

    .about-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: fit-content;
      margin-top: 2.5rem;
      background-color: #fff;
      border-radius: 0.5rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.625rem 3.125rem;

      .about-container-title {
        position: absolute;
        top: -1.25rem;
        left: 1.25rem;
        width: fit-content;
        min-width: 3.125rem;
        height: 2.5rem;
        background-color: #00b3ff;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0 0.3125rem 0.5rem;
        -webkit-user-select: none;
        user-select: none;

        div {
          margin: 0 0.625rem 0 0.625rem;

          span {
            color: #fff;
            line-height: 2.5rem;
            text-align: center;
            font-weight: 600;
          }

          img {
            position: relative;
            top: -1px;
            width: 2rem;
            height: 2rem;
            vertical-align: middle;
            margin-right: 0.1875rem;
          }
        }
      }

      .about-starm {
        .img {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 70%;
          }
        }

        .text {
          text-align: left;
        }
      }

      .about-card-container {
        width: 100%;
        margin: 1.5625rem 0 1.5625rem 0;

        .about-card-col {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.9375rem 0;

          .about-card {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            min-width: 11.25rem;
            height: 3.125rem;
            cursor: pointer;

            .about-card-img {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 3.125rem;
              height: 3.125rem;
              margin-right: 0.1875rem;

              img {
                width: 45px;
                height: 45px;
              }
            }

            .about-card-text {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;

              .about-card-title {
                font-size: 1.0625rem;
                font-weight: 600;
              }

              .about-card-description {
                font-size: 0.9375rem;
                color: rgb(127, 129, 132);
              }
            }
          }
        }
      }
    }
  }
}

// 响应式布局设置
@media (max-width: 768px) {
  main {
    .about {
      width: 100vw;

      .about-container {
        .about-starm {
          .text {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  main {
    .about {
      .about-container {
        .about-starm {
          .text {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}
</style>
