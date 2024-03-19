<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"

const imgUrl = (url) => {
  return new URL(`/src/assets/icon/minecraft/${url}`, import.meta.url)
}

// const downloadsList = ref([
//   { url: "peony_top.png", version: "1.7", title: "改变世界的更新" },
//   { url: "guardian.png", version: "1.8", title: "缤纷更新" },
//   { url: "spectral_arrow.png", version: "1.9", title: "战斗更新" },
//   { url: "polarbear.png", version: "1.10", title: "霜炙更新" },
//   { url: "map.png", version: "1.11", title: "探险更新" },
//   { url: "white_glazed_terracotta.png", version: "1.12", title: "多彩世界更新" },
//   { url: "trident.png", version: "1.13", title: "水域更新" },
//   { url: "crossbow_arrow.png", version: "1.14", title: "村庄与掠夺" },
//   { url: "bee.png", version: "1.15", title: "嗡嗡蜂群" },
//   { url: "netherite_ingot.png", version: "1.16", title: "下界更新" },
//   { url: "amethyst_cluster.png", version: "1.17", title: "洞穴与山崖(第一部分)" },
//   { url: "cave.png", version: "1.18", title: "洞穴与山崖(第二部分)" },
//   { url: "sculk_sensor.png", version: "1.19", title: "荒野更新" },
//   { url: "camel.png", version: "1.20", title: "足迹与故事" },
//   { url: "minecraft.png", version: "1.21", title: "敬请期待" }
// ])

const downloadsList = ref([
  { url: "peony_top_256x.png", version: "1.7", title: "改变世界的更新" },
  { url: "guardian_256x.png", version: "1.8", title: "缤纷更新" },
  { url: "spectral_arrow_256x.png", version: "1.9", title: "战斗更新" },
  { url: "polarbear_256x.png", version: "1.10", title: "霜炙更新" },
  { url: "map_256x.png", version: "1.11", title: "探险更新" },
  {
    url: "white_glazed_terracotta_256x.png",
    version: "1.12",
    title: "多彩世界更新",
  },
  { url: "trident_256x.png", version: "1.13", title: "水域更新" },
  { url: "crossbow_arrow_256x.png", version: "1.14", title: "村庄与掠夺" },
  { url: "bee_256x.png", version: "1.15", title: "嗡嗡蜂群" },
  { url: "netherite_ingot_256x.png", version: "1.16", title: "下界更新" },
  {
    url: "amethyst_cluster_256x.png",
    version: "1.17",
    title: "洞穴与山崖(第一部分)",
  },
  { url: "cave_256x.png", version: "1.18", title: "洞穴与山崖(第二部分)" },
  { url: "sculk_sensor_256x.png", version: "1.19", title: "荒野更新" },
  { url: "camel_256x.png", version: "1.20", title: "足迹与故事" },
  { url: "minecraft.png", version: "1.21", title: "敬请期待" },
])
</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="downloads">
      <el-row :gutter="20">
        <el-col v-for="item in downloadsList" :key="item.id" :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <router-link :to="`/downloads/mc/${item.version}`">
            <div>
              <img :src="imgUrl(item.url)" alt="" />
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
