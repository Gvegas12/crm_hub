import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export const vitePlugins = () => [react(), svgr()];
