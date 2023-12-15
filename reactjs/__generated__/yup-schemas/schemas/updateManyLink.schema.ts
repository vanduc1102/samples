import * as Yup from "yup";
import {
  LinkUpdateManyMutationInputObjectSchema,
  LinkWhereInputObjectSchema,
} from "./internals";

export const LinkUpdateManySchema = Yup.object({
  data: LinkUpdateManyMutationInputObjectSchema,
  where: LinkWhereInputObjectSchema,
}).required();
