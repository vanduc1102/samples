// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { MarginModelCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelCreateOrConnectWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUpsertWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelWhereUniqueInputObjectSchema } from "../internals";
import { MarginModelUpdateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedUpdateWithoutHardwareInputObjectSchema } from "../internals";

export const MarginModelUpdateOneRequiredWithoutHardwareNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MarginModelCreateWithoutHardwareInputObjectSchema,
      MarginModelUncheckedCreateWithoutHardwareInputObjectSchema,
    ]),
    connectOrCreate: MarginModelCreateOrConnectWithoutHardwareInputObjectSchema,
    upsert: MarginModelUpsertWithoutHardwareInputObjectSchema,
    connect: MarginModelWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      MarginModelUpdateWithoutHardwareInputObjectSchema,
      MarginModelUncheckedUpdateWithoutHardwareInputObjectSchema,
    ]),
  });