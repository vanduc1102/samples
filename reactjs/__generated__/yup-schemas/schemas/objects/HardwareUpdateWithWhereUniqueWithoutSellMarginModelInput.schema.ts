// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareWhereUniqueInputObjectSchema } from "../internals";
import { HardwareUpdateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedUpdateWithoutSellMarginModelInputObjectSchema } from "../internals";

export const HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputObjectSchema =
  Yup.object({
    where: HardwareWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      HardwareUpdateWithoutSellMarginModelInputObjectSchema,
      HardwareUncheckedUpdateWithoutSellMarginModelInputObjectSchema,
    ]),
  });
