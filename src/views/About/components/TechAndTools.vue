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
			width: 3.125rem;
			height: 3.125rem;
			margin-right: 0.1875rem;

			img {
				width: 45px;
				height: 45px;
			}
		}

		.text {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;

			.title {
				font-size: 1.0625rem;
				font-weight: 600;
			}

			.description {
				font-size: 0.9375rem;
				color: rgb(127, 129, 132);
			}
		}
	}
}
</style>
