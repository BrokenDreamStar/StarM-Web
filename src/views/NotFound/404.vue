<script setup>
const goBack = () => {
  window.history.back()
}
</script>

<template>
  <div>
    <h2>404</h2>
    <p>螃蟹熟了</p>
    <button @click="goBack">点击返回上一页</button>
  </div>
</template>

<style lang="less" scoped>
div {
  margin-top: 6.25rem;
  text-align: center;

  h2 {
    font-size: 9.375rem;
  }

  p {
    color: #f56c6c;
    font-size: 4.375rem;
  }

  button {
    margin-top: 0.625rem;
    background: none;
    font-size: 2.5rem;
    color: #73767a;
    border: none;
  }
}
</style>
