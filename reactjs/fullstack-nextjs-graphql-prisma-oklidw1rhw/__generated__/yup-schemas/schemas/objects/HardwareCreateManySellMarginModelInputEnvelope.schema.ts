// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareCreateManySellMarginModelInputObjectSchema } from "../internals";

export const HardwareCreateManySellMarginModelInputEnvelopeObjectSchema =
  Yup.object({
    data: Yup.mixed().oneOfSchemas([
      HardwareCreateManySellMarginModelInputObjectSchema,
      Yup.array().of(HardwareCreateManySellMarginModelInputObjectSchema),
    ]),
    skipDuplicates: Yup.boolean(),
  });
