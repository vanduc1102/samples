// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const UserWhereUniqueInputObjectSchema = Yup.object({
  id: Yup.number(),
  email: Yup.string(),
});
