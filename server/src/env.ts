import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_DRIZZLE_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: {
    AUTH_DRIZZLE_URL: process.env.AUTH_DRIZZLE_URL,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
