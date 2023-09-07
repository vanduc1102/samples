// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUncheckedCreateWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareCreateOrConnectWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareCreateManySellMarginModelInputEnvelopeObjectSchema } from "../internals";
import { HardwareWhereUniqueInputObjectSchema } from "../internals";
import { HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareUpdateManyWithWhereWithoutSellMarginModelInputObjectSchema } from "../internals";
import { HardwareScalarWhereInputObjectSchema } from "../internals";

export const HardwareUncheckedUpdateManyWithoutSellMarginModelNestedInputObjectSchema =
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
    upsert: Yup.mixed().oneOfSchemas([
      HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(
        HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputObjectSchema
      ),
    ]),
    createMany: HardwareCreateManySellMarginModelInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      HardwareWhereUniqueInputObjectSchema,
      Yup.array().of(HardwareWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      HardwareWhereUniqueInputObjectSchema,
      Yup.array().of(HardwareWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      HardwareWhereUniqueInputObjectSchema,
      Yup.array().of(HardwareWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      HardwareWhereUniqueInputObjectSchema,
      Yup.array().of(HardwareWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(
        HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      HardwareUpdateManyWithWhereWithoutSellMarginModelInputObjectSchema,
      Yup.array().of(
        HardwareUpdateManyWithWhereWithoutSellMarginModelInputObjectSchema
      ),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      HardwareScalarWhereInputObjectSchema,
      Yup.array().of(HardwareScalarWhereInputObjectSchema),
    ]),
  });
