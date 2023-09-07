import * as Yup from "yup";
import {
  RemarksUpdateInputObjectSchema,
  RemarksWhereUniqueInputObjectSchema,
} from "./internals";

export const RemarksUpdateOneSchema = Yup.object({
  data: RemarksUpdateInputObjectSchema,
  where: RemarksWhereUniqueInputObjectSchema,
}).required();
