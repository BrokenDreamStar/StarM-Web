<script setup>
import { Vue3Lottie } from "vue3-lottie"
import AstronautJSON from "@/assets/animations/loadingV2.json"
</script>

<template>
	<div class="pie">
		<div>
			<Vue3Lottie
				:animationData="AstronautJSON"
				:height="60"
				:width="60"
				:speed="1"
				:autoPlay="true"
				:loop="true"
			/>
			<h3>画饼中...</h3>
		</div>
	</div>
</template>

<style lang="less" scoped>
.pie {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}
</style>
