// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const RemarksUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  content: Yup.string().required(),
  trashed: Yup.boolean(),
});
