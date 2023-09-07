import * as Yup from "yup";
import { RemarksWhereUniqueInputObjectSchema } from "./internals";

export const RemarksDeleteOneSchema = Yup.object({
  where: RemarksWhereUniqueInputObjectSchema,
}).required();
