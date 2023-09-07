// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutRemarksInputObjectSchema } from "../internals";
import { UserUpsertWithoutRemarksInputObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutRemarksInputObjectSchema } from "../internals";

export const UserUpdateOneRequiredWithoutRemarksNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutRemarksInputObjectSchema,
      UserUncheckedCreateWithoutRemarksInputObjectSchema,
    ]),
    connectOrCreate: UserCreateOrConnectWithoutRemarksInputObjectSchema,
    upsert: UserUpsertWithoutRemarksInputObjectSchema,
    connect: UserWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutRemarksInputObjectSchema,
      UserUncheckedUpdateWithoutRemarksInputObjectSchema,
    ]),
  });
