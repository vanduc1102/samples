import * as Yup from "yup";
import {
  RoleWhereUniqueInputObjectSchema,
  RoleCreateInputObjectSchema,
  RoleUpdateInputObjectSchema,
} from "./internals";

export const RoleUpsertSchema = Yup.object({
  where: RoleWhereUniqueInputObjectSchema,
  data: RoleCreateInputObjectSchema,
  update: RoleUpdateInputObjectSchema,
}).required();
