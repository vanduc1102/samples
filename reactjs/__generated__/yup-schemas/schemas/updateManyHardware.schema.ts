import * as Yup from "yup";
import {
  HardwareUpdateManyMutationInputObjectSchema,
  HardwareWhereInputObjectSchema,
} from "./internals";

export const HardwareUpdateManySchema = Yup.object({
  data: HardwareUpdateManyMutationInputObjectSchema,
  where: HardwareWhereInputObjectSchema,
}).required();
