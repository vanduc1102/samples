// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const HardwareWhereUniqueInputObjectSchema = Yup.object({
  id: Yup.number(),
  productCode: Yup.string(),
});
