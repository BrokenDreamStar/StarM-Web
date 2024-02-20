<script setup>
import SwNav from '../components/SwNav.vue';
// import { ref } from 'vue'
</script>

<template>
  <SwNav></SwNav>
  <div class="top-box"></div>
  <main>
    <div class="about">
      <div class="about-container">
        <div class="about-container-title">
          <span>编程语言</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}

.about {
  width: 70vw;
  margin: 0 auto;

  .about-container {
    position: relative;
    width: 100%;
    height: 6.25rem;
    margin-top: 2.5rem;
    background-color: #fff;
    color: #fff;
    border-radius: .5rem;
  }

  .about-container-title {
    position: absolute;
    top: -0.9375rem;
    left: 1.25rem;
    width: fit-content;
    min-width: 3.125rem;
    height: 1.875rem;
    border-radius: .5rem;
    background-color: #00B3FF;

    span {
      line-height: 1.875rem;
      text-align: center;
      margin: 0 .625rem 0 .625rem;
    }
  }
}
</style>
