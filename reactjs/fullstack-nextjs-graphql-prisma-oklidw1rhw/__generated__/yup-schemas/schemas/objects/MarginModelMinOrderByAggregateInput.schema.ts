// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const MarginModelMinOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  productCode: SortOrderSchema,
  isActive: SortOrderSchema,
  productType: SortOrderSchema,
  productNameLabel: SortOrderSchema,
  productNameValue: SortOrderSchema,
  remarksLabel: SortOrderSchema,
  remarksValue: SortOrderSchema,
  priceLevel1Label: SortOrderSchema,
  priceLevel1Value: SortOrderSchema,
  priceLevel2Label: SortOrderSchema,
  priceLevel2Value: SortOrderSchema,
  priceLevel3Label: SortOrderSchema,
  priceLevel3Value: SortOrderSchema,
  priceLevel4Label: SortOrderSchema,
  priceLevel4Value: SortOrderSchema,
  priceLevel5Label: SortOrderSchema,
  priceLevel5Value: SortOrderSchema,
  priceLevel6Label: SortOrderSchema,
  priceLevel6Value: SortOrderSchema,
  priceLevel7Label: SortOrderSchema,
  priceLevel7Value: SortOrderSchema,
  priceLevel8Label: SortOrderSchema,
  priceLevel8Value: SortOrderSchema,
  priceLevel9Label: SortOrderSchema,
  priceLevel9Value: SortOrderSchema,
  priceLevel10Label: SortOrderSchema,
  priceLevel10Value: SortOrderSchema,
  priceLevel11Label: SortOrderSchema,
  priceLevel11Value: SortOrderSchema,
});
