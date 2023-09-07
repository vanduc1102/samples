// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksWhereUniqueInputObjectSchema } from "../internals";
import { RemarksUpdateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedUpdateWithoutUserInputObjectSchema } from "../internals";
import { RemarksCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedCreateWithoutUserInputObjectSchema } from "../internals";

export const RemarksUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Yup.object({
    where: RemarksWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      RemarksUpdateWithoutUserInputObjectSchema,
      RemarksUncheckedUpdateWithoutUserInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      RemarksCreateWithoutUserInputObjectSchema,
      RemarksUncheckedCreateWithoutUserInputObjectSchema,
    ]),
  });
