import * as Yup from "yup";
import {
  RemarksWhereUniqueInputObjectSchema,
  RemarksCreateInputObjectSchema,
  RemarksUpdateInputObjectSchema,
} from "./internals";

export const RemarksUpsertSchema = Yup.object({
  where: RemarksWhereUniqueInputObjectSchema,
  data: RemarksCreateInputObjectSchema,
  update: RemarksUpdateInputObjectSchema,
}).required();
