import * as Yup from "yup";
import { RoleCreateInputObjectSchema } from "./internals";

export const RoleCreateSchema = Yup.object({
  data: RoleCreateInputObjectSchema,
}).required();
