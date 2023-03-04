import { TRPCClientError } from "@trpc/client";
import { AppRouter } from "server/routers/_app";

const isTRPCClientError = (
    cause: unknown,
): cause is TRPCClientError<AppRouter> => {
    return cause instanceof TRPCClientError;
}

export default isTRPCClientError