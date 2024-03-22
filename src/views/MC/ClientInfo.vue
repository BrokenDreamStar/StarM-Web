<script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import MCMods from "@/views/MC/components/MCMods.vue"
import ClientInfoListItem from "@/views/MC/components/ClientInfoListItem.vue"

//是否加载
const isLoading = ref(true)

//获取当前路由对象
const route = useRoute()
//创建响应式数据 存储数据
const modsData = ref([])
const resourcePacksData = ref([])
const shaderPacksData = ref([])

//该函数用于发起ajax请求
const fetchData = async (subversion) => {
	try {
		const [modsDataRes, resourcePacksDataRes, shaderPacksDataRes] = await Promise.all([
			axios.get(`http://127.0.0.1:3000/downloads/mc/clientinfo/mods/${subversion}`),
			axios.get(`http://127.0.0.1:3000/downloads/mc/clientinfo/resourcepacks/${subversion}`),
			axios.get(`http://127.0.0.1:3000/downloads/mc/clientinfo/shaderpacks/${subversion}`)
		])
		modsData.value = modsDataRes.data
		resourcePacksData.value = resourcePacksDataRes.data
		shaderPacksData.value = shaderPacksDataRes.data

		isLoading.value = false //关闭加载
	} catch (err) {
		console.error(err)
		return null
	}
}

//使用onMounted生命周期钩子 调用fetchData
onMounted(async () => {
	await fetchData(route.params.subversion)
})

//使用watch监听route.params.subversion的变化 如果该值发生变化 重新发起请求
watch(
	() => route.params.subversion,
	async (newValue, oldValue) => {
		if (newValue !== oldValue && newValue !== undefined) {
			await fetchData(newValue)
		}
	}
)


const resourcePacks = ref({ imgUrlName: "resourcepacks", modrinthLinkName: "resourcepack", curseforgeLinkName: "texture-packs" })
const shaderPacks = ref({ imgUrlName: "shaderpacks", modrinthLinkName: "shader", curseforgeLinkName: "shaders" })
</script>

<template v-loading.fullscreen.lock="isLoading" element-loading-background="#fff" lazy>
	<div class="top-box"></div>
	<main v-if="!isLoading">
		<el-tabs type="card">
			<el-tab-pane label="简介" class="demo">
				暂无
			</el-tab-pane>
			<el-tab-pane label="模组列表">
				<MCMods :data="modsData"></MCMods>
			</el-tab-pane>
			<el-tab-pane label="材质列表">
				<ClientInfoListItem :data="resourcePacksData" :imgUrlName="resourcePacks.imgUrlName"
					:modrinthLinkName="resourcePacks.modrinthLinkName" :curseforgeLinkName="resourcePacks.curseforgeLinkName">
				</ClientInfoListItem>
			</el-tab-pane>
			<el-tab-pane label="光影列表">
				<ClientInfoListItem :data="shaderPacksData" :imgUrlName="shaderPacks.imgUrlName"
					:modrinthLinkName="shaderPacks.modrinthLinkName" :curseforgeLinkName="shaderPacks.curseforgeLinkName">
				</ClientInfoListItem>
			</el-tab-pane>
		</el-tabs>
	</main>
</template>

<style lang="less" scoped>
.top-box {
	height: 50px;
}

main {
	width: 60vw;
	margin: 0 auto;

	.demo {
		background: none;
	}

	.el-tabs {
		margin-top: 1.25rem;

		:deep(.el-tabs__header) {
			background-color: #fff;
			margin-bottom: 1.25rem;
			border-radius: 0.5rem;
			z-index: 1;
		}

		:deep(.el-tabs__nav) {
			border: none;
		}

		:deep(.el-tabs__item) {
			border: none;
		}
	}
}

@media (max-width: 992px) {
	main {
		width: 90vw;
	}
}
</style>
