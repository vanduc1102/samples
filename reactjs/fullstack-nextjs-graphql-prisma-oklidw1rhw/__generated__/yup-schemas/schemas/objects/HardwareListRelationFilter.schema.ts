// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareWhereInputObjectSchema } from "../internals";

export const HardwareListRelationFilterObjectSchema = Yup.object({
  every: HardwareWhereInputObjectSchema,
  some: HardwareWhereInputObjectSchema,
  none: HardwareWhereInputObjectSchema,
});
