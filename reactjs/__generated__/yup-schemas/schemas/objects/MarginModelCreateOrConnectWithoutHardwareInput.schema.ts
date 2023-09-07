// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { MarginModelWhereUniqueInputObjectSchema } from "../internals";
import { MarginModelCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedCreateWithoutHardwareInputObjectSchema } from "../internals";

export const MarginModelCreateOrConnectWithoutHardwareInputObjectSchema =
  Yup.object({
    where: MarginModelWhereUniqueInputObjectSchema,
    create: Yup.mixed().oneOfSchemas([
      MarginModelCreateWithoutHardwareInputObjectSchema,
      MarginModelUncheckedCreateWithoutHardwareInputObjectSchema,
    ]),
  });
