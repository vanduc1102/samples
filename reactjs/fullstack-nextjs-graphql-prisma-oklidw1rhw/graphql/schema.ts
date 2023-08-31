import "./types/Role";
import "./types/User";
import "./types/Link";

import { builder } from "./builder";

export const schema = builder.toSchema();
