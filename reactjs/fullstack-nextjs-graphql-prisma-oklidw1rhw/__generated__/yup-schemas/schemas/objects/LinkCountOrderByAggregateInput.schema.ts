// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const LinkCountOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  description: SortOrderSchema,
  url: SortOrderSchema,
  imageUrl: SortOrderSchema,
  category: SortOrderSchema,
});
