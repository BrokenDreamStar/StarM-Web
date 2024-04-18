<script setup>
import { ref, watch } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { Vue3Lottie } from "vue3-lottie"
import AstronautJSON from "@/assets/animations/menuV2.json"

// 导航栏列表数据
const navList = ref([
	{ name: "首页", path: "/" },
	{ name: "关于", path: "/about" },
	{ name: "资源下载", path: "/downloads" },
	{ name: "原神工具", path: "/genshin" },
	{ name: "来点弔图", path: "/dt" }
])

// 移动端菜单图标动画
const mobileMenuIconAni = ref(null)
// 抽屉菜单状态
const drawer = ref(false)
// 移动端菜单开关状态
const mobileMenuSwitchState = ref(false)

// 控制移动端菜单图标动画和抽屉菜单状态
const mobileMenuSwitch = () => {
	if (mobileMenuSwitchState.value) {
		mobileMenuIconAni.value.setDirection("reverse")
	} else {
		mobileMenuIconAni.value.setDirection("forward")
	}
	mobileMenuIconAni.value.play()

	setTimeout(() => {
		drawer.value = !drawer.value
	}, 200)

	mobileMenuSwitchState.value = !mobileMenuSwitchState.value
}

// 监听路由变化 如果抽屉菜单处于打开状态 则关闭抽屉菜单
const route = useRoute()
watch(
	() => route.path,
	() => {
		if (drawer.value) {
			mobileMenuSwitch()
		}
	}
)
</script>

<template>
	<!-- 导航栏 -->
	<nav>
		<div class="nav">
			<!-- logo部分 -->
			<div class="logo">
				<router-link to="/">
					<img src="/src/assets/logo/logo.svg" />
				</router-link>
			</div>
			<!-- 菜单 -->
			<div class="menu hidden-xs-only">
				<ul>
					<li>
						<router-link to="/">首页 | Home</router-link>
					</li>
					<li>
						<router-link to="/about">关于 | About</router-link>
					</li>
					<!-- 更多 -->
					<li>
						<a @click.prevent class="menu-more-icon">更多 | More</a>
						<ul class="menu-more">
							<li>
								<a href="https://trc.studio/" target="_blank">红色创意官网</a>
							</li>
							<li>
								<router-link to="/downloads">资源下载</router-link>
							</li>
							<li>
								<router-link to="/genshin">原神工具</router-link>
							</li>
							<li>
								<router-link to="/dt">来点弔图</router-link>
							</li>
							<li>
								<a @click.prevent>敬请期待</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- 移动端菜单 -->
			<div class="mobile-nav hidden-sm-and-up">
				<el-button @click="mobileMenuSwitch" type="primary">
					<Vue3Lottie
						ref="mobileMenuIconAni"
						:animationData="AstronautJSON"
						:height="45"
						:width="45"
						:speed="2.1"
						:autoPlay="false"
						:loop="false"
					/>
				</el-button>
			</div>
		</div>
		<!-- 抽屉菜单 -->
		<el-drawer
			class="hidden-sm-and-up"
			v-model="drawer"
			:with-header="false"
			:close-on-press-escape="false"
			:close-on-click-modal="false"
			:modal="false"
			:z-index="2"
			:show-close="false"
		>
			<div class="mobile-menu">
				<ul>
					<li>
						<a href="https://trc.studio/" target="_blank">红色创意官网</a>
					</li>
					<li v-for="item in navList" :key="item.id">
						<router-link :to="item.path">{{ item.name }}</router-link>
					</li>
					<li>
						<a @click.prevent>敬请期待</a>
					</li>
				</ul>
			</div>
		</el-drawer>
	</nav>
</template>

<style lang="less" scoped>
/* 导航栏 */
nav {
	/* 导航栏外边距 */
	@navMargin: 10rem;
	/* 导航栏高度 */
	@navHeight: 3.125rem;
	/* 页面宽度小于992px时的导航栏外边距 */
	@padMargin: 3rem;
	/* 选中时颜色 */
	@hoverColor: #66ccff;
	/* 激活时颜色 */
	@activeColor: #409eff;
	.nav {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: @navHeight;
		background-color: #fff;
		z-index: 5;

		/* logo样式 */
		.logo {
			margin-left: @navMargin;

			/* 响应式布局 */
			@media (max-width: 992px) {
				margin-left: @padMargin;
			}
			@media (max-width: 768px) {
				margin-left: 0.5rem;
			}

			a {
				display: block;
				width: 100%;
				height: @navHeight;
			}

			img {
				width: 133px;
				height: 48px;
			}
		}

		/* 菜单样式 */
		.menu {
			display: flex;
			margin-right: @navMargin;
			/* 响应式布局 */
			@media (max-width: 992px) {
				margin-right: @padMargin;
			}

			ul {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			li {
				margin-left: 3rem;
				cursor: pointer;

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					height: @navHeight;

					&:hover {
						color: @hoverColor;
					}
				}

				a.router-link-exact-active {
					color: @activeColor;
				}
				/* 更多菜单样式 */
				.menu-more {
					display: none;
					position: absolute;
					justify-content: center;
					left: 0;
					width: 100%;
					background-color: #fff;

					li {
						height: @navHeight / 2;
						margin: 0;
						line-height: 2.5rem;
						text-align: center;

						a {
							height: 80%;
							color: #333;
							white-space: nowrap;

							&:hover {
								color: @hoverColor;
							}
						}

						a.router-link-exact-active {
							color: @activeColor;
						}

						&:last-child {
							border: none;
							cursor: not-allowed;

							a {
								color: #c0c4cc;
							}
						}
					}
				}
				/* 更多菜单图标 */
				.menu-more-icon {
					&::after {
						transform: translateY(0.0625rem);
						display: inline-block;
						content: "";
						width: 1.5625rem;
						height: 1.5625rem;
						background: url(/src/assets/icon/chevron-down.svg);
						background-size: cover;
						transition: transform 0.3s;
					}

					&:hover::after {
						transform: rotate(180deg);
					}
				}

				&:nth-child(3) {
					position: relative;

					a:hover {
						color: unset;
					}
				}

				&:nth-child(3):hover .menu-more {
					display: block;
				}
			}
		}
	}

	/* 移动端导航栏样式 */
	.mobile-nav {
		display: flex;
		justify-content: space-around;
		align-items: center;

		button {
			border: none;
			background: none;
		}
	}

	.mobile-menu {
		display: flex;
		justify-content: center;
		text-align: center;
		width: 100%;
		margin-top: @navHeight;

		li {
			margin-bottom: 1.25rem;

			&:last-child {
				cursor: not-allowed;
				a {
					color: #c0c4cc;
				}
			}
		}
	}
}
</style>
