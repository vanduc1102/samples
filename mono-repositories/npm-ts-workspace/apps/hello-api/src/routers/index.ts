import compose from "koa-compose";

import healthRoutes from "./health";
import productRoutes from "./product";

export default compose([healthRoutes, productRoutes]);
