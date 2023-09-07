// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksScalarWhereInputObjectSchema } from "../internals";
import { RemarksUpdateManyMutationInputObjectSchema } from "../internals";
import { RemarksUncheckedUpdateManyWithoutRemarksInputObjectSchema } from "../internals";

export const RemarksUpdateManyWithWhereWithoutUserInputObjectSchema =
  Yup.object({
    where: RemarksScalarWhereInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RemarksUpdateManyMutationInputObjectSchema,
      RemarksUncheckedUpdateManyWithoutRemarksInputObjectSchema,
    ]),
  });
