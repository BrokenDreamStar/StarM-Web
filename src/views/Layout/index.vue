<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
</script>

<template>
  <div class="container">
    <div class="content">
      <LayoutNav></LayoutNav>
      <RouterView></RouterView>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
  }
}
</style>