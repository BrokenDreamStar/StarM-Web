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
@import url("https://fonts.font.im/css?family=Noto+Sans");

.btn {
	padding: 10px 35px 10px 35px;
	color: #fff;
	border-radius: 5px;
	background: transparent;
	background-color: #89d8d3;
	background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
	border: none;
	z-index: 1;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
	box-shadow:
		inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
		7px 7px 20px 0px rgba(0, 0, 0, 0.1),
		4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	outline: none;
	text-align: center;
	font-family: "Noto Sans", "微软雅黑", "MicroSoft YaHei";

	&:after {
		position: absolute;
		content: "";
		width: 100%;
		height: 0;
		bottom: 0;
		left: 0;
		z-index: -1;
		border-radius: 5px;
		background-color: #4dccc6;
		background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
		box-shadow:
			-7px -7px 20px 0px #fff9,
			-4px -4px 5px 0px #fff9,
			7px 7px 20px 0px #0002,
			4px 4px 5px 0px #0001;
		transition: all 0.3s ease;
	}

	&:hover:after {
		top: 0;
		height: 100%;
	}

	&:hover {
		color: #fff;
	}

	&:active {
		top: 2px;
	}
}

@media (max-width: 992px) {
	.btn {
		pointer-events: none;
	}
}
</style>
