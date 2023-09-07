import * as Yup from "yup";
import {
  RoleWhereInputObjectSchema,
  RoleOrderByWithRelationInputObjectSchema,
  RoleWhereUniqueInputObjectSchema,
} from "./internals";

export const RoleAggregateSchema = Yup.object({
  where: RoleWhereInputObjectSchema,
  orderBy: RoleOrderByWithRelationInputObjectSchema,
  cursor: RoleWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required();
