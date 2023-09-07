import * as Yup from "yup";
import {
  HardwareUpdateInputObjectSchema,
  HardwareWhereUniqueInputObjectSchema,
} from "./internals";

export const HardwareUpdateOneSchema = Yup.object({
  data: HardwareUpdateInputObjectSchema,
  where: HardwareWhereUniqueInputObjectSchema,
}).required();
