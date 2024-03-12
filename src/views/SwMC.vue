<script setup>
import SwNav from '@/components/SwNav.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const downloadPageData = ref([])

onMounted(async () => {
  try {
    const storedData = sessionStorage.getItem('downloadPageData')
    if (storedData) {
      downloadPageData.value = JSON.parse(storedData)
    } else {
      const res = await axios(`http://starm.team:3000/${route.params.version}`)
      downloadPageData.value = res.data
      sessionStorage.setItem('downloadPageData', JSON.stringify(res.data))
    }
  } catch (err) {
    console.error(err)
  }
})

</script>

<template>
  <SwNav></SwNav>
  <div class="top-box"></div>
  <div>
    {{ $route.params.version }}
    <ul>
      <li v-for="item in downloadPageData" :key="item.id">{{ item.version }}</li>
    </ul>
  </div>
</template>

<style scoped>
.top-box {
  height: 50px;
}
</style>