<script setup>

</script>

<template>
  <header>
    <div class="home-bg">
      <div class="title">
        <h1>StarM Team</h1>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
//头部背景
.home-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(125deg, #008DFF, #00B3FF, #00D0ED, #00E5BA, #8FF388, #F9F871);
  background-size: 400%;
  //背景渐变动画
  animation: bgmove 15s infinite;

  @keyframes bgmove {
    0% {
      background-position: 0% 50%;
    }

    25% {
      background-position: 50% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    75% {
      background-position: 50% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  //标题
  .title {

    //字体
    @font-face {
      font-family: 'LuckiestGuy';
      src: url(../assets/font/LuckiestGuy-Regular.ttf);
    }

    //引入谷歌字体库
    // @import url('https://fonts.font.im/css?family=Luckiest+Guy');

    h1 {
      font-size: 20vmin;
      font-family: 'LuckiestGuy';
      color: #e6e6e6;
      text-align: center;
      font-weight: 300;
      text-shadow: 1px -1px #fff, -1px 1px #999999, -10px 10px 5px #80808080;
    }
  }

}

//响应式布局样式
@media (max-width: 768px) {
  .home-bg {
    height: 60vh;
  }
}
</style>