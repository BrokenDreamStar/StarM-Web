<script setup></script>

<template>
	<!-- 关于StarM Team -->

	<el-col :span="8" class="img">
		<img src="/src/assets/logo/logo.svg" alt="" />
	</el-col>
	<el-col :span="16" class="text">
		<p>
			StarM Team只是我一时兴起建立的一个名义上的个人工作室 成立于2021年7月18日
		</p>
		<p>其名称也只是BrokenDream_Star (碎梦星尘Star) 这个名字的缩写</p>
		<p>S 碎的拼音首字母 M 梦的拼音首字母 Star 星</p>
		<del>说是Team 但其实只有我一个人</del>
	</el-col>
</template>

<style lang="less" scoped>
.img {
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 70%;
	}
}

.text {
	text-align: left;

	@media (max-width: 992px) {
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		font-size: 0.75rem;
	}
}
</style>
