// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringFilterObjectSchema } from "../internals";
import { BoolFilterObjectSchema } from "../internals";
import { StringNullableFilterObjectSchema } from "../internals";
import { FloatNullableFilterObjectSchema } from "../internals";
import { HardwareListRelationFilterObjectSchema } from "../internals";

export const MarginModelWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => MarginModelWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => MarginModelWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => MarginModelWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => MarginModelWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => MarginModelWhereInputObjectSchema.default(undefined))
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
    StringFilterObjectSchema,
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
  priceLevel1Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel1Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel2Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel2Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel3Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel3Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel4Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel4Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel5Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel5Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel6Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel6Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel7Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel7Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel8Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel8Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel9Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel9Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel10Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel10Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  priceLevel11Label: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  priceLevel11Value: Yup.mixed().oneOfSchemas([
    FloatNullableFilterObjectSchema,
    Yup.number(),
  ]),
  hardware: HardwareListRelationFilterObjectSchema,
});
