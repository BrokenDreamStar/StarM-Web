<script setup>
// import { RouterLink } from 'vue-router';
import { ref } from "vue"
import Loading from "@/components/Loading.vue"
import DownloadButton from "@/components/DownloadButton.vue"

const downloadsMCPageData = ref([
  {
    id: 1,
    subversion: "1.8 - 1.8.8",
    isUpdating: true,
    lastUpdated: "undefined",
    introduce: "undefined",
  },
  {
    id: 2,
    subversion: "1.8.9",
    isUpdating: false,
    lastUpdated: "2022/8/3",
    introduce: "适用于红色创意竞技场和小游戏服",
  },
])

const downloadButtonData = ref({ text: "下载 | Download", link: "https://starm.top" })
</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="container">
      <h2 class="title">下载由StarM Team制作的MineCraft客户端</h2>
      <div class="card-container">
        <template v-if="downloadsMCPageData.length !== 0">
          <div class="card" v-for="item in downloadsMCPageData" :key="item.id">
            <h3>{{ item.subversion }}</h3>
            <div class="text">
              <div class="prompt">
                <p v-if="!item.isUpdating">该客户端已停止更新</p>
                <p>上次更新时间:{{ item.lastUpdated }}</p>
              </div>

              <p>{{ item.introduce }}</p>
            </div>
            <div class="downloads-btn">
              <ul>
                <li>
                  <DownloadButton :msg="downloadButtonData.text" :link="downloadButtonData.link"></DownloadButton>
                </li>
              </ul>
            </div>
          </div>
        </template>
        <Loading class="card" v-else></Loading>
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
  display: flex;
  justify-content: center;

  .container {
    margin: 0 auto;

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
        max-width: 14.375rem;
        height: 20.625rem;
        background-color: rgba(255, 255, 255, 0.6);
        -webkit-backdrop-filter: blur(.3125rem);
        backdrop-filter: blur(.3125rem);
        margin: 1.25rem;
        border-radius: 0.625rem;
        box-shadow:
          0 .125rem .5rem rgba(57, 76, 96, 0.15),
          0 0 0 .0625rem rgba(68, 92, 116, 0.02);

        h3 {
          text-align: center;
          font-size: 1.875rem;
          margin-top: 1.25rem;
        }

        .text {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
          font-size: 0.875rem;
          flex: 1;

          .prompt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;
            padding: .5rem;
            background: #fb4040;
            border-radius: .3125rem;

            p {
              display: block;
              color: #fff;
            }
          }

        }

        .downloads-btn {
          ul {
            li {
              display: flex;
              justify-content: center;
              margin-bottom: 1.25rem;
            }
          }
        }
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
