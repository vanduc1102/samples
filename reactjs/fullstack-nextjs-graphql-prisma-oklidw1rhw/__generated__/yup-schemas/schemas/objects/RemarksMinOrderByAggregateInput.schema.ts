// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const RemarksMinOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  content: SortOrderSchema,
  trashed: SortOrderSchema,
  userId: SortOrderSchema,
});
