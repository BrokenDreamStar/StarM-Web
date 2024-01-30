<script setup>
import SwNav from '../components/SwNav.vue';
import SwHomeHeader from '../components/SwHomeHeader.vue'
import SwHomeMain from '../components/SwHomeMain.vue'
import SwFooter from '../components/SwFooter.vue'
</script>

<template>
  <SwNav></SwNav>
  <SwHomeHeader></SwHomeHeader>
  <SwHomeMain></SwHomeMain>
  <SwFooter></SwFooter>
</template>

<style lang="less" scoped>
main {
  margin-top: 3.75rem;
  margin-bottom: 3.75rem;
}
</style>