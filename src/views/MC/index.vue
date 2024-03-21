<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router"
import { ref, onMounted, watch } from "vue"
import axios from "axios"
import Loading from "@/components/Loading.vue"
import DownloadButton from "@/components/DownloadButton.vue"

const route = useRoute()
const router = useRouter()
const downloadMCPageData = ref([])
const fetchData = async (version) => {
	try {
		const res = await axios.get(`http://127.0.0.1:3000/downloads/mc/${version}`)
		return res.data
	} catch (err) {
		if (axios.isAxiosError(err) && err.response.status === 404) {
			router.push({ name: "NotFound" })
		}
		return null
	}
}

onMounted(async () => {
	downloadMCPageData.value = await fetchData(route.params.version)
})

watch(
	() => route.params.version,
	async (newValue, oldValue) => {
		if (newValue !== oldValue && route.params.version !== undefined) {
			downloadMCPageData.value = await fetchData(route.params.version)
		}
	}
)
const downloadButtonData = ref({ text: "下载 | Download" })
</script>

<template>
	<div class="top-box"></div>
	<main>
		<div class="container">
			<h2 class="title">下载由StarM Team制作的MineCraft客户端</h2>
			<div class="card-container">
				<template v-for="item in downloadMCPageData" :key="item.id">
					<div class="card" v-if="item.link !== undefined">
						<h3>{{ item.subversion }}</h3>
						<div class="text">
							<div class="prompt warn">
								<p v-if="item.UpdateStopStatus">该客户端已停止更新</p>
								<p>上次更新时间:{{ item.lastUpdated }}</p>
							</div>
							<div class="prompt introduce">
								<p>{{ item.introduce }}</p>
							</div>
						</div>
						<div class="download">
							<ul>
								<li class="download-menu">
									<router-link to="/" title="帮助">
										<img src="/src/assets/icon/help.svg" alt="" />
									</router-link>
									<router-link
										:to="`/downloads/mc/clientinfo/${item.subversion}`"
										title="详情"
									>
										<img src="/src/assets/icon/info.svg" alt="" />
									</router-link>
									<router-link to="/" title="更多">
										<img src="/src/assets/icon/more.svg" alt="" />
									</router-link>
								</li>
								<li class="download-btn">
									<DownloadButton
										:text="downloadButtonData.text"
										:link="item.link"
									></DownloadButton>
								</li>
							</ul>
						</div>
					</div>
					<Loading class="card" v-else></Loading>
				</template>
			</div>
		</div>
	</main>
</template>

<style lang="less" scoped>
.top-box {
	height: 50px;
}

main {
	margin-top: 5rem;
	display: flex;
	justify-content: center;

	.container {
		margin: 0 auto;

		.title {
			text-align: center;
			font-weight: normal;
			margin-bottom: 3.75rem;
		}

		.card-container {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-wrap: wrap;

			.card {
				display: flex;
				flex-direction: column;
				min-width: 14.375rem;
				max-width: 14.375rem;
				height: 20.625rem;
				background-color: rgba(255, 255, 255, 0.6);
				-webkit-backdrop-filter: blur(0.3125rem);
				backdrop-filter: blur(0.3125rem);
				margin: 1.25rem;
				border-radius: 0.625rem;
				box-shadow:
					0 0.125rem 0.5rem rgba(57, 76, 96, 0.15),
					0 0 0 0.0625rem rgba(68, 92, 116, 0.02);

				h3 {
					text-align: center;
					font-size: 1.875rem;
					margin-top: 1.25rem;
				}

				.text {
					display: flex;
					align-items: center;
					flex-direction: column;
					text-align: center;
					font-size: 0.875rem;
					flex: 1;

					.prompt {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						width: 80%;
						height: fit-content;
						padding: 0.5rem;
						border-radius: 0.3125rem;
						box-shadow:
							inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
							7px 7px 20px 0px rgba(0, 0, 0, 0.1),
							4px 4px 5px 0px rgba(0, 0, 0, 0.1);

						p {
							display: block;
							color: #fff;
						}
					}

					.warn {
						margin: 1rem 0 0.5rem 0;
						background: rgb(255, 27, 0);
						background: linear-gradient(
							0deg,
							rgba(255, 27, 0, 1) 0%,
							rgba(251, 75, 2, 1) 100%
						);
					}

					.introduce {
						background: rgb(0, 172, 238);
						background: linear-gradient(
							0deg,
							rgba(0, 172, 238, 1) 0%,
							rgba(2, 126, 251, 1) 100%
						);
					}
				}

				.download {
					ul {
						li {
							display: flex;
							justify-content: center;
						}

						.download-menu {
							width: 80%;
							margin: 0 auto;

							a {
								display: block;
								margin: 0 1rem 0 1rem;

								img {
									width: 1.5rem;
								}
							}
						}

						.download-btn {
							margin: 0.5rem 0 1.25rem 0;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 992px) {
	.container {
		.card-container {
			flex-direction: column;
		}
	}
}
</style>
