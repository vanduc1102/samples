import * as Yup from "yup";
import {
  RemarksUpdateManyMutationInputObjectSchema,
  RemarksWhereInputObjectSchema,
} from "./internals";

export const RemarksUpdateManySchema = Yup.object({
  data: RemarksUpdateManyMutationInputObjectSchema,
  where: RemarksWhereInputObjectSchema,
}).required();
