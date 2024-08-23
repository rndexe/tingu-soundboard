import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
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
                    theme_color: "#f97316",
                    background_color: "#f97316"
                },

                workbox: {
                    globPatterns: ["**/*"],
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
        base: process.env.BASE_PATH ?? ''
    };
});
