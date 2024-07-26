import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1a074827e44f5848925522d7c39af184@o4507666684641280.ingest.us.sentry.io/4507666705022976",

  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});