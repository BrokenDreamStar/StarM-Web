<script setup>
import { ref } from 'vue'

const imgUrl = (url) => {
  return new URL(`../assets/icon/${url}`, import.meta.url)
}
const featureList = ref([
  { url: "cpu.svg", title: "高性能服务器", text: "搭载intel core i9-9900k(极为落后)", xs: 24, sm: 24, md: 8, lg: 8 },
  { url: "heart.svg", title: "温馨社区", text: "与其他玩家讨论游戏动漫编程生活学习等话题", xs: 24, sm: 24, md: 8, lg: 8 },
  { url: "bird.svg", title: "全是鸽子", text: "玩家xxx上次上线的时间是365天前", xs: 24, sm: 24, md: 8, lg: 8 },
])
</script>

<template>
  <main>
    <el-row>
      <el-col v-for="item in featureList" :key="item.id" :xs="item.xs" :sm="item.sm" :md="item.md" :lg="item.lg">
        <div>
          <img :src="imgUrl(item.url)" alt="">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </el-col>
    </el-row>
  </main>
</template>

<style lang="less" scoped>
main {
  width: 100%;
  background-color: #fff;

  .el-row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: fit-content;
    margin: 0 auto;


    .el-col {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 2.5rem 0 2.5rem 0;

      img {
        width: 5rem;
      }
    }
  }
}
</style>