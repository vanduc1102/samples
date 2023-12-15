import * as Yup from "yup";
import { MarginModelWhereUniqueInputObjectSchema } from "./internals";

export const MarginModelFindUniqueSchema = Yup.object({
  where: MarginModelWhereUniqueInputObjectSchema,
}).required();
