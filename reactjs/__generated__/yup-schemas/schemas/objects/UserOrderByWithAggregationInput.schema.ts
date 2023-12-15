// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { SortOrderInputObjectSchema } from "../internals";
import { UserCountOrderByAggregateInputObjectSchema } from "../internals";
import { UserAvgOrderByAggregateInputObjectSchema } from "../internals";
import { UserMaxOrderByAggregateInputObjectSchema } from "../internals";
import { UserMinOrderByAggregateInputObjectSchema } from "../internals";
import { UserSumOrderByAggregateInputObjectSchema } from "../internals";

export const UserOrderByWithAggregationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  email: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  image: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  roleId: SortOrderSchema,
  _count: UserCountOrderByAggregateInputObjectSchema,
  _avg: UserAvgOrderByAggregateInputObjectSchema,
  _max: UserMaxOrderByAggregateInputObjectSchema,
  _min: UserMinOrderByAggregateInputObjectSchema,
  _sum: UserSumOrderByAggregateInputObjectSchema,
});
