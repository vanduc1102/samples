import * as Yup from "yup";
import { RemarksWhereInputObjectSchema } from "./internals";

export const RemarksDeleteManySchema = Yup.object({
  RemarksWhereInputObjectSchema,
}).required();
