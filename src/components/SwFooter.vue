<script setup>
import { ref } from 'vue'

const data = new Date()
const year = ref(data.getFullYear())
</script>

<template>
  <footer>
    <p>Copyright ©2021-{{ year }} StarM Team</p>
    <p>Copyright ©2015-{{ year }} 红色创意</p>
  </footer>
</template>

<style lang="less" scoped>
footer {
  color: #fff;
  text-align: center;
  width: 100%;
  background-color: #909399;

  a {
    color: #fff;
  }
}
</style>