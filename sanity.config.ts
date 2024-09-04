import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {visionTool} from '@sanity/vision'
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY || "",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2024-05-13",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema:schemas
});

export default config;
