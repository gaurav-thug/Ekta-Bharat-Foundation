import app from "./app";
import { logger } from "./lib/logger";

// Vercel serverless: import this module and call the exported app as a handler.
// Traditional server (Replit, local): PORT env var is set, so app.listen() runs.
export default app;

const rawPort = process.env["PORT"];

if (rawPort) {
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    logger.error({ rawPort }, "Invalid PORT value");
    process.exit(1);
  }

  app.listen(port, (err?: Error) => {
    if (err) {
      logger.error({ err }, "Error listening on port");
      process.exit(1);
    }
    logger.info({ port }, "Server listening");
  });
}
