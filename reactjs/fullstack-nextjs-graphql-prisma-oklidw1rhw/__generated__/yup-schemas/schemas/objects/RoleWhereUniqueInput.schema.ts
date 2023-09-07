// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const RoleWhereUniqueInputObjectSchema = Yup.object({
  id: Yup.number(),
  code: Yup.string(),
});
