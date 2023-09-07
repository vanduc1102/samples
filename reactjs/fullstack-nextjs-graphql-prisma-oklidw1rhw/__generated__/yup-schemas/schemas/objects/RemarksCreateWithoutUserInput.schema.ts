// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const RemarksCreateWithoutUserInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  content: Yup.string().required(),
  trashed: Yup.boolean(),
});
