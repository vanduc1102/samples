import * as Yup from "yup";
import { HardwareWhereUniqueInputObjectSchema } from "./internals";

export const HardwareDeleteOneSchema = Yup.object({
  where: HardwareWhereUniqueInputObjectSchema,
}).required();
