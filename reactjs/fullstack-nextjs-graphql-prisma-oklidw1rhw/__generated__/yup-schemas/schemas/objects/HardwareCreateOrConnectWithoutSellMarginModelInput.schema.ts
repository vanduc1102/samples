// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareWhereUniqueInputObjectSchema } from "../internals";
import { HardwareCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema } from "../internals";

export const HardwareCreateOrConnectWithoutSellMarginModelInputObjectSchema =
  Yup.object({
    where: HardwareWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      HardwareCreateWithoutSellMarginModelInputObjectSchema,
      HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema,
    ]),
  });
