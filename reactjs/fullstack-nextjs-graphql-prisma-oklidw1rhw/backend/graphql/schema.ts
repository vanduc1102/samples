// import "./types/Role";
// import "./types/User";
// import "./types/Link";

import { generateAllCrud } from "./__generated__/autocrud";
import { builder } from "./builder";

generateAllCrud()


export const schema = builder.toSchema();
