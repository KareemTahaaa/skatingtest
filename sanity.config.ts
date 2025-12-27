import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schema"

const config = defineConfig({
  name: "default",
  title: "الاتحاد المصري للتزلج",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0ujc3v49",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/sanity",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

export default config
export { schemaTypes }
