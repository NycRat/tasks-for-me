import { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
        colors: {
            background: "#FAFAFA",
            surface: "#F6F7F8",
            highlight: "#EBEDF0",
            text: "#333333",
            primary: "#0077FF",
            secondary: "#e6e1e6",
            success: "#28A745",
            warning: "#FFC107",
            error: "#DC3545",
            info: "#17A2B8",
            muted: "#D1D5DB",
        },
    },
    plugins: [],
};

export default config;
