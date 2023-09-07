// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksCreateOrConnectWithoutUserInputObjectSchema } from "../internals";
import { RemarksCreateManyUserInputEnvelopeObjectSchema } from "../internals";
import { RemarksWhereUniqueInputObjectSchema } from "../internals";

export const RemarksCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
  create: Yup.mixed().oneOfSchemas([
    RemarksCreateWithoutUserInputObjectSchema,
    Yup.array().of(RemarksCreateWithoutUserInputObjectSchema),
    RemarksUncheckedCreateWithoutUserInputObjectSchema,
    Yup.array().of(RemarksUncheckedCreateWithoutUserInputObjectSchema),
  ]),
  connectOrCreate: Yup.mixed().oneOfSchemas([
    RemarksCreateOrConnectWithoutUserInputObjectSchema,
    Yup.array().of(RemarksCreateOrConnectWithoutUserInputObjectSchema),
  ]),
  createMany: RemarksCreateManyUserInputEnvelopeObjectSchema,
  connect: Yup.mixed().oneOfSchemas([
    RemarksWhereUniqueInputObjectSchema,
    Yup.array().of(RemarksWhereUniqueInputObjectSchema),
  ]),
});
