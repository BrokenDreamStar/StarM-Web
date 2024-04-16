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
//创建响应式数据
const modsData = ref([])
const optionalModsData = ref([])
const resourcePacksData = ref([])
const shaderPacksData = ref([])

//该函数用于发起ajax请求
const getData = async (subversion) => {
	try {
		const url = "/downloads/mc/clientinfo"
		const [
			modsDataRes,
			optionalModsDataRes,
			resourcePacksDataRes,
			shaderPacksDataRes
		] = await Promise.all([
			axios.get(`${url}/mods/${subversion}`),
			axios.get(`${url}/optional_mods/${subversion}`),
			axios.get(`${url}/resourcepacks/${subversion}`),
			axios.get(`${url}/shaderpacks/${subversion}`)
		])
		//将数据存储到响应式数据中
		modsData.value = modsDataRes.data
		optionalModsData.value = optionalModsDataRes.data
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
	await getData(route.params.subversion)
})

//使用watch监听route.params.subversion的变化 如果该值发生变化 重新发起请求
watch(
	() => route.params.subversion,
	async (newValue, oldValue) => {
		if (newValue !== oldValue && newValue !== undefined) {
			await getData(newValue)
		}
	}
)

//给子组件ClientInfoListItem传参
const resourcePacks = ref({
	imgUrlName: "resourcepacks",
	modrinthLinkName: "resourcepack",
	curseforgeLinkName: "texture-packs"
})

const shaderPacks = ref({
	imgUrlName: "shaderpacks",
	modrinthLinkName: "shader",
	curseforgeLinkName: "shaders"
})
</script>

<template>
	<!-- 顶部占位盒子 使用v-loading指令实现全屏加载效果 -->
	<div
		class="top-box"
		v-loading.fullscreen.lock="isLoading"
		element-loading-background="#fff"
		lazy
	></div>
	<!-- 当加载完成时 显示主内容区域 -->
	<main v-if="!isLoading">
		<!-- 使用element-ui的tabs组件实现功能选项卡 -->
		<el-tabs type="card">
			<!-- 模组列表选项卡 使用MCMods组件展示模组数据 -->
			<el-tab-pane label="模组列表">
				<MCMods :data="modsData"></MCMods>
			</el-tab-pane>
			<el-tab-pane label="可选模组">
				<MCMods :data="optionalModsData"></MCMods>
			</el-tab-pane>
			<!-- 材质列表选项卡 使用ClientInfoListItem组件展示材质包信息 -->
			<el-tab-pane label="材质列表">
				<ClientInfoListItem
					:data="resourcePacksData"
					:imgUrlName="resourcePacks.imgUrlName"
					:modrinthLinkName="resourcePacks.modrinthLinkName"
					:curseforgeLinkName="resourcePacks.curseforgeLinkName"
				>
				</ClientInfoListItem>
			</el-tab-pane>
			<!-- 光影列表选项卡 使用ClientInfoListItem组件展示光影包信息 -->
			<el-tab-pane label="光影列表">
				<ClientInfoListItem
					:data="shaderPacksData"
					:imgUrlName="shaderPacks.imgUrlName"
					:modrinthLinkName="shaderPacks.modrinthLinkName"
					:curseforgeLinkName="shaderPacks.curseforgeLinkName"
				>
				</ClientInfoListItem>
			</el-tab-pane>
		</el-tabs>
	</main>
	<el-backtop
		:right="100"
		:bottom="100"
		class="hidden-md-and-down"
	></el-backtop>
</template>

<style lang="less" scoped>
/* 顶部占位盒子 抵消导航栏的高度 */
.top-box {
	height: 50px;
}

/* 主内容区域样式 */
main {
	width: 60vw;
	margin: 0 auto;

	/* 屏幕宽度小于1200px时 修改主要内容区域的宽度 */
	@media (max-width: 1200px) {
		width: 70vw;
	}

	/* 屏幕宽度小于992px时 修改主要内容区域的宽度 */
	@media (max-width: 992px) {
		width: 90vw;
	}

	/* tabs组件样式 */
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
</style>
