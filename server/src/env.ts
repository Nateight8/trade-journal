import { z } from "zod";

const envSchema = z.object({
  AUTH_DRIZZLE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
