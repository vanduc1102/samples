// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { UserOrderByRelationAggregateInputObjectSchema } from "../internals";

export const RoleOrderByWithRelationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  name: SortOrderSchema,
  code: SortOrderSchema,
  users: UserOrderByRelationAggregateInputObjectSchema,
});
