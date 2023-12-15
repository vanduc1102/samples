// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const LinkMaxOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  description: SortOrderSchema,
  url: SortOrderSchema,
  imageUrl: SortOrderSchema,
  category: SortOrderSchema,
});
