import * as Yup from "yup";
import { HardwareWhereInputObjectSchema } from "./internals";

export const HardwareDeleteManySchema = Yup.object({
  HardwareWhereInputObjectSchema,
}).required();
