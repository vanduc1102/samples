import * as Yup from "yup";
import { LinkCreateInputObjectSchema } from "./internals";

export const LinkCreateSchema = Yup.object({
  data: LinkCreateInputObjectSchema,
}).required();
