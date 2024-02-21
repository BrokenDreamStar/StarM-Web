<script setup>
import { ref } from 'vue'


const imgUrl = url => {
  return new URL(`../assets/icon/logo/${url}`, import.meta.url)
}

const aboutCard = ref([
  { url: imgUrl("HTML.svg"), title: "HTML5", description: "超文本标记语言" },
  { url: imgUrl("CSS.svg"), title: "CSS3", description: "层叠样式表" },
  { url: imgUrl("JS.svg"), title: "JS", description: "编程语言" },
  { url: imgUrl("Vue.svg"), title: "Vue3", description: "Web框架" },
  { url: imgUrl("Vite.svg"), title: "Vite", description: "Web构建工具" },
  { url: imgUrl("element-plus.png"), title: "Element Plus", description: "UI框架" },
  { url: imgUrl("VSCode.svg"), title: "VSCode", description: "IDE" },
  { url: imgUrl("nginx.svg"), title: "Nginx", description: "Web服务器" },
  { url: imgUrl("docker.svg"), title: "docker", description: "容器引擎" },
  { url: imgUrl("node.svg"), title: "Node", description: "运行环境" },
  { url: imgUrl("npm.svg"), title: "npm", description: "包管理器" },
  { url: imgUrl("pnpm.svg"), title: "pnpm", description: "包管理器" },
  { url: imgUrl("less.svg"), title: "less", description: "CSS预处理器" },
  { url: imgUrl("lottie.png"), title: "Lottie", description: "动效" },
  { url: imgUrl("GoogleFont.svg"), title: "GoogleFont", description: "字体" },
  { url: imgUrl("github.svg"), title: "Github", description: "代码托管及部署" },
  // {  url: imgUrl(""), title: "", description: "" },
])

</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="about">
      <div class="about-container">
        <div class="about-container-title">
          <div>
            <img src="../assets/icon/cmd.svg" alt="">
            <span>本站使用技术及工具</span>
          </div>
        </div>
        <el-row :gutter="20" class="about-card-container">
          <el-col v-for="item in aboutCard" :key="item.id" :xs="12" :sm="12" :md="6" :lg="4" :xl="4">
            <a class="about-card">
              <div class="about-card-img">
                <img :src="item.url" alt="">
              </div>
              <div class="about-card-text">
                <span class="about-card-title">{{ item.title }}</span>
                <span class="about-card-description">{{ item.description }}</span>
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

.about {
  width: 70vw;
  margin: 0 auto;

  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: fit-content;
    min-height: 15rem;
    margin-top: 2.5rem;
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem .625rem 3.125rem;

    .about-container-title {
      position: absolute;
      top: -1.25rem;
      left: 1.25rem;
      width: fit-content;
      min-width: 3.125rem;
      height: 2.5rem;
      background-color: #00B3FF;
      border-radius: .5rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0.3125rem 0.5rem;

      div {
        margin: 0 .625rem 0 .625rem;

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
          margin-right: .1875rem;
        }
      }
    }

    .about-card-container {
      width: 100%;
      margin: 1.5625rem 0 1.5625rem 0;

      .el-col {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .625rem 0 .625rem 0;

        .about-card {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 10.625rem;
          height: 3.125rem;
          background-color: #fff;
          border-radius: .5rem;
          box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
          cursor: pointer;

          .about-card-img {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.125rem;
            height: 3.125rem;
            margin-right: .1875rem;

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
              font-size: clamp(1rem, 1vw, 1.125rem);
              font-weight: 600;
            }

            .about-card-description {
              font-size: clamp(.4375rem, 1vw, .9375rem);
              color: #909399;
            }
          }
        }
      }
    }
  }
}
</style>
