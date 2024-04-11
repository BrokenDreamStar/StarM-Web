<script setup>
import AboutContainer from "@/views/About/components/AboutContainer.vue"
import TechAndTools from "@/views/About/components/TechAndTools.vue"
import AboutStarM from "@/views/About/components/AboutStarM.vue"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import axios from "axios"

const aboutPageData = ref([])
const router = useRouter()
const isLoading = ref(false)

const loadingTimer = () => {
	const loading = setTimeout(() => {
		if (aboutPageData.value.length > 0) {
			isLoading.value = false
			clearTimeout(loading)
		}
	}, 300)
}

onMounted(async () => {
	try {
		const storedData = sessionStorage.getItem("aboutPageData")
		if (storedData) {
			aboutPageData.value = JSON.parse(storedData)
		} else {
			isLoading.value = true
			const res = await axios.get("/about")
			aboutPageData.value = res.data
			sessionStorage.setItem("aboutPageData", JSON.stringify(res.data))
			loadingTimer()
		}
	} catch (err) {
		if (axios.isAxiosError(err) && err.response.status === 404) {
			router.push({ name: "NotFound" })
		}
	}
})

const aboutStarMData = ref({
	imgName: "about.svg",
	title: "关于StarM Team"
})
const techAndToolsData = ref({
	imgName: "cmd.svg",
	title: "本站使用技术和工具"
})
</script>

<template>
	<div class="top-box"></div>
	<main v-loading.fullscreen.lock="isLoading" element-loading-background="#fff">
		<div class="about" v-if="!isLoading">
			<AboutContainer
				:imgName="aboutStarMData.imgName"
				:title="aboutStarMData.title"
			>
				<AboutStarM></AboutStarM>
			</AboutContainer>
			<AboutContainer
				:imgName="techAndToolsData.imgName"
				:title="techAndToolsData.title"
			>
				<TechAndTools :data="aboutPageData"></TechAndTools>
			</AboutContainer>
		</div>
	</main>
</template>

<style lang="less" scoped>
.top-box {
	height: 50px;
}

main {
	margin-bottom: 2.5rem;

	.about {
		width: 65vw;
		margin: 0 auto;

		@media (max-width: 768px) {
			width: 95vw;
		}
	}
}
</style>
