// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringFilterObjectSchema } from "../internals";
import { BoolFilterObjectSchema } from "../internals";
import { StringNullableFilterObjectSchema } from "../internals";
import { FloatNullableFilterObjectSchema } from "../internals";

export const HardwareScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => HardwareScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => HardwareScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => HardwareScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => HardwareScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => HardwareScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  productCode: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  isActive: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema, Yup.boolean()]),
  productType: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  productNameLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  productNameValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  productShortDescriptionLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  productShortDescriptionValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  remarksLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  remarksValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  manufacturerLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  manufacturerValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  manufPartsNumberLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  manufPartsNumberValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  speedcastPartsNumberLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  speedcastPartsNumberValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  standardWarrantyLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  standardWarrantyValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  delivryLeadTimeLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  delivryLeadTimeValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  iNCOTERMLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  iNCOTERMValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  costValue: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOwnMarginModel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  leaseToOperateMarginModel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  sellRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOwnRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  leaseToOperateRoundup: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  pickUpLocationValue: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageWeightLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageWeightValue: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  packageWeightUnit: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageLengthLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageLengthValue: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  packageLengthUnit: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageWidthLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageWidthValue: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  packageWidthUnit: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageHeightLabel: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  packageHeightValue: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  packageHeightUnit: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  sellAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn1_5MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn6_11MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn12_23MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn24_35MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn36_47MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn48_59MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOwn60MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate1_5MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate6_11MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate12_23MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate24_35MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate36_47MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate48_59MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  leaseToOperate60MthAllowed: Yup.mixed().oneOfSchemas([
    BoolFilterObjectSchema,
    Yup.boolean(),
  ]),
  sellMarginModelName: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
});
