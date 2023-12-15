import * as Yup from "yup";
import { RemarksCreateInputObjectSchema } from "./internals";

export const RemarksCreateSchema = Yup.object({
  data: RemarksCreateInputObjectSchema,
}).required();
