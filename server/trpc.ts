import { initTRPC } from '@trpc/server';
import { H } from '@highlight-run/node';
import { env } from 'env.mjs';
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create();
H.init({ projectID: env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID })
// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;