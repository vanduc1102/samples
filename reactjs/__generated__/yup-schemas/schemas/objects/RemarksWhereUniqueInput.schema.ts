// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const RemarksWhereUniqueInputObjectSchema = Yup.object({
  id: Yup.number(),
  content: Yup.string(),
});
