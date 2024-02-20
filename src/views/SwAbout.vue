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
          <div>
            <img src="../assets/icon/cmd.svg" alt="">
            <span>编程语言</span>
          </div>
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
    box-shadow: rgba(0, 0, 0, 0.1) 0rem .625rem 3.125rem;
  }

  .about-container-title {
    position: absolute;
    top: -1.25rem;
    left: 1.25rem;
    width: fit-content;
    min-width: 3.125rem;
    height: 2.5rem;
    background-color: #00B3FF;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0.3125rem 0.5rem;

    div {
      margin: 0 .625rem 0 .625rem;

      span {
        line-height: 2.5rem;
        text-align: center;
        font-weight: 600;
      }

      img {
        position: relative;
        top: -1px;
        width: 2rem;
        height: 2rem;
        vertical-align: middle;
        margin-right: .1875rem;
      }
    }

  }

}
</style>
