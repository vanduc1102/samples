import * as Yup from "yup";
import { RemarksWhereUniqueInputObjectSchema } from "./internals";

export const RemarksFindUniqueSchema = Yup.object({
  where: RemarksWhereUniqueInputObjectSchema,
}).required();
