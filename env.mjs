import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DISPLAY_SHARE: z
      .enum(["true", "false"])
      .transform((v) => v === "true"),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_DISPLAY_SHARE: process.env.NEXT_PUBLIC_DISPLAY_SHARE,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
  server: {
    MAILER_HOST: z.string().min(1),
    MAILER_PASSWORD: z.string().min(1),
    MAILER_PORT: z.string().min(1),
    MAILER_USER: z.string().email(),
    SENTRY_AUTH_TOKEN: z.string().min(1),
    SHARE_PASSWORD: z.string().min(1),
  },
});
