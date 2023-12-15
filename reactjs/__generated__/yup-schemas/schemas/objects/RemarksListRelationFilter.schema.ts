// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksWhereInputObjectSchema } from "../internals";

export const RemarksListRelationFilterObjectSchema = Yup.object({
  every: RemarksWhereInputObjectSchema,
  some: RemarksWhereInputObjectSchema,
  none: RemarksWhereInputObjectSchema,
});
