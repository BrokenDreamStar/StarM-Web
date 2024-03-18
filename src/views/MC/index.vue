<script setup>
// import { RouterView } from 'vue-router';
import { ref } from 'vue'
const downloadsMCPageData = ref([
  { subversion: '1.7.10' },
])
</script>

<template>
  <div class="top-box"></div>
  <main>
    <div class="container">
      <h2 class="title">下载由StarM Team制作的MineCraft客户端</h2>
      <div class="card-container">
        <div class="card" v-for="item in downloadsMCPageData" :key="item.id">
          {{ item.subversion }}
        </div>
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

  .container {

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
        min-width: 14.375rem;
        height: 20.625rem;
        background-color: #fff;
        margin: 1.25rem;
        border-radius: .625rem;
        box-shadow: 0 2px 8px rgba(57, 76, 96, .15), 0 0 0 1px rgba(68, 92, 116, .02);
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