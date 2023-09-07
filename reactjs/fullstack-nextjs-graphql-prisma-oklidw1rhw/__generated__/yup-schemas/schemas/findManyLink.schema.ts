import * as Yup from "yup";
import {
  LinkWhereInputObjectSchema,
  LinkOrderByWithRelationInputObjectSchema,
  LinkWhereUniqueInputObjectSchema,
} from "./internals";
import { LinkScalarFieldEnumSchema } from "./internals";

export const LinkFindManySchema = Yup.object({
  where: LinkWhereInputObjectSchema,
  orderBy: LinkOrderByWithRelationInputObjectSchema,
  cursor: LinkWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(LinkScalarFieldEnumSchema),
}).required();
