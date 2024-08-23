import { registerSW } from "virtual:pwa-register";

export function initPWA(app) {
    window.addEventListener("load", () => {
        registerSW({
            immediate: true,
            onOfflineReady() {
                console.log("App ready to work offline");
            },
        });
    });
}
