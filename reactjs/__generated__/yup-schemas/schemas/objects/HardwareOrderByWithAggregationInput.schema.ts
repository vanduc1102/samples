// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { SortOrderInputObjectSchema } from "../internals";
import { HardwareCountOrderByAggregateInputObjectSchema } from "../internals";
import { HardwareAvgOrderByAggregateInputObjectSchema } from "../internals";
import { HardwareMaxOrderByAggregateInputObjectSchema } from "../internals";
import { HardwareMinOrderByAggregateInputObjectSchema } from "../internals";
import { HardwareSumOrderByAggregateInputObjectSchema } from "../internals";

export const HardwareOrderByWithAggregationInputObjectSchema = Yup.object({
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
  productNameValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  productShortDescriptionLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  productShortDescriptionValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  remarksLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  remarksValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  manufacturerLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  manufacturerValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  manufPartsNumberLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  manufPartsNumberValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  speedcastPartsNumberLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  speedcastPartsNumberValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  standardWarrantyLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  standardWarrantyValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  delivryLeadTimeLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  delivryLeadTimeValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  iNCOTERMLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  iNCOTERMValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  costValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  leaseToOwnMarginModel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  leaseToOperateMarginModel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  sellRoundup: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  leaseToOwnRoundup: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  leaseToOperateRoundup: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  pickUpLocationValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWeightLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWeightValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWeightUnit: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageLengthLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageLengthValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageLengthUnit: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWidthLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWidthValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageWidthUnit: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageHeightLabel: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageHeightValue: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  packageHeightUnit: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  sellAllowed: SortOrderSchema,
  leaseToOwn1_5MthAllowed: SortOrderSchema,
  leaseToOwn6_11MthAllowed: SortOrderSchema,
  leaseToOwn12_23MthAllowed: SortOrderSchema,
  leaseToOwn24_35MthAllowed: SortOrderSchema,
  leaseToOwn36_47MthAllowed: SortOrderSchema,
  leaseToOwn48_59MthAllowed: SortOrderSchema,
  leaseToOwn60MthAllowed: SortOrderSchema,
  leaseToOperate1_5MthAllowed: SortOrderSchema,
  leaseToOperate6_11MthAllowed: SortOrderSchema,
  leaseToOperate12_23MthAllowed: SortOrderSchema,
  leaseToOperate24_35MthAllowed: SortOrderSchema,
  leaseToOperate36_47MthAllowed: SortOrderSchema,
  leaseToOperate48_59MthAllowed: SortOrderSchema,
  leaseToOperate60MthAllowed: SortOrderSchema,
  sellMarginModelName: SortOrderSchema,
  _count: HardwareCountOrderByAggregateInputObjectSchema,
  _avg: HardwareAvgOrderByAggregateInputObjectSchema,
  _max: HardwareMaxOrderByAggregateInputObjectSchema,
  _min: HardwareMinOrderByAggregateInputObjectSchema,
  _sum: HardwareSumOrderByAggregateInputObjectSchema,
});
