import * as Yup from "yup";
import {
  LinkUpdateInputObjectSchema,
  LinkWhereUniqueInputObjectSchema,
} from "./internals";

export const LinkUpdateOneSchema = Yup.object({
  data: LinkUpdateInputObjectSchema,
  where: LinkWhereUniqueInputObjectSchema,
}).required();
