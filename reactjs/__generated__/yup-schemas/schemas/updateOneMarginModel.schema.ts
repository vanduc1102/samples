import * as Yup from "yup";
import {
  MarginModelUpdateInputObjectSchema,
  MarginModelWhereUniqueInputObjectSchema,
} from "./internals";

export const MarginModelUpdateOneSchema = Yup.object({
  data: MarginModelUpdateInputObjectSchema,
  where: MarginModelWhereUniqueInputObjectSchema,
}).required();
