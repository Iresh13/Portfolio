import { createClient } from "@sanity/client";
import z from "zod";

const AppConfigSchema = z.object({
  sanityProjectId: z.string(),
  sanityDataset: z.string(),
  sanityApiVersion: z.string(),
});

export type AppConfig = z.infer<typeof AppConfigSchema>;

const loadConfig = (): AppConfig => {
  return AppConfigSchema.parse({
    sanityDataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    sanityProjectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    sanityApiVersion:
      process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-03",
  });
};

const config = loadConfig();

export const sanityService = createClient({
  projectId: config.sanityProjectId,
  dataset: config.sanityDataset,
  apiVersion: config.sanityApiVersion,
  useCdn: true,
});
