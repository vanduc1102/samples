// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { MarginModelWhereInputObjectSchema } from "../internals";

export const MarginModelRelationFilterObjectSchema = Yup.object({
  is: Yup.mixed().oneOfSchemas([MarginModelWhereInputObjectSchema]),
  isNot: Yup.mixed().oneOfSchemas([MarginModelWhereInputObjectSchema]),
});
