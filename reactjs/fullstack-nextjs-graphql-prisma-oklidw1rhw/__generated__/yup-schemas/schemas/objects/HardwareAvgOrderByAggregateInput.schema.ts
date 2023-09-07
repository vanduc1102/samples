// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";

export const HardwareAvgOrderByAggregateInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  costValue: SortOrderSchema,
  sellRoundup: SortOrderSchema,
  leaseToOwnRoundup: SortOrderSchema,
  leaseToOperateRoundup: SortOrderSchema,
  packageWeightValue: SortOrderSchema,
  packageLengthValue: SortOrderSchema,
  packageWidthValue: SortOrderSchema,
  packageHeightValue: SortOrderSchema,
});
