import * as Yup from "yup";
import {
  HardwareWhereInputObjectSchema,
  HardwareOrderByWithRelationInputObjectSchema,
  HardwareWhereUniqueInputObjectSchema,
} from "./internals";
import { HardwareScalarFieldEnumSchema } from "./internals";

export const HardwareFindManySchema = Yup.object({
  where: HardwareWhereInputObjectSchema,
  orderBy: HardwareOrderByWithRelationInputObjectSchema,
  cursor: HardwareWhereUniqueInputObjectSchema,
  take: Yup.number(),
  skip: Yup.number(),
  distinct: Yup.array().of(HardwareScalarFieldEnumSchema),
}).required();
