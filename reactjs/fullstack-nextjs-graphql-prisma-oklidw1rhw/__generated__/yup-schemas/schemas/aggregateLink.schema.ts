import * as Yup from "yup";
import {
  LinkWhereInputObjectSchema,
  LinkOrderByWithRelationInputObjectSchema,
  LinkWhereUniqueInputObjectSchema,
} from "./internals";

export const LinkAggregateSchema = Yup.object({
  where: LinkWhereInputObjectSchema,
  orderBy: LinkOrderByWithRelationInputObjectSchema,
  cursor: LinkWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required();
