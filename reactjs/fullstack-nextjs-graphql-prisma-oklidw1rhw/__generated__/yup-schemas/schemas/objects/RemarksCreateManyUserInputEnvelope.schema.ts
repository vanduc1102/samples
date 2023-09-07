// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksCreateManyUserInputObjectSchema } from "../internals";

export const RemarksCreateManyUserInputEnvelopeObjectSchema = Yup.object({
  data: Yup.mixed().oneOfSchemas([
    RemarksCreateManyUserInputObjectSchema,
    Yup.array().of(RemarksCreateManyUserInputObjectSchema),
  ]),
  skipDuplicates: Yup.boolean(),
});
