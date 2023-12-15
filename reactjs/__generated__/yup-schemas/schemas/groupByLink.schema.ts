import * as Yup from "yup";
import {
  LinkWhereInputObjectSchema,
  LinkOrderByWithAggregationInputObjectSchema,
  LinkScalarWhereWithAggregatesInputObjectSchema,
} from "./internals";
import { LinkScalarFieldEnumSchema } from "./internals";

export const LinkGroupBySchema = Yup.object({
  where: LinkWhereInputObjectSchema,
  orderBy: LinkOrderByWithAggregationInputObjectSchema,
  having: LinkScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(LinkScalarFieldEnumSchema).required(),
}).required();
