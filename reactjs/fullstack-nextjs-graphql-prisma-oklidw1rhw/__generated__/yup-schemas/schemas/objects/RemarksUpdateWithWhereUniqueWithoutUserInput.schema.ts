// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksWhereUniqueInputObjectSchema } from "../internals";
import { RemarksUpdateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedUpdateWithoutUserInputObjectSchema } from "../internals";

export const RemarksUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Yup.object({
    where: RemarksWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      RemarksUpdateWithoutUserInputObjectSchema,
      RemarksUncheckedUpdateWithoutUserInputObjectSchema,
    ]),
  });
