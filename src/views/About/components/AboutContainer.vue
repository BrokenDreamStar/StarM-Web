<script setup>
defineProps({
	imgName: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})
</script>

<template>
	<div class="container">
		<div class="title">
			<div>
				<img :src="`/src/assets/icon/${imgName}`" alt="" />
				<span>{{ title }}</span>
			</div>
		</div>
		<el-row>
			<slot></slot>
		</el-row>
	</div>
</template>

<style lang="less" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	height: fit-content;
	margin-top: 2.5rem;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.625rem 3.125rem;
	.title {
		position: absolute;
		top: -1.25rem;
		left: 1.25rem;
		width: fit-content;
		min-width: 3.125rem;
		height: 2.5rem;
		background-color: #00b3ff;
		border-radius: 0.5rem;
		box-shadow: rgba(0, 0, 0, 0.1) 0 0.3125rem 0.5rem;
		-webkit-user-select: none;
		user-select: none;

		div {
			margin: 0 0.625rem 0 0.625rem;

			span {
				color: #fff;
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
				margin-right: 0.1875rem;
			}
		}
	}
	.el-row {
		width: 100%;
		margin: 1.5625rem 0 1.5625rem 0;
	}
}
</style>
