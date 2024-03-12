<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
</script>

<template>
  <LayoutNav></LayoutNav>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>