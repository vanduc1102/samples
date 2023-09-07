// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkWhereInputObjectSchema } from "../internals";

export const LinkListRelationFilterObjectSchema = Yup.object({
  every: LinkWhereInputObjectSchema,
  some: LinkWhereInputObjectSchema,
  none: LinkWhereInputObjectSchema,
});
