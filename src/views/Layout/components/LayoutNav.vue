<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"
import { Vue3Lottie } from "vue3-lottie"
import AstronautJSON from "@/assets/animations/menuV2.json"

//移动端导航栏及侧边栏组件

const mobileMenuIconAni = ref(null)
const mobileMenuSwitchButton = ref(null)
const drawer = ref(null)
let mobileMenuSwitchState = true

const mobileMenuSwitch = () => {
	if (mobileMenuSwitchState) {
		mobileMenuIconAni.value.play()
		mobileMenuSwitchButton.value.disabled = true
		setTimeout(() => {
			drawer.value = true
		}, 10)
	} else {
		mobileMenuIconAni.value.play()
		mobileMenuSwitchButton.value.disabled = true
		setTimeout(() => {
			drawer.value = false
		}, 300)
	}
}

const toggleMenu = () => {
	if (mobileMenuSwitchState) {
		mobileMenuIconAni.value.setDirection("reverse")
		mobileMenuSwitchButton.value.disabled = false
		mobileMenuSwitchState = false
	} else {
		mobileMenuIconAni.value.setDirection("forward")
		mobileMenuSwitchButton.value.disabled = false
		mobileMenuSwitchState = true
	}
}
</script>

<template>
	<nav>
		<div class="nav">
			<div class="logo">
				<router-link to="/">
					<img src="/src/assets/logo/logo.svg" />
				</router-link>
			</div>
			<div class="menu hidden-xs-only">
				<ul>
					<li>
						<router-link to="/">首页 | Home</router-link>
					</li>
					<li>
						<router-link to="/about">关于 | About</router-link>
					</li>
					<li>
						<a @click.prevent>更多 | More <i class="menu-more-icon"></i></a>
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
			<div class="mobile-nav hidden-sm-and-up">
				<el-button
					@click="mobileMenuSwitch"
					ref="mobileMenuSwitchButton"
					type="primary"
				>
					<Vue3Lottie
						@onComplete="toggleMenu"
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
						<router-link to="/">首页</router-link>
					</li>
					<li>
						<router-link to="/about">关于</router-link>
					</li>
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
			</div>
		</el-drawer>
	</nav>
</template>

<style lang="less" scoped>
//导航栏
nav {
	@navMargin: 10rem;
	@navHeight: 3.125rem;

	.nav {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100vw;
		height: @navHeight;
		background-color: #fff;
		z-index: 3;

		//logo样式
		.logo {
			margin-left: @navMargin;

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

		//菜单样式
		.menu {
			display: flex;
			margin-right: @navMargin;

			ul {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}

			li {
				margin-left: 3rem;
				cursor: pointer;

				.menu-more-icon {
					display: inline-block;
					width: 20px;
					height: 1.25ex;
					background: url(/src/assets/icon/chevron-down.svg) no-repeat center;
					transition: transform 0.2s;
				}
			}

			li:nth-child(3) {
				position: relative;
			}

			li:nth-child(3):hover .menu-more {
				display: block;
			}

			.menu-more {
				display: none;
				position: absolute;
				justify-content: center;
				left: 0;
				width: 100%;
				background-color: #fff;

				li {
					height: 2.5rem;
					margin: 0;
					line-height: 2.5rem;
					text-align: center;
				}

				li:nth-child(1) {
					margin-top: 0.75rem;
				}

				li:last-child {
					border: none;
					cursor: not-allowed;

					a {
						color: #c0c4cc;
					}
				}
			}

			li:nth-child(3):hover .menu-more-icon {
				transform: rotate(180deg);
			}

			a {
				color: #333;
			}

			a.router-link-exact-active {
				color: #ff1212;
			}
		}
	}

	//移动端导航栏样式
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
		}
	}
}

//导航栏占位
.top-box {
	height: 50px;
}

//响应式布局样式
@media (max-width: 992px) {
	@padMargin: 3rem;

	nav .nav {
		.logo {
			margin-left: @padMargin;
		}

		.menu {
			margin-right: @padMargin;
		}
	}
}

@media (max-width: 768px) {
	nav .nav {
		.logo {
			margin-left: 0.5rem;
		}
	}
}
</style>
