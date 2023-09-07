import * as Yup from "yup";
import {
  MarginModelWhereInputObjectSchema,
  MarginModelOrderByWithRelationInputObjectSchema,
  MarginModelWhereUniqueInputObjectSchema,
} from "./internals";
import { MarginModelScalarFieldEnumSchema } from "./internals";

export const MarginModelFindFirstSchema = Yup.object({
  where: MarginModelWhereInputObjectSchema,
  orderBy: MarginModelOrderByWithRelationInputObjectSchema,
  cursor: MarginModelWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(MarginModelScalarFieldEnumSchema),
}).required();
