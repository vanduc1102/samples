import * as Yup from "yup";
import {
  RoleWhereInputObjectSchema,
  RoleOrderByWithAggregationInputObjectSchema,
  RoleScalarWhereWithAggregatesInputObjectSchema,
} from "./internals";
import { RoleScalarFieldEnumSchema } from "./internals";

export const RoleGroupBySchema = Yup.object({
  where: RoleWhereInputObjectSchema,
  orderBy: RoleOrderByWithAggregationInputObjectSchema,
  having: RoleScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(RoleScalarFieldEnumSchema).required(),
}).required();
