import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		MAILER_PORT: z.string().min(1),
		MAILER_HOST: z.string().min(1),
		MAILER_USER: z.string().email(),
		MAILER_PASSWORD: z.string().min(1),
		SHARE_PASSWORD: z.string().min(1),
		SENTRY_AUTH_TOKEN: z.string().min(1),
	},
	client: {
		NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(1),
		NEXT_PUBLIC_DISPLAY_SHARE: z
			.enum(["true", "false"])
			.transform((v) => v === "true"),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
		NEXT_PUBLIC_DISPLAY_SHARE: process.env.NEXT_PUBLIC_DISPLAY_SHARE,
	},
});
