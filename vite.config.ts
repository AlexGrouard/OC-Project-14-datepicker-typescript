// vite.config.js
//import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
//import sassDts from "vite-plugin-sass-dts"

export default defineConfig({
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, "src/lib/DatePicker.tsx"),
			name: "date-picker-typescript",
			// the proper extensions will be added
			fileName: "DatePicker"
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ["react", "react-dom"],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					react: "react",
					reactDOM: "react-dom"
				}
			}
		}
	},
	plugins: [dts()]
})
