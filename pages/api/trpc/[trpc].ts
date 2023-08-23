import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from 'server/routers/_app';
import { Handlers } from '@highlight-run/node';
import { env } from 'env.mjs';
// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
    onError: ({ error, req }) => {
        Handlers.trpcOnError({ error, req }, { projectID: env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID, serviceName: 'trpc' })
    }
});