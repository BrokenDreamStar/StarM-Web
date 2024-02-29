<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="top-box"></div>
  <header>
    <div class="bg">
      <div class="container">
        <img src="../assets/logo/TRCStudio_logo.jpg" alt="">
        <div class="text">
          <h2>红色创意内服</h2>
          <p>生电玩法向服务器</p>
          <p>版本:1.18.2-MCDR-Fabric</p>
        </div>
        <div class="btn-container">
          <router-link to="/join" class="btn">加入我们</router-link>
          <router-link to="/downloads" class="btn">客户端下载</router-link>
        </div>
      </div>
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

  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 37.5rem;
  background: url(../assets/images/TRCInteriorSur.png) no-repeat center/cover;
  white-space: nowrap;

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
      display: block;
      margin: 0 auto;
      width: 8.125rem;
      border-radius: 50%;
      text-shadow: .3125rem .3125rem .375rem rgba(0, 0, 0, 0.5);
    }

    .text {
      margin: .9375rem 0 1.25rem 0;
      color: #ffffff;
      text-align: center;
      text-shadow: .3125rem .3125rem .375rem rgba(0, 0, 0, 0.5);

      h2 {
        font-size: 4.0625rem;
        margin-bottom: .9375rem;
        font-family: "MCFont";
      }

      p {
        font-size: 1.125rem;
      }
    }

    .btn-container {
      width: fit-content;
      margin: 0 auto;

      .btn {
        display: inline-block;
        width: 7.8125rem;
        line-height: 2.5rem;
        font-weight: 600;
        color: #fff;
        border: 3px solid #fff;
        border-radius: .75rem;
        text-align: center;
      }

      .btn:nth-child(1) {
        margin-right: .9375rem;
      }
    }
  }

}

.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .1);
  backdrop-filter: blur(.125rem);
}

// 响应式布局设置
@media (max-width:992px) {}
</style>