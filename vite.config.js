import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	server: { host: "127.0.0.1", port: 3001 },
	plugins: [
		vue(),
		AutoImport({
			imports: ["vue"],
			resolvers: [
				ElementPlusResolver(),
				IconsResolver({
					prefix: "Icon"
				})
			]
		}),

		Components({
			resolvers: [
				IconsResolver({
					enabledCollections: ["ep"]
				}),
				ElementPlusResolver()
			]
		}),

		Icons({
			autoInstall: true
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
})
