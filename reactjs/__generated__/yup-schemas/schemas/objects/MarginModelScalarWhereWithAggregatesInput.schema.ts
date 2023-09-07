// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntWithAggregatesFilterObjectSchema } from "../internals";
import { DateTimeWithAggregatesFilterObjectSchema } from "../internals";
import { StringWithAggregatesFilterObjectSchema } from "../internals";
import { BoolWithAggregatesFilterObjectSchema } from "../internals";
import { StringNullableWithAggregatesFilterObjectSchema } from "../internals";
import { FloatNullableWithAggregatesFilterObjectSchema } from "../internals";

export const MarginModelScalarWhereWithAggregatesInputObjectSchema = Yup.object(
  {
    AND: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        MarginModelScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      ),
      Yup.array().of(
        Yup.lazy(() =>
          MarginModelScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
        )
      ),
    ]),
    OR: Yup.array().of(
      Yup.lazy(() =>
        MarginModelScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
    NOT: Yup.mixed().oneOfSchemas([
      Yup.lazy(() =>
        MarginModelScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      ),
      Yup.array().of(
        Yup.lazy(() =>
          MarginModelScalarWhereWithAggregatesInputObjectSchema.default(
            undefined
          )
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
      StringWithAggregatesFilterObjectSchema,
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
    priceLevel1Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel1Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel2Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel2Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel3Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel3Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel4Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel4Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel5Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel5Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel6Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel6Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel7Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel7Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel8Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel8Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel9Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel9Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel10Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel10Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
    priceLevel11Label: Yup.mixed().oneOfSchemas([
      StringNullableWithAggregatesFilterObjectSchema,
      Yup.string(),
    ]),
    priceLevel11Value: Yup.mixed().oneOfSchemas([
      FloatNullableWithAggregatesFilterObjectSchema,
      Yup.number(),
    ]),
  }
);
