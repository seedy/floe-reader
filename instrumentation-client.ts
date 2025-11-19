import * as Sentry from "@sentry/nextjs";
Sentry.init({
  dsn: "https://ac48c60c5f81e711088a39cdaee7ea4e@o4507867510276096.ingest.de.sentry.io/4507867515584592",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  // Enable logs to be sent to Sentry
  enableLogs: true,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/configuration/options/#traces-sample-rate
  tracesSampleRate: 1.0,
});
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;