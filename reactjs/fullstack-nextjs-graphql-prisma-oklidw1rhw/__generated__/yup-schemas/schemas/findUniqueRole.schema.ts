import * as Yup from "yup";
import { RoleWhereUniqueInputObjectSchema } from "./internals";

export const RoleFindUniqueSchema = Yup.object({
  where: RoleWhereUniqueInputObjectSchema,
}).required();
