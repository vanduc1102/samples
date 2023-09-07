import * as Yup from "yup";
import {
  HardwareWhereInputObjectSchema,
  HardwareOrderByWithRelationInputObjectSchema,
  HardwareWhereUniqueInputObjectSchema,
} from "./internals";

export const HardwareAggregateSchema = Yup.object({
  where: HardwareWhereInputObjectSchema,
  orderBy: HardwareOrderByWithRelationInputObjectSchema,
  cursor: HardwareWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
}).required();
