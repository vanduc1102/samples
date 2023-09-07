import * as Yup from "yup";
import {
  MarginModelWhereInputObjectSchema,
  MarginModelOrderByWithAggregationInputObjectSchema,
  MarginModelScalarWhereWithAggregatesInputObjectSchema,
} from "./internals";
import { MarginModelScalarFieldEnumSchema } from "./internals";

export const MarginModelGroupBySchema = Yup.object({
  where: MarginModelWhereInputObjectSchema,
  orderBy: MarginModelOrderByWithAggregationInputObjectSchema,
  having: MarginModelScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(MarginModelScalarFieldEnumSchema).required(),
}).required();
