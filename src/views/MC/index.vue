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
		const res = await axios.get(`/downloads/mc/${version}`)
		return res.data
	} catch (err) {
		if (err.code === "ERR_NETWORK") {
			router.push({ name: "NotFound" })
		} else if (axios.isAxiosError(err) && err.response.status === 404) {
			router.push({ name: "NotFound" })
		} else {
			console.log(err.code)
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
					<div class="card" v-if="item.link !== null">
						<h3>{{ item.subversion }}</h3>
						<div class="text">
							<ul>
								<li v-if="item.UpdateStopStatus">
									<img src="/src/assets/icon/notice.svg" alt="" />
									该客户端已停止更新
								</li>
								<li>
									<img src="/src/assets/icon/date.svg" alt="" />
									上次更新时间:{{ item.lastUpdated }}
								</li>
								<li v-if="item.UpdateStopStatus">
									<img src="/src/assets/icon/good.svg" alt="" />
									已经过稳定性测试<s>(大概)</s>
								</li>
								<li v-else>
									<img src="/src/assets/icon/warning.svg" alt="" />
									该客户端仍处于Beta测试阶段 可能存在崩溃等恶性bug
								</li>
								<li>
									<img src="/src/assets/icon/attachment.svg" alt="" />
									{{ item.introduce }}
								</li>
							</ul>
						</div>
						<div class="download">
							<ul>
								<li class="download-menu">
									<a
										href="https://docs.starm.team/mcclient/install.html"
										target="_blank"
										title="帮助"
									>
										<img src="/src/assets/icon/help.svg" alt="" />
									</a>
									<router-link
										:to="`/downloads/mc/clientinfo/${item.subversion}`"
										title="详情"
									>
										<img src="/src/assets/icon/info.svg" alt="" />
									</router-link>
									<router-link
										:to="`/downloads/mc/clientmore/${item.subversion}`"
										title="更多"
									>
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
					margin: 0.625rem 0 0.3125rem 0;
				}

				.text {
					display: flex;
					align-items: center;
					flex-direction: column;
					font-size: 0.875rem;
					flex: 1;

					ul {
						width: 80%;
						height: fit-content;
						li {
							margin-top: 0.3125rem;
							img {
								width: 1.25rem;
								vertical-align: bottom;
							}
						}
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
								display: flex;
								justify-content: center;
								align-items: center;
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
