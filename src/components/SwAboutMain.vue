<script setup>
import { ref } from 'vue'

const imgUrl = url => {
  return new URL(`../assets/icon/logo/${url}`, import.meta.url)
}

const aboutCard = ref([
  { url: "VSCode.svg", href: "https://code.visualstudio.com/", title: "VSCode", description: "IDE" },
  { url: "HTML.svg", href: "https://developer.mozilla.org/zh-CN/docs/Web/HTML", title: "HTML5", description: "超文本标记语言" },
  { url: "CSS.svg", href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS", title: "CSS3", description: "层叠样式表" },
  { url: "JS.svg", href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript", title: "JavaScript", description: "编程语言" },
  { url: "Vue.svg", href: "https://cn.vuejs.org/", title: "Vue3", description: "Web框架" },
  { url: "Vue.svg", href: "https://router.vuejs.org/zh/", title: "VueRouter", description: "Vue路由" },
  { url: "Vite.svg", href: "https://cn.vitejs.dev/", title: "Vite", description: "Web构建工具" },
  { url: "element-plus.png", href: "https://element-plus.org/zh-CN/", title: "Element Plus", description: "UI框架" },
  { url: "eslint.svg", href: "https://eslint.org/", title: "ESLint", description: "JS代码规范" },
  { url: "less.svg", href: "https://less.bootcss.com/", title: "less", description: "CSS预处理器" },
  { url: "lottie.png", href: "https://lottiefiles.com/", title: "Lottie", description: "动效" },
  { url: "useanimations.svg", href: "https://useanimations.com/", title: "useAnimations", description: "图标动画" },
  { url: "iconfont.svg", href: "https://www.iconfont.cn/", title: "iconfont", description: "图标" },
  { url: "GoogleFont.svg", href: "https://www.googlefonts.cn/", title: "GoogleFontAPI", description: "字体" },
  { url: "nginx.svg", href: "https://www.nginx.com/", title: "Nginx", description: "Web服务器" },
  { url: "docker.svg", href: "https://www.docker.com/", title: "docker", description: "容器引擎" },
  { url: "node.svg", href: "https://nodejs.org/", title: "Node", description: "运行环境" },
  { url: "npm.svg", href: "https://www.npmjs.com/", title: "npm", description: "包管理器" },
  { url: "pnpm.svg", href: "https://pnpm.io/", title: "pnpm", description: "包管理器" },
  { url: "github.svg", href: "https://github.com/", title: "Github", description: "代码托管及部署" },
  { url: "Git.svg", href: "https://git-scm.com/", title: "Git", description: "代码管理" },
  { url: "gemini.svg", href: "https://ai.google.dev/", title: "Gemini Pro", description: "Google Ai" },
])

</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="about">
      <!-- 关于StarM Team -->
      <div class="about-container">
        <div class="about-container-title">
          <div>
            <img src="../assets/icon/about.svg" alt="">
            <span>关于StarM Team</span>
          </div>
        </div>
        <el-row class="about-card-container about-starm">
          <el-col :span="8" class="img">
            <img src="../assets/logo/logo.svg" alt="">
          </el-col>
          <el-col :span="16" class="text">
            <p>StarM Team只是我一时兴起建立的一个名义上的个人工作室 成立于2021年7月18日</p>
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
            <img src="../assets/icon/cmd.svg" alt="">
            <span>本站使用技术及工具</span>
          </div>
        </div>
        <el-row :gutter="20" class="about-card-container">
          <el-col v-for="item in aboutCard" :key="item.id" :xs="12" :sm="12" :md="8" :lg="6" :xl="4"
            class="about-card-col">
            <a :href="item.href" target="_blank" class="about-card">
              <div class="about-card-img">
                <img :src="imgUrl(item.url)" alt="">
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
      -webkit-user-select: none;
      user-select: none;

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
        margin: .9375rem 0;

        .about-card {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-width: 11.25rem;
          height: 3.125rem;
          // background-color: #fff;
          // border-radius: .5rem;
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
              font-size: 1.0625rem;
              font-weight: 600;
            }

            .about-card-description {
              font-size: .9375rem;
              color: rgb(127, 129, 132);
            }
          }
        }
      }
    }
  }
}

// 响应式布局设置
@media (max-width: 768px) {
  .about {
    width: 100vw;

    .about-container {
      .about-starm {
        .text {
          font-size: .75rem;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .about {
    .about-container {
      .about-starm {
        .text {
          font-size: .875rem;
        }
      }
    }
  }
}
</style>
