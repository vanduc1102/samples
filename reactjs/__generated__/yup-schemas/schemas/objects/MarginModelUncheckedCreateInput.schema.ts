// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareUncheckedCreateNestedManyWithoutSellMarginModelInputObjectSchema } from "../internals";

export const MarginModelUncheckedCreateInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  productCode: Yup.string().required(),
  isActive: Yup.boolean(),
  productType: Yup.mixed().oneOfSchemas([Yup.string()]),
  productNameLabel: Yup.mixed().oneOfSchemas([Yup.string()]),
  productNameValue: Yup.string().required(),
  remarksLabel: Yup.mixed().oneOfSchemas([Yup.string()]),
  remarksValue: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel1Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel1Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel2Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel2Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel3Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel3Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel4Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel4Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel5Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel5Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel6Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel6Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel7Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel7Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel8Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel8Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel9Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel9Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel10Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel10Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  priceLevel11Label: Yup.mixed().oneOfSchemas([Yup.string()]),
  priceLevel11Value: Yup.mixed().oneOfSchemas([Yup.number()]),
  hardware:
    HardwareUncheckedCreateNestedManyWithoutSellMarginModelInputObjectSchema,
});
