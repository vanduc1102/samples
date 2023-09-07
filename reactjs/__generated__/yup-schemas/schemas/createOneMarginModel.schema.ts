import * as Yup from "yup";
import { MarginModelCreateInputObjectSchema } from "./internals";

export const MarginModelCreateSchema = Yup.object({
  data: MarginModelCreateInputObjectSchema,
}).required();
