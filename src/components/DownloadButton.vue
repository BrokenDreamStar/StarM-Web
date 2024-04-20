<script setup>
defineProps({
	text: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	}
})
</script>

<template>
	<a :href="link" class="btn">{{ text }}</a>
</template>

<style lang="less" scoped>
.btn {
	position: relative;
	padding: 10px 35px 10px 35px;
	text-align: center;
	color: #fff;
	border-radius: 5px;
	background-image: linear-gradient(to right, #495aff, #0acffe);

	&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		height: 100%;
		border-radius: 5px;
		transition: all 0.3s ease;
	}
	&:hover:after {
		background-color: rgba(0, 0, 0, 0.15);
		@media (max-width: 992px) {
			background-color: unset;
		}
	}
}
</style>
