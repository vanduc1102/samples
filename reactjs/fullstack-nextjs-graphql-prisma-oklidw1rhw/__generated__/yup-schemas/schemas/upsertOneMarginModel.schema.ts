import * as Yup from "yup";
import {
  MarginModelWhereUniqueInputObjectSchema,
  MarginModelCreateInputObjectSchema,
  MarginModelUpdateInputObjectSchema,
} from "./internals";

export const MarginModelUpsertSchema = Yup.object({
  where: MarginModelWhereUniqueInputObjectSchema,
  data: MarginModelCreateInputObjectSchema,
  update: MarginModelUpdateInputObjectSchema,
}).required();
