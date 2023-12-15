// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { RoleCountOrderByAggregateInputObjectSchema } from "../internals";
import { RoleAvgOrderByAggregateInputObjectSchema } from "../internals";
import { RoleMaxOrderByAggregateInputObjectSchema } from "../internals";
import { RoleMinOrderByAggregateInputObjectSchema } from "../internals";
import { RoleSumOrderByAggregateInputObjectSchema } from "../internals";

export const RoleOrderByWithAggregationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  name: SortOrderSchema,
  code: SortOrderSchema,
  _count: RoleCountOrderByAggregateInputObjectSchema,
  _avg: RoleAvgOrderByAggregateInputObjectSchema,
  _max: RoleMaxOrderByAggregateInputObjectSchema,
  _min: RoleMinOrderByAggregateInputObjectSchema,
  _sum: RoleSumOrderByAggregateInputObjectSchema,
});
