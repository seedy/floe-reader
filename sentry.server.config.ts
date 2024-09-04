// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

process.env.NODE_ENV === "production" &&
	Sentry.init({
		dsn: "https://ac48c60c5f81e711088a39cdaee7ea4e@o4507867510276096.ingest.de.sentry.io/4507867515584592",

		// Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
		tracesSampleRate: 1,

		// Setting this option to true will print useful information to the console while you're setting up Sentry.
		debug: false,
	});
