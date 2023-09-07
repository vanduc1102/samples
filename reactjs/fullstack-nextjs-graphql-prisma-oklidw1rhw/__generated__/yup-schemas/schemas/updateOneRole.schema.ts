import * as Yup from "yup";
import {
  RoleUpdateInputObjectSchema,
  RoleWhereUniqueInputObjectSchema,
} from "./internals";

export const RoleUpdateOneSchema = Yup.object({
  data: RoleUpdateInputObjectSchema,
  where: RoleWhereUniqueInputObjectSchema,
}).required();
