// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { SortOrderInputObjectSchema } from "../internals";
import { MarginModelCountOrderByAggregateInputObjectSchema } from "../internals";
import { MarginModelAvgOrderByAggregateInputObjectSchema } from "../internals";
import { MarginModelMaxOrderByAggregateInputObjectSchema } from "../internals";
import { MarginModelMinOrderByAggregateInputObjectSchema } from "../internals";
import { MarginModelSumOrderByAggregateInputObjectSchema } from "../internals";

export const MarginModelOrderByWithAggregationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  productCode: SortOrderSchema,
  isActive: SortOrderSchema,
  productType: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  productNameLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  productNameValue: SortOrderSchema,
  remarksLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  remarksValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel1Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel1Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel2Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel2Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel3Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel3Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel4Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel4Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel5Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel5Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel6Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel6Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel7Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel7Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel8Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel8Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel9Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel9Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel10Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel10Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel11Label: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  priceLevel11Value: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  _count: MarginModelCountOrderByAggregateInputObjectSchema,
  _avg: MarginModelAvgOrderByAggregateInputObjectSchema,
  _max: MarginModelMaxOrderByAggregateInputObjectSchema,
  _min: MarginModelMinOrderByAggregateInputObjectSchema,
  _sum: MarginModelSumOrderByAggregateInputObjectSchema,
});
