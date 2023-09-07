import * as Yup from "yup";
import {
  RemarksWhereInputObjectSchema,
  RemarksOrderByWithRelationInputObjectSchema,
  RemarksWhereUniqueInputObjectSchema,
} from "./internals";

export const RemarksAggregateSchema = Yup.object({
  where: RemarksWhereInputObjectSchema,
  orderBy: RemarksOrderByWithRelationInputObjectSchema,
  cursor: RemarksWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required();
