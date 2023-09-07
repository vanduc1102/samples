import * as Yup from "yup";
import { RoleWhereUniqueInputObjectSchema } from "./internals";

export const RoleDeleteOneSchema = Yup.object({
  where: RoleWhereUniqueInputObjectSchema,
}).required();
