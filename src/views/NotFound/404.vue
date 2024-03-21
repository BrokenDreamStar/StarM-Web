<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h2>404</h2>
    <p>螃蟹熟了</p>
    <router-link to="/">点击返回首页</router-link>
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

  a {
    display: block;
    margin-top: 0.625rem;
    background: none;
    font-size: 2.5rem;
    color: #73767a;
    border: none;
  }
}
</style>
