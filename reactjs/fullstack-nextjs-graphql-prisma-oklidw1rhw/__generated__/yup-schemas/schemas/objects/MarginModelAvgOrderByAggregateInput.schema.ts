// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const MarginModelAvgOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  priceLevel1Value: SortOrderSchema,
  priceLevel2Value: SortOrderSchema,
  priceLevel3Value: SortOrderSchema,
  priceLevel4Value: SortOrderSchema,
  priceLevel5Value: SortOrderSchema,
  priceLevel6Value: SortOrderSchema,
  priceLevel7Value: SortOrderSchema,
  priceLevel8Value: SortOrderSchema,
  priceLevel9Value: SortOrderSchema,
  priceLevel10Value: SortOrderSchema,
  priceLevel11Value: SortOrderSchema,
});
