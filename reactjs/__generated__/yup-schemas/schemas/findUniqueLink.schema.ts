import * as Yup from "yup";
import { LinkWhereUniqueInputObjectSchema } from "./internals";

export const LinkFindUniqueSchema = Yup.object({
  where: LinkWhereUniqueInputObjectSchema,
}).required();
