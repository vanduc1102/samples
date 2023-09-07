import * as Yup from "yup";
import {
  RemarksWhereInputObjectSchema,
  RemarksOrderByWithAggregationInputObjectSchema,
  RemarksScalarWhereWithAggregatesInputObjectSchema,
} from "./internals";
import { RemarksScalarFieldEnumSchema } from "./internals";

export const RemarksGroupBySchema = Yup.object({
  where: RemarksWhereInputObjectSchema,
  orderBy: RemarksOrderByWithAggregationInputObjectSchema,
  having: RemarksScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(RemarksScalarFieldEnumSchema).required(),
}).required();
