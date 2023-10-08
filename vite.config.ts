/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";

import { viteBuildConfig } from "./config/vite";

// https://vitejs.dev/config/
export default defineConfig(viteBuildConfig());
