import * as Yup from "yup";
import { HardwareWhereUniqueInputObjectSchema } from "./internals";

export const HardwareFindUniqueSchema = Yup.object({
  where: HardwareWhereUniqueInputObjectSchema,
}).required();
