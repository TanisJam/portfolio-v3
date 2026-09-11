import { defineConfig } from "astro/config";
import { SITE } from "./src/data";

// https://astro.build/config
export default defineConfig({
  site: SITE.siteUrl,
});
