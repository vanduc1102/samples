import * as Yup from "yup";
import { LinkWhereInputObjectSchema } from "./internals";

export const LinkDeleteManySchema = Yup.object({
  LinkWhereInputObjectSchema,
}).required();
