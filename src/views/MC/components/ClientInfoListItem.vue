<script setup>
import { ref, onMounted } from "vue"

//创建响应式数据
const ClientInfoListItemData = ref([])

//获取父组件传递过来的数据
const props = defineProps({
	data: {
		type: Object,
		required: true
	},
	imgUrlName: {
		type: String,
		required: true
	},
	modrinthLinkName: {
		type: String,
		required: true
	},
	curseforgeLinkName: {
		type: String,
		required: true
	}
})

//组件挂载时 把数据赋值给ClientInfoListItemData
onMounted(async () => {
	ClientInfoListItemData.value = props.data
})

//根据imgUrlName和imgName生成图片URL
const imgUrl = (imgUrlName, imgName) => {
	return new URL(
		`/src/assets/icon/${imgUrlName}/${imgName}.webp`,
		import.meta.url
	)
}
</script>

<template>
	<div class="container" id="container">
		<ul>
			<!-- 使用v-for遍历ClientInfoListItemData 并渲染到页面上 -->
			<li v-for="item in ClientInfoListItemData" :key="item.id">
				<div class="logo">
					<img :src="imgUrl(imgUrlName, item.imgName)" alt="" />
				</div>
				<div class="content">
					<div class="title">
						<h3>
							{{ item.name }}
						</h3>
					</div>
					<div class="description">
						{{ item.description }}
					</div>
				</div>
				<div class="icon">
					<!-- 根据不同的平台名称 生成对应的平台链接和图标 -->
					<a
						:href="item.otherLink"
						target="_blank"
						:title="`前往${item.otherName}查看详情`"
						v-if="item.otherName"
					>
						<img
							:src="`/src/assets/icon/logo/${item.otherName}.svg`"
							:alt="item.otherName"
							class="other-icon"
						/>
					</a>
					<a
						:href="`https://modrinth.com/${modrinthLinkName}/${item.modrinthName}`"
						target="_blank"
						title="前往modrinth查看详情"
						v-if="item.modrinthName"
					>
						<img
							src="/src/assets/icon/logo/modrinth.svg"
							alt="modrinth"
							class="modrinth-icon"
						/>
					</a>
					<a
						:href="`https://www.curseforge.com/minecraft/${curseforgeLinkName}/${item.curseforgeName}`"
						target="_blank"
						title="前往curseforge查看详情"
						v-if="item.curseforgeName"
					>
						<img
							src="/src/assets/icon/logo/curseforge.svg"
							alt="curseforge"
							class="curseforge-icon"
						/>
					</a>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="less" scoped>
.container {
	ul {
		/* 列表样式 */
		li {
			display: flex;
			align-items: flex-start;
			height: 5.625rem;
			background-color: #fff;
			border-radius: 0.5rem;
			margin-bottom: 0.9375rem;

			/* logo样式 */
			.logo {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 5.625rem;
				margin-right: 1.25rem;
				margin-left: 1rem;

				/* logo图片样式 */
				img {
					display: block;
					width: 4rem;
					height: 4rem;
					background-color: #f4f4f5;
				}
			}

			/* 内容样式 */
			.content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 100%;
				height: 100%;

				/* 标题样式 */
				.title {
					flex: 0 0 auto;
					margin-top: 0.7rem;
				}

				/* 简介样式 */
				.description {
					flex: 1 1 auto;
					overflow: hidden;
					font-size: 0.9375rem;
					margin-top: 0.125rem;
				}
			}

			/* 图标样式 */
			.icon {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: auto;
				margin-bottom: 0.125rem;

				/* 图标样式 */
				a {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 1.875rem;
					height: 1.875rem;
					margin-right: 0.3125rem;
				}

				/* 其它图标样式 */
				.other-icon {
					width: 1.5rem;
				}

				/* modrinth图标样式 */
				.modrinth-icon {
					width: 1.5rem;
				}

				/* curseforge图标样式 */
				.curseforge-icon {
					width: 1.875rem;
				}
			}
		}
	}
}

/* 响应式布局 */

/* 当页面宽度小于992px时 */
@media (max-width: 992px) {
	/* 未知原因导致该代码块使用类名选择器优先级不足 使用id选择器提权 */
	#container {
		/* 列表样式 */
		li {
			/* 增加列表高度 */
			height: 6.875rem;

			/* 增加logo高度 */
			.logo {
				height: 6.875rem;
			}
			/* 内容样式 */
			.content {
				/* 增加标题上边距 */
				.title {
					margin-top: 1.25rem;
				}

				/* 缩小简介字体大小 */
				.description {
					font-size: 14.5px;
				}
			}

			/* 图标样式 */
			.icon {
				/* 使图标竖向排列 */
				flex-direction: column;
			}
		}
	}
}
</style>
