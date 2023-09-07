import * as Yup from "yup";
import { LinkWhereUniqueInputObjectSchema } from "./internals";

export const LinkDeleteOneSchema = Yup.object({
  where: LinkWhereUniqueInputObjectSchema,
}).required();
