/** @type {import('next').NextConfig} */
const nextConfig = {
    plugins: [
        "tailwindcss",
        "postcss-flexbugs-fixes",
        "postcss-preset-env",
        [
            "postcss-normalize",
            {
                allowDuplicates: false,
            },
        ],
        [
            "@fullhuman/postcss-purgecss",
            {
                content: [
                    "./src/pages/**/*.{js,jsx,ts,tsx}",
                    "./src/components/**/*.{js,jsx,ts,tsx}",
                ],
                defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [],
            },
        ],
        "autoprefixer",
    ],
};

module.exports = nextConfig;
