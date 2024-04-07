<script setup>
import { ref, computed, onMounted, watch } from "vue"

//创建响应式数据
const modsData = ref([])
//获取父组件传递过来的数据
const props = defineProps({
	data: {
		type: Object,
		required: true
	}
})
//当组件挂载完成时 把父组件传递过来的数据赋值给modsData
onMounted(async () => {
	modsData.value = props.data
})

//存储用户选择的标签
const selectedTags = ref([])

const allTags = computed(() => {
	const tagSet = new Set() //用于存储所有唯一标签
	modsData.value.forEach((item) => {
		//遍历所有数据
		item.tags.split(" ").forEach((tag) => {
			//遍历所有的标签 并按空格分隔
			tagSet.add(tag) //把唯一标签添加进Set *使用了Set自动去重的特性
		})
	})
	return Array.from(tagSet) //返回储存所有唯一标签的数组
})

const filteredItems = computed(() => {
	if (selectedTags.value.length === 0) {
		//如果selectedTags长度为0 即用户没有选择标签
		return modsData.value //返回全部数据
	}

	//如果用户选择了标签
	return modsData.value.filter((item) => {
		//根据用户选择的标签过滤数据
		const itemTags = new Set(item.tags.split(" ")) //将所有数据的标签按空格分割成数组并转换为Set
		return selectedTags.value.every((selectedTag) => itemTags.has(selectedTag)) //检查用户选择的标签是否都在数据的标签Set中
	})
})

//当props.data变化时更新modsData
watch(
	() => props.data,
	(newData, oldData) => {
		if (newData !== oldData) {
			modsData.value = props.data
		}
	}
)
//获取图片路径
const imgUrl = (url) => {
	return new URL(`/src/assets/icon/mods/${url}.webp`, import.meta.url)
}
</script>

<template>
	<div class="container" id="container">
		<el-row v-if="modsData">
			<el-col
				:xs="0"
				:sm="0"
				:md="5"
				:lg="5"
				:xl="5"
				class="hidden-sm-and-down"
			>
				<!-- 筛选框 -->
				<div class="tag-list">
					<p>筛选</p>
					<el-checkbox-group v-model="selectedTags">
						<el-checkbox
							v-for="tag in allTags"
							:key="tag.id"
							:label="tag"
							size="large"
							:validate-event="false"
						></el-checkbox>
					</el-checkbox-group>
				</div>
			</el-col>
			<!-- 列表 -->
			<el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
				<div class="list">
					<ul>
						<li v-for="item in filteredItems" :key="item.id">
							<!-- logo -->
							<div class="logo">
								<img :src="imgUrl(item.img_name)" alt="" />
							</div>
							<div class="content">
								<!-- 标题 -->
								<div class="title">
									<h3>
										{{ item.mod_name }}
										<p v-if="item.chinese_name">{{ item.chinese_name }}</p>
									</h3>
								</div>
								<!-- 简介 -->
								<div class="description">{{ item.description }}</div>
								<!-- 标签 -->
								<div class="tags">
									<span>{{ item.tags }}</span>
								</div>
							</div>
							<!-- 图标 -->
							<div class="icon">
								<a
									:href="`https://modrinth.com/mod/${item.modrinth_name}`"
									target="_blank"
									title="前往modrinth查看详情"
									v-if="item.modrinth_name"
								>
									<img
										src="/src/assets/icon/logo/modrinth.svg"
										alt="modrinth"
										class="modrinth-icon"
									/>
								</a>
								<a
									:href="`https://www.curseforge.com/minecraft/mc-mods/${item.curseforge_name}`"
									target="_blank"
									title="前往curseforge查看详情"
									v-if="item.curseforge_name"
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
			</el-col>
		</el-row>
	</div>
</template>

<style lang="less" scoped>
.container {
	overflow: hidden;
	width: 100%;

	.el-row {
		width: 100%;

		/* 筛选框样式 */
		.tag-list {
			width: 90%;
			min-width: 7.5rem;
			height: fit-content;
			background-color: #fff;
			border-radius: 0.25rem;

			p {
				margin-left: 1.875rem;
				height: 2rem;
				line-height: 2rem;
				font-weight: 600;
				color: #999;
			}

			/* 多选框样式 */
			.el-checkbox-group {
				width: fit-content;
				display: flex;
				flex-direction: column;
				align-items: stretch;

				.el-checkbox {
					margin-left: 1.875rem;

					:deep(.el-checkbox__inner) {
						border: 1px solid #000;
					}

					:deep(.is-checked .el-checkbox__inner) {
						border: none;
					}
				}
			}
		}

		/* 列表样式 */
		.list {
			li {
				display: flex;
				align-items: flex-start;
				height: 5.625rem;
				background-color: #fff;
				margin-bottom: 0.9375rem;
				border-radius: 0.5rem;

				/* logo样式 */
				.logo {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					min-width: 6rem;

					/* logo图片样式 */
					img {
						display: block;
						width: 4rem;
						height: 4rem;
						background-color: #f4f4f5;
					}
				}

				/* 内容区域样式 */
				.content {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					width: 100%;
					height: 100%;

					/* 标题样式 */
					.title {
						flex: 0 0 auto;
						margin-top: 0.1875rem;

						p {
							display: inline-block;
							transform: translateY(-0.0625rem);
							font-size: 14px;
							color: #999;
						}
					}

					/* 简介样式 */
					.description {
						flex: 1 1 auto;
						overflow: hidden;
						font-size: 0.9375rem;
						margin-top: 0.125rem;
					}
					/* 标签样式 */
					.tags {
						flex: 0 0 auto;
						margin-bottom: 0.5rem;

						span {
							width: fit-content;
							height: fit-content;
							padding: 0.1875rem;
							border-radius: 0.1875rem;
							background-color: #ecf5ff;
							color: #606266;
							font-size: 0.8125rem;
						}
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
						margin-right: 0.3125rem;
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
}

/* 响应式布局设置 */

/* 当宽度小于1200px时 */
@media (max-width: 1200px) {
	.container {
		/* 筛选框样式 */
		.tag-list {
			/* 缩小左边距 */
			p {
				margin-left: 1.25rem;
			}

			.el-checkbox-group {
				/* 缩小左边距 */
				.el-checkbox {
					margin-left: 1.25rem;
				}
			}
		}
	}
}

/* 当宽度小于992px时 */
@media (max-width: 992px) {
	/* 未知原因导致该代码块优先级不足 使用id选择器提权 */
	#container {
		/* 列表样式 */
		.list {
			/* 修改列表高度为自适应 */
			li {
				position: relative;
				height: fit-content;

				/* 修改logo部位为子绝父相定位方案的水平垂直居中 */
				.logo {
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
				}
				.content {
					/* 增加左边距让出图片的位置 */
					margin-left: 6rem;
					/* 缩小字体大小 */
					.title {
						font-size: 0.9375rem;
						line-height: 1.0625rem;
						p {
							font-size: 0.8125rem;
						}
					}
					/* 增加简介上边距并缩小字体大小 */
					.description {
						margin-top: 0.0625rem;
						font-size: 0.8125rem;
					}
					/* 增加增加标签的上边距 */
					.tags {
						margin-top: 0.1875rem;
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
}
</style>
