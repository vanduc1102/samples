import * as Yup from "yup";
import {
  MarginModelWhereInputObjectSchema,
  MarginModelOrderByWithRelationInputObjectSchema,
  MarginModelWhereUniqueInputObjectSchema,
} from "./internals";

export const MarginModelAggregateSchema = Yup.object({
  where: MarginModelWhereInputObjectSchema,
  orderBy: MarginModelOrderByWithRelationInputObjectSchema,
  cursor: MarginModelWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required();
