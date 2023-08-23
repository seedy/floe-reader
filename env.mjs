import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        MAILER_PORT: z.string().min(1),
        MAILER_HOST: z.string().min(1),
        MAILER_USER: z.string().email(),
        MAILER_PASSWORD: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: z.string().min(1)
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID: process.env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID
    }
})