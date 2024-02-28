<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="top-box"></div>
  <header>
    <div class="bg">
      <h2 class="title">红色创意内服</h2>
      <router-link to="/404" class="join">加入我们</router-link>
    </div>
  </header>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}

.bg {
  @font-face {
    font-family: "MCFont";
    src: url("../assets/font/MCFontMin.ttf");
  }

  width: 100%;
  height: 100vh;
  min-height: 43.75rem;
  background: url(../assets/images/TRCStudioInterior.jpg) no-repeat center/cover;
  font-family: "MCFont";

  .title {
    transform: translateY(5rem);
    color: #ffffff;
    text-align: center;
    text-shadow: .3125rem .3125rem .375rem rgba(0, 0, 0, 0.5);
    font-size: 4.6875rem;
  }

  .join {
    display: block;
    margin: 0 auto;
    transform: translateY(600px);
    width: 7.8125rem;
    line-height: 2.5rem;
    font-weight: 600;
    color: #fff;
    border: 3px solid #fff;
    border-radius: .75rem;
    text-align: center;
  }
}

// 响应式布局设置
@media (max-width:992px) {
  .bg {
    h2 {
      font-size: 3.75rem;
    }
  }
}
</style>