// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleWhereInputObjectSchema } from "../internals";

export const RoleRelationFilterObjectSchema = Yup.object({
  is: Yup.mixed().oneOfSchemas([RoleWhereInputObjectSchema]),
  isNot: Yup.mixed().oneOfSchemas([RoleWhereInputObjectSchema]),
});
