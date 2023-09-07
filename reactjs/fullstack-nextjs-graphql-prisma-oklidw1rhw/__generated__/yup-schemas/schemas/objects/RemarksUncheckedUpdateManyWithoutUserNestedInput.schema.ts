// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RemarksCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksUncheckedCreateWithoutUserInputObjectSchema } from "../internals";
import { RemarksCreateOrConnectWithoutUserInputObjectSchema } from "../internals";
import { RemarksUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "../internals";
import { RemarksCreateManyUserInputEnvelopeObjectSchema } from "../internals";
import { RemarksWhereUniqueInputObjectSchema } from "../internals";
import { RemarksUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "../internals";
import { RemarksUpdateManyWithWhereWithoutUserInputObjectSchema } from "../internals";
import { RemarksScalarWhereInputObjectSchema } from "../internals";

export const RemarksUncheckedUpdateManyWithoutUserNestedInputObjectSchema =
  Yup.object({
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
    upsert: Yup.mixed().oneOfSchemas([
      RemarksUpsertWithWhereUniqueWithoutUserInputObjectSchema,
      Yup.array().of(RemarksUpsertWithWhereUniqueWithoutUserInputObjectSchema),
    ]),
    createMany: RemarksCreateManyUserInputEnvelopeObjectSchema,
    set: Yup.mixed().oneOfSchemas([
      RemarksWhereUniqueInputObjectSchema,
      Yup.array().of(RemarksWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      RemarksWhereUniqueInputObjectSchema,
      Yup.array().of(RemarksWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      RemarksWhereUniqueInputObjectSchema,
      Yup.array().of(RemarksWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      RemarksWhereUniqueInputObjectSchema,
      Yup.array().of(RemarksWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      RemarksUpdateWithWhereUniqueWithoutUserInputObjectSchema,
      Yup.array().of(RemarksUpdateWithWhereUniqueWithoutUserInputObjectSchema),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      RemarksUpdateManyWithWhereWithoutUserInputObjectSchema,
      Yup.array().of(RemarksUpdateManyWithWhereWithoutUserInputObjectSchema),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      RemarksScalarWhereInputObjectSchema,
      Yup.array().of(RemarksScalarWhereInputObjectSchema),
    ]),
  });
