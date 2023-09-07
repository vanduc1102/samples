// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { MarginModelCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelCreateOrConnectWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelWhereUniqueInputObjectSchema } from "../internals";

export const MarginModelCreateNestedOneWithoutHardwareInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      MarginModelCreateWithoutHardwareInputObjectSchema,
      MarginModelUncheckedCreateWithoutHardwareInputObjectSchema,
    ]),
    connectOrCreate: MarginModelCreateOrConnectWithoutHardwareInputObjectSchema,
    connect: MarginModelWhereUniqueInputObjectSchema,
  });
