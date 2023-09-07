// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksWhereUniqueInputObjectSchema } from "../internals";
import { RemarksCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedCreateWithoutUserInputObjectSchema } from "../internals";

export const RemarksCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
  where: RemarksWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    RemarksCreateWithoutUserInputObjectSchema,
    RemarksUncheckedCreateWithoutUserInputObjectSchema,
  ]),
});
