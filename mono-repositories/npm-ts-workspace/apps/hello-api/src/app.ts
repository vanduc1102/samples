import Koa from "koa";
import allRoutes from "./routers";
import cors from "@koa/cors";

async function createApp() {
  const app = new Koa();

  app.use(
    cors({
      origin: "*",
    }),
  );

  app.use(allRoutes);

  return app;
}

export default createApp;
