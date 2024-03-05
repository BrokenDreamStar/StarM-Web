<script setup>
import SwNav from '../components/SwNav.vue'
import TRCInteriorSurHeader from '../components/TRCInteriorSurHeader.vue'
import TRCInteriorSurMain from '../components/TRCInteriorSurMain.vue'
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
  <SwNav></SwNav>
  <TRCInteriorSurHeader></TRCInteriorSurHeader>
  <TRCInteriorSurMain></TRCInteriorSurMain>
</template>

<style></style>