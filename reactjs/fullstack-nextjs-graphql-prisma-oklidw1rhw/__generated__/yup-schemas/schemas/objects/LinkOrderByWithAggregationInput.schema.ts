// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { LinkCountOrderByAggregateInputObjectSchema } from "../internals";
import { LinkAvgOrderByAggregateInputObjectSchema } from "../internals";
import { LinkMaxOrderByAggregateInputObjectSchema } from "../internals";
import { LinkMinOrderByAggregateInputObjectSchema } from "../internals";
import { LinkSumOrderByAggregateInputObjectSchema } from "../internals";

export const LinkOrderByWithAggregationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  title: SortOrderSchema,
  description: SortOrderSchema,
  url: SortOrderSchema,
  imageUrl: SortOrderSchema,
  category: SortOrderSchema,
  _count: LinkCountOrderByAggregateInputObjectSchema,
  _avg: LinkAvgOrderByAggregateInputObjectSchema,
  _max: LinkMaxOrderByAggregateInputObjectSchema,
  _min: LinkMinOrderByAggregateInputObjectSchema,
  _sum: LinkSumOrderByAggregateInputObjectSchema,
});
