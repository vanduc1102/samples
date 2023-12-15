// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareCreateOrConnectWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareCreateManySellMarginModelInputEnvelopeObjectSchema } from "../internals";
import { HardwareWhereUniqueInputObjectSchema } from "../internals";

export const HardwareCreateNestedManyWithoutSellMarginModelInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      HardwareCreateWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(HardwareCreateWithoutSellMarginModelInputObjectSchema),
      HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(
        HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema
      ),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      HardwareCreateOrConnectWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(
        HardwareCreateOrConnectWithoutSellMarginModelInputObjectSchema
      ),
    ]),
    createMany: HardwareCreateManySellMarginModelInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      HardwareWhereUniqueInputObjectSchema,
      Yup.array().of(HardwareWhereUniqueInputObjectSchema),
    ]),
  });
