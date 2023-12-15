import * as Yup from "yup";
import {
  MarginModelUpdateManyMutationInputObjectSchema,
  MarginModelWhereInputObjectSchema,
} from "./internals";

export const MarginModelUpdateManySchema = Yup.object({
  data: MarginModelUpdateManyMutationInputObjectSchema,
  where: MarginModelWhereInputObjectSchema,
}).required();
