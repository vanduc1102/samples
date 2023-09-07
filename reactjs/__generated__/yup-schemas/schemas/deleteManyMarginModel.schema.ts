import * as Yup from "yup";
import { MarginModelWhereInputObjectSchema } from "./internals";

export const MarginModelDeleteManySchema = Yup.object({
  MarginModelWhereInputObjectSchema,
}).required();
