import pino from "pino";

const { LOG_LEVEL = "debug", APP_NAME = "Web" } = process.env;
const isProduction = process.env.NODE_ENV === "production";

const logger = pino({
  name: APP_NAME,
  level: LOG_LEVEL,
  ...(!isProduction && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        levelFirst: true,
        translateTime: true,
      },
    },
  }),
});
/**
 *
 * @param module for categorizing log messages
 * @returns
 */
export default function getLogger(module = "") {
  if (!module) {
    return logger;
  }

  return logger.child({
    module,
  });
}
