import * as Yup from "yup";
import { MarginModelWhereUniqueInputObjectSchema } from "./internals";

export const MarginModelDeleteOneSchema = Yup.object({
  where: MarginModelWhereUniqueInputObjectSchema,
}).required();
