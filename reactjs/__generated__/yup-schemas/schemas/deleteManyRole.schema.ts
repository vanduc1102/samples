import * as Yup from "yup";
import { RoleWhereInputObjectSchema } from "./internals";

export const RoleDeleteManySchema = Yup.object({
  RoleWhereInputObjectSchema,
}).required();
