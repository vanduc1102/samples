// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { UserOrderByWithRelationInputObjectSchema } from "../internals";

export const RemarksOrderByWithRelationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  content: SortOrderSchema,
  trashed: SortOrderSchema,
  userId: SortOrderSchema,
  user: UserOrderByWithRelationInputObjectSchema,
});
