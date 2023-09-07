// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "../internals";
import { StringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { BoolFieldUpdateOperationsInputObjectSchema } from "../internals";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from "../internals";

export const MarginModelUpdateManyMutationInputObjectSchema = Yup.object({
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  productCode: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  isActive: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    BoolFieldUpdateOperationsInputObjectSchema,
  ]),
  productType: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  productNameLabel: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  productNameValue: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  remarksLabel: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  remarksValue: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel1Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel1Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel2Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel2Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel3Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel3Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel4Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel4Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel5Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel5Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel6Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel6Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel7Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel7Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel8Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel8Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel9Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel9Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel10Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel10Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel11Label: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  priceLevel11Value: Yup.mixed().oneOfSchemas([
    Yup.number(),
    NullableFloatFieldUpdateOperationsInputObjectSchema,
  ]),
});
