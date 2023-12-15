// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { RemarksCountOrderByAggregateInputObjectSchema } from "../internals";
import { RemarksAvgOrderByAggregateInputObjectSchema } from "../internals";
import { RemarksMaxOrderByAggregateInputObjectSchema } from "../internals";
import { RemarksMinOrderByAggregateInputObjectSchema } from "../internals";
import { RemarksSumOrderByAggregateInputObjectSchema } from "../internals";

export const RemarksOrderByWithAggregationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  content: SortOrderSchema,
  trashed: SortOrderSchema,
  userId: SortOrderSchema,
  _count: RemarksCountOrderByAggregateInputObjectSchema,
  _avg: RemarksAvgOrderByAggregateInputObjectSchema,
  _max: RemarksMaxOrderByAggregateInputObjectSchema,
  _min: RemarksMinOrderByAggregateInputObjectSchema,
  _sum: RemarksSumOrderByAggregateInputObjectSchema,
});
