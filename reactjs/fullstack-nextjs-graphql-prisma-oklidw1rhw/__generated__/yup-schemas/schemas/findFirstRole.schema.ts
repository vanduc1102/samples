import * as Yup from "yup";
import {
  RoleWhereInputObjectSchema,
  RoleOrderByWithRelationInputObjectSchema,
  RoleWhereUniqueInputObjectSchema,
} from "./internals";
import { RoleScalarFieldEnumSchema } from "./internals";

export const RoleFindFirstSchema = Yup.object({
  where: RoleWhereInputObjectSchema,
  orderBy: RoleOrderByWithRelationInputObjectSchema,
  cursor: RoleWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(RoleScalarFieldEnumSchema),
}).required();
