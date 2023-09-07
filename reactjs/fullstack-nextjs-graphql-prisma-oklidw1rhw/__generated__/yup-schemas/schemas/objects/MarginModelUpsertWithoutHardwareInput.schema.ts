// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { MarginModelUpdateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedUpdateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelCreateWithoutHardwareInputObjectSchema } from "../internals";
import { MarginModelUncheckedCreateWithoutHardwareInputObjectSchema } from "../internals";

export const MarginModelUpsertWithoutHardwareInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    MarginModelUpdateWithoutHardwareInputObjectSchema,
    MarginModelUncheckedUpdateWithoutHardwareInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    MarginModelCreateWithoutHardwareInputObjectSchema,
    MarginModelUncheckedCreateWithoutHardwareInputObjectSchema,
  ]),
});
