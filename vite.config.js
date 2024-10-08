import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true,
            },

            manifest: {
                name: "tingu soundboard",
                short_name: "tingu",
                description: "tingu soundboard",
                theme_color: "#9a3412",
                background_color: "#9a3412",
            },

            workbox: {
                globPatterns: ["**/*.{js,css,html,ico,png,svg,m4a}"],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
            },

            includeAssets: ["**/*"],

            devOptions: {
                enabled: false,
                navigateFallback: "index.html",
                suppressWarnings: true,
                type: "module",
            },
        }),
    ],
    base: process.env.BASE_PATH ?? "",
});
