import { defineConfig, combinePresetAndAppleSplashScreens, minimal2023Preset } from "@vite-pwa/assets-generator/config";

export default defineConfig({
    headLinkOptions: {
        preset: "2023",
    },
    preset: combinePresetAndAppleSplashScreens(
        {
            transparent: {
                sizes: [64, 192, 512],
                favicons: [[48, "favicon.ico"]],
            },
            maskable: {
                sizes: [512],
                resizeOptions: { background: "#9a3412" },
            },
            apple: {
                sizes: [180],
                resizeOptions: { background: "#9a3412" },
            },
        },
        {
            padding: 0.3,
            resizeOptions: { background: "#9a3412", fit: "contain" },
            // by default, dark splash screens are exluded
            // darkResizeOptions: { background: 'black' },
            linkMediaOptions: {
                // add screen to media attribute link?
                // by default:
                // <link rel="apple-touch-startup-image" href="..." media="screen and ...">
                addMediaScreen: false,
                basePath: "./",
                // add closing link tag?
                // by default:
                // <link rel="apple-touch-startup-image" href="..." media="...">
                // with xhtml enabled:
                // <link rel="apple-touch-startup-image" href="..." media="..." />
                xhtml: false,
            },
            png: {
                compressionLevel: 9,
                quality: 60,
            },
            name: (landscape, size, dark) => {
                return `apple-splash-${landscape ? "landscape" : "portrait"}-${
                    typeof dark === "boolean" ? (dark ? "dark-" : "light-") : ""
                }${size.width}x${size.height}.png`;
            },
        },
        ["iPhone 13"]
    ),

    images: ["public/tingu-transparent.png"],
});
