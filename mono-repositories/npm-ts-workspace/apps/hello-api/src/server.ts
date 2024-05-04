import createApp from "./app";
import getLogger from "./configs/logger";

const logger = getLogger("server.ts");
const port = Number.parseInt(process.env.PORT || "4000", 10);

async function main() {
  const app = await createApp();
  const server = app.listen(port, () => {
    logger.info(`🚀 Server is running on port http://localhost:${port}/`);
  });

  server.on("error", (error) => {
    logger.error(error, "Can not start server at %d", port);
  });

  return server;
}

main().catch(logger.error);
