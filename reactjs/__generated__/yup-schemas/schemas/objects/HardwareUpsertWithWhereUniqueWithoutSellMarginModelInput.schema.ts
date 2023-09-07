// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareWhereUniqueInputObjectSchema } from "../internals";
import { HardwareUpdateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedUpdateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema } from "../internals";

export const HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputObjectSchema =
  Yup.object({
    where: HardwareWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      HardwareUpdateWithoutSellMarginModelInputObjectSchema,
      HardwareUncheckedUpdateWithoutSellMarginModelInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      HardwareCreateWithoutSellMarginModelInputObjectSchema,
      HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema,
    ]),
  });
