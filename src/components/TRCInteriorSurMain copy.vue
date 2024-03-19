<script setup>
import { ref } from "vue"

const imgUrl = (url) => {
  return new URL(`../assets/images/${url}`, import.meta.url)
}

const carouselImgList = ref([
  { url: imgUrl("全物品.png") },
  { url: imgUrl("博丽神社 (1).png") },
  { url: imgUrl("博丽神社 (2).png") },
  { url: imgUrl("博丽神社 (3).png") },
  { url: imgUrl("基地 (1).png") },
  { url: imgUrl("基地 (2).png") },
])
</script>

<template>
  <main>
    <div class="carousel">
      <el-carousel
        :interval="4000"
        type="card"
        height="400px"
        trigger="click"
        arrow="never"
      >
        <el-carousel-item v-for="item in carouselImgList" :key="item.id">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </main>
</template>

<style lang="less" scoped>
main {
  margin-top: 2.1875rem;

  .carousel {
    width: 76vw;
    margin: 0 auto;

    .el-carousel {
      height: 20rem;

      .el-carousel__item {
        height: 20rem;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
