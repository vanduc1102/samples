import Router from "koa-router";

const router = new Router();

router.get("/health", (ctx, next) => {
  ctx.body = "Ok con de!";
});

export default router.routes();
