// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { HardwareScalarWhereInputObjectSchema } from "../internals";
import { HardwareUpdateManyMutationInputObjectSchema } from "../internals";
import { HardwareUncheckedUpdateManyWithoutHardwareInputObjectSchema } from "../internals";

export const HardwareUpdateManyWithWhereWithoutSellMarginModelInputObjectSchema =
  Yup.object({
    where: HardwareScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      HardwareUpdateManyMutationInputObjectSchema,
      HardwareUncheckedUpdateManyWithoutHardwareInputObjectSchema,
    ]),
  });
