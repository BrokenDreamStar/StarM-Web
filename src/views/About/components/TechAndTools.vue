<script setup>
defineProps({
	data: {
		type: Object,
		required: true
	}
})

const imgUrl = (url) => {
	return new URL(`/src/assets/icon/logo/${url}`, import.meta.url)
}
</script>

<template>
	<el-col
		v-for="item in data"
		:key="item.id"
		:xs="12"
		:sm="12"
		:md="8"
		:lg="6"
		:xl="4"
	>
		<a :href="item.link" target="_blank">
			<div class="logo">
				<img :src="imgUrl(item.img_name)" alt="" />
			</div>
			<div class="text">
				<span class="title">{{ item.title }}</span>
				<span class="description">{{ item.description }}</span>
			</div>
		</a>
	</el-col>
</template>

<style lang="less" scoped>
.el-col {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.9375rem 0;

	a {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		min-width: 11.25rem;
		height: 3.125rem;
		cursor: pointer;

		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 0.1875rem;
			width: 3.125rem;
			height: 3.125rem;

			@media (max-width: 768px) {
				width: 2.5rem;
				height: 2.5rem;
			}

			img {
				width: 2.8125rem;
				height: 2.8125rem;

				@media (max-width: 768px) {
					width: 2.1875rem;
					height: 2.1875rem;
				}
			}
		}

		.text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			.title {
				font-size: 1.0625rem;
				@media (max-width: 768px) {
					font-size: 1rem;
				}

				font-weight: 600;
			}

			.description {
				font-size: 0.9375rem;
				@media (max-width: 768px) {
					font-size: 0.875rem;
				}

				color: #7f8184;
			}
		}
	}
}
</style>
