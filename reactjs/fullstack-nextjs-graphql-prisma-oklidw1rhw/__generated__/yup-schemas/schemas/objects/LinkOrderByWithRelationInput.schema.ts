// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { UserOrderByRelationAggregateInputObjectSchema } from "../internals";

export const LinkOrderByWithRelationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  description: SortOrderSchema,
  url: SortOrderSchema,
  imageUrl: SortOrderSchema,
  category: SortOrderSchema,
  users: UserOrderByRelationAggregateInputObjectSchema,
});
