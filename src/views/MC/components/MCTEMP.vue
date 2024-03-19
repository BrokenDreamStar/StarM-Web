<script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import MCMods from "@/views/MC/components/MCMods.vue"

//获取当前路由对象
const route = useRoute()
//创建响应式数据 存储页面数据
const downloadPageData = ref([])

//该函数用于发起ajax请求
const fetchData = async (version) => {
  try {
    const res = await axios.get(`http://127.0.0.1:3000/${version}`)
    return res.data
  } catch (err) {
    console.error(err)
    return null
  }
}

//使用onMounted生命周期钩子 在组件挂载后执行内部代码
onMounted(async () => {
  downloadPageData.value = await fetchData(route.params.version)
})

//使用watch监听route.params.version的变化 如果该值发生变化 重新发起请求并更新downloadPageData的值
watch(
  () => route.params.version,
  async (newValue, oldValue) => {
    if (newValue !== oldValue && route.params.version !== undefined) {
      downloadPageData.value = await fetchData(route.params.version)
    }
  },
)
</script>

<template>
  <div class="top-box"></div>
  <MCMods :data="downloadPageData"></MCMods>
</template>

<style lang="less" scoped>
.top-box {
  height: 50px;
}
</style>
