import * as Yup from "yup";
import {
  RoleUpdateManyMutationInputObjectSchema,
  RoleWhereInputObjectSchema,
} from "./internals";

export const RoleUpdateManySchema = Yup.object({
  data: RoleUpdateManyMutationInputObjectSchema,
  where: RoleWhereInputObjectSchema,
}).required();
