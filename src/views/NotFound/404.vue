<script setup>

const goBack = () => {
  window.history.back()
}

</script>

<template>
  <div>
    <h1>404</h1>
    <h3>土豆熟了</h3>
    <button @click="goBack">点击返回上一页</button>
  </div>
</template>

<style lang="less" scoped>
div {
  margin-top: 6.25rem;
  text-align: center;

  button {
    margin-top: .625rem;
    width: 6.25rem;
    height: 2.5rem;
    border: none;
    background: none;
  }
}
</style>