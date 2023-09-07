import * as Yup from "yup";
import {
  HardwareWhereUniqueInputObjectSchema,
  HardwareCreateInputObjectSchema,
  HardwareUpdateInputObjectSchema,
} from "./internals";

export const HardwareUpsertSchema = Yup.object({
  where: HardwareWhereUniqueInputObjectSchema,
  data: HardwareCreateInputObjectSchema,
  update: HardwareUpdateInputObjectSchema,
}).required();
