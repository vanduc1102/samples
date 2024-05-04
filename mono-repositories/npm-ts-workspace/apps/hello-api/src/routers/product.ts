import Router from "koa-router";
import { foo, baa } from "lib-hello";
import getLogger from "../configs/logger";

const logger = getLogger("src/routers/product.ts");

const router = new Router({
  prefix: "/api/products",
});

router.get("/foo", (ctx, next) => {
  logger.info("products: " + ctx.req.url);
  ctx.body = {
    data: "products: " + foo(),
  };
});

router.get("/baa", (ctx, next) => {
  logger.info("products: " + ctx.req.url);
  ctx.body = {
    data: "products: " + baa(),
  };
});

export default router.routes();
