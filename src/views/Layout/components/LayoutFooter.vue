<script setup>
import { ref } from "vue"
import { RouterLink } from "vue-router"

const data = new Date()
const year = ref(data.getFullYear())
</script>

<template>
	<footer>
		<div class="footer-container">
			<div class="links">
				<a href="https://www.trc.studio/" target="_blank">红色创意官网</a>
				<router-link to="/about">关于我们</router-link>
				<router-link to="/404">友情链接</router-link>
			</div>
			<div class="copyright">
				<p>Copyright ©2021-{{ year }} StarM Team</p>
			</div>
		</div>
	</footer>
</template>

<style lang="less" scoped>
footer {
	.footer-container {
		width: 100%;
		height: fit-content;
		background-color: #303133;
		@footerPadding: 2rem;
		@footerFontColor: #dedfe0;

		.links {
			padding: @footerPadding 0 0.8125rem 0;
			text-align: center;
			font-size: 0.9375rem;

			a {
				color: @footerFontColor;
				line-height: 1;
				padding: 0 10px;
				border-right: 1px solid @footerFontColor;

				&:last-child {
					border-right: none;
				}
			}
		}

		.copyright {
			color: @footerFontColor;
			text-align: center;
			padding-bottom: @footerPadding;
		}
	}
}
</style>
