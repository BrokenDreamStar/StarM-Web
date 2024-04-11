<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
	<footer>
		<div class="footer-container">
			<!-- 链接 -->
			<div class="links">
				<a href="https://www.trc.studio/" target="_blank">红色创意官网</a>
				<router-link to="/about">关于我们</router-link>
				<router-link to="/404">友情链接</router-link>
			</div>
			<!-- 版权信息 -->
			<div class="copyright">
				<p>Copyright ©2021-{{ new Date().getFullYear() }} StarM Team</p>
			</div>
		</div>
	</footer>
</template>

<style lang="less" scoped>
footer {
	/* 页脚内边距 */
	@footerPadding: 2rem;
	/* 页脚字体颜色 */
	@footerFontColor: #dedfe0;
	/* 页脚样式 */
	.footer-container {
		width: 100%;
		height: fit-content;
		background-color: #303133;

		/* 链接样式 */
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

		/* 版权信息样式 */
		.copyright {
			color: @footerFontColor;
			text-align: center;
			padding-bottom: @footerPadding;
		}
	}
}
</style>
