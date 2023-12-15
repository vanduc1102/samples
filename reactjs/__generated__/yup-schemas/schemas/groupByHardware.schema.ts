import * as Yup from "yup";
import {
  HardwareWhereInputObjectSchema,
  HardwareOrderByWithAggregationInputObjectSchema,
  HardwareScalarWhereWithAggregatesInputObjectSchema,
} from "./internals";
import { HardwareScalarFieldEnumSchema } from "./internals";

export const HardwareGroupBySchema = Yup.object({
  where: HardwareWhereInputObjectSchema,
  orderBy: HardwareOrderByWithAggregationInputObjectSchema,
  having: HardwareScalarWhereWithAggregatesInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  by: Yup.array().of(HardwareScalarFieldEnumSchema).required(),
}).required();
