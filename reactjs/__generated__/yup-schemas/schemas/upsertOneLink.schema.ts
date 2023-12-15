import * as Yup from "yup";
import {
  LinkWhereUniqueInputObjectSchema,
  LinkCreateInputObjectSchema,
  LinkUpdateInputObjectSchema,
} from "./internals";

export const LinkUpsertSchema = Yup.object({
  where: LinkWhereUniqueInputObjectSchema,
  data: LinkCreateInputObjectSchema,
  update: LinkUpdateInputObjectSchema,
}).required();
