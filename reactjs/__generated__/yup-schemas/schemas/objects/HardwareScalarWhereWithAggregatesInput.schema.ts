// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntWithAggregatesFilterObjectSchema } from "../internals";
import { DateTimeWithAggregatesFilterObjectSchema } from "../internals";
import { StringWithAggregatesFilterObjectSchema } from "../internals";
import { BoolWithAggregatesFilterObjectSchema } from "../internals";
import { StringNullableWithAggregatesFilterObjectSchema } from "../internals";
import { FloatNullableWithAggregatesFilterObjectSchema } from "../internals";

export const HardwareScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      HardwareScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        HardwareScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      HardwareScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      HardwareScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        HardwareScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  productCode: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  isActive: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  productType: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  productNameLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  productNameValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  productShortDescriptionLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  productShortDescriptionValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  remarksLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  remarksValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  manufacturerLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  manufacturerValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  manufPartsNumberLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  manufPartsNumberValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  speedcastPartsNumberLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  speedcastPartsNumberValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  standardWarrantyLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  standardWarrantyValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  delivryLeadTimeLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  delivryLeadTimeValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  iNCOTERMLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  iNCOTERMValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  costValue: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOwnMarginModel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  leaseToOperateMarginModel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  sellRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOwnRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOperateRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  pickUpLocationValue: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageWeightLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageWeightValue: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  packageWeightUnit: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageLengthLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageLengthValue: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  packageLengthUnit: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageWidthLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageWidthValue: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  packageWidthUnit: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageHeightLabel: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  packageHeightValue: Yup.mixed().oneOfSchemas([
    FloatNullableWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  packageHeightUnit: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  sellAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn1_5MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn6_11MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn12_23MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn24_35MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn36_47MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn48_59MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn60MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate1_5MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate6_11MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate12_23MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate24_35MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate36_47MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate48_59MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate60MthAllowed: Yup.mixed().oneOfSchemas([
    BoolWithAggregatesFilterObjectSchema,
    Yup.boolean(),
  ]),
  sellMarginModelName: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
});
