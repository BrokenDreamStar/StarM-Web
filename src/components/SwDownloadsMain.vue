<script setup>
import { ref } from 'vue'

const imgUrl = url => {
  return new URL(`../assets/icon/minecraft/${url}`, import.meta.url)
}

const downloadsList = ref([
  { pageUrl: "downloads/mc/1.7", url: "peony_top.png", version: "1.7", title: "改变世界的更新" },
  { pageUrl: "2", url: "guardian.png", version: "1.8", title: "缤纷更新" },
  { pageUrl: "", url: "spectral_arrow.png", version: "1.9", title: "战斗更新" },
  { pageUrl: "", url: "polarbear.png", version: "1.10", title: "霜炙更新" },
  { pageUrl: "", url: "map.png", version: "1.11", title: "探险更新" },
  { pageUrl: "", url: "white_glazed_terracotta.png", version: "1.12", title: "多彩世界更新" },
  { pageUrl: "", url: "trident.png", version: "1.13", title: "水域更新" },
  { pageUrl: "", url: "crossbow_arrow.png", version: "1.14", title: "村庄与掠夺" },
  { pageUrl: "", url: "bee.png", version: "1.15", title: "嗡嗡蜂群" },
  { pageUrl: "", url: "netherite_ingot.png", version: "1.16", title: "下界更新" },
  { pageUrl: "", url: "amethyst_cluster.png", version: "1.17", title: "洞穴与山崖(第一部分)" },
  { pageUrl: "", url: "cave.png", version: "1.18", title: "洞穴与山崖(第二部分)" },
  { pageUrl: "", url: "sculk_sensor.png", version: "1.19", title: "荒野更新" },
  { pageUrl: "", url: "camel.png", version: "1.20", title: "足迹与故事" },
  { pageUrl: "", url: "minecraft.png", version: "1.21", title: "敬请期待" }
])


</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="downloads">
      <el-row :gutter="20">
        <el-col v-for="item in downloadsList" :key="item.id" :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <router-link :to="item.pageUrl">
            <img :src="imgUrl(item.url)" alt="">
            <p class="version">{{ item.version }}</p>
            <p class="title">{{ item.title }}</p>
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

  .downloads {
    width: 65vw;
    height: fit-content;
    margin: 0 auto;
    background-color: #fff;

    .el-col {
      height: 7.5rem;
      // background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        width: 100%;
        display: block;
        text-align: center;

        img {
          width: 24px;
        }

        .version {
          font-size: 1.125rem;
          font-weight: 700;
        }

        .title {
          font-size: .875rem;
        }
      }
    }
  }
}
</style>