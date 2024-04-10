<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import Loading from "@/components/Loading.vue"

const imgUrl = (url) => {
	return new URL(`/src/assets/images/${url}`, import.meta.url)
}

const card = ref([
	{
		pageUrl: "/trcinteriorsur",
		url: "TRCStudioInterior.jpg",
		title: "红色创意内服",
		description: "生电玩法向服务器",
		xs: 24,
		sm: 24,
		md: 24,
		lg: 16
	},
	{
		pageUrl: "/jumplink",
		url: "TRCStudioLobby.jpg",
		title: "红色创意服务器",
		description: "生存向群组服务器",
		xs: 24,
		sm: 24,
		md: 24,
		lg: 8
	},
	{ pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 },
	{ pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 },
	{ pageUrl: "/", url: "", title: "画饼中", xs: 24, sm: 12, md: 8, lg: 8 }
])
</script>

<template>
	<main>
		<div class="home-main">
			<el-row :gutter="20">
				<el-col
					v-for="item in card"
					:key="item.id"
					:xs="item.xs"
					:sm="item.sm"
					:md="item.md"
					:lg="item.lg"
				>
					<router-link
						:to="item.pageUrl"
						v-if="item.title !== '画饼中'"
						:style="{ backgroundImage: `url(${imgUrl(item.url)})` }"
					>
						<div class="introduce">
							<div class="text">
								<h3>{{ item.title }}</h3>
								<p>{{ item.description }}</p>
							</div>
						</div>
					</router-link>
					<router-link to="/" v-else class="pie">
						<Loading></Loading>
					</router-link>
				</el-col>
			</el-row>
		</div>
	</main>
</template>

<style lang="less" scoped>
main {
	margin-top: 2.5rem;

	.home-main {
		width: 76vw;
		margin: 0 auto;

		.el-row {
			margin-bottom: 1.25rem;

			.el-col a {
				display: block;
				position: relative;
				height: 23.75rem;
				border-radius: 0.9375rem;
				overflow: hidden;
				margin-bottom: 20px;
				background: #fff no-repeat center/cover;
				box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

				&:hover .introduce {
					bottom: 0;
				}

				@media (max-width: 992px) {
					min-height: 13.75rem;
				}

				@media (max-width: 768px) {
					max-height: 20.3125rem;
				}
			}

			.introduce {
				position: absolute;
				bottom: -6.25rem;
				width: 100%;
				height: 6.25rem;
				background-color: rgba(255, 255, 255, 0.6);
				backdrop-filter: blur(0.625rem);
				color: #373737;
				text-align: center;
				transition: all 0.3s;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				@media (max-width: 992px) {
					height: 5rem;
					bottom: 0;
				}
			}

			.pie {
				position: relative;

				div {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
				}
			}
		}
	}
}
</style>
