import * as Yup from "yup";
import { HardwareCreateInputObjectSchema } from "./internals";

export const HardwareCreateSchema = Yup.object({
  data: HardwareCreateInputObjectSchema,
}).required();
