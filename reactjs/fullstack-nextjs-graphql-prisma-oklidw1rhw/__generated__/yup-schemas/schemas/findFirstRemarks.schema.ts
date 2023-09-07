import * as Yup from "yup";
import {
  RemarksWhereInputObjectSchema,
  RemarksOrderByWithRelationInputObjectSchema,
  RemarksWhereUniqueInputObjectSchema,
} from "./internals";
import { RemarksScalarFieldEnumSchema } from "./internals";

export const RemarksFindFirstSchema = Yup.object({
  where: RemarksWhereInputObjectSchema,
  orderBy: RemarksOrderByWithRelationInputObjectSchema,
  cursor: RemarksWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(RemarksScalarFieldEnumSchema),
}).required();
