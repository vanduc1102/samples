// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutRoleInputObjectSchema } from "../internals";
import { UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from "../internals";
import { UserCreateManyRoleInputEnvelopeObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from "../internals";
import { UserUpdateManyWithWhereWithoutRoleInputObjectSchema } from "../internals";
import { UserScalarWhereInputObjectSchema } from "../internals";

export const UserUpdateManyWithoutRoleNestedInputObjectSchema = Yup.object({
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutRoleInputObjectSchema,
    Yup.array().of(UserCreateWithoutRoleInputObjectSchema),
    UserUncheckedCreateWithoutRoleInputObjectSchema,
    Yup.array().of(UserUncheckedCreateWithoutRoleInputObjectSchema),
  ]),
  connectOrCreate: Yup.mixed().oneOfSchemas([
    UserCreateOrConnectWithoutRoleInputObjectSchema,
    Yup.array().of(UserCreateOrConnectWithoutRoleInputObjectSchema),
  ]),
  upsert: Yup.mixed().oneOfSchemas([
    UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
    Yup.array().of(UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema),
  ]),
  createMany: UserCreateManyRoleInputEnvelopeObjectSchema,
  set: Yup.mixed().oneOfSchemas([
    UserWhereUniqueInputObjectSchema,
    Yup.array().of(UserWhereUniqueInputObjectSchema),
  ]),
  disconnect: Yup.mixed().oneOfSchemas([
    UserWhereUniqueInputObjectSchema,
    Yup.array().of(UserWhereUniqueInputObjectSchema),
  ]),
  delete: Yup.mixed().oneOfSchemas([
    UserWhereUniqueInputObjectSchema,
    Yup.array().of(UserWhereUniqueInputObjectSchema),
  ]),
  connect: Yup.mixed().oneOfSchemas([
    UserWhereUniqueInputObjectSchema,
    Yup.array().of(UserWhereUniqueInputObjectSchema),
  ]),
  update: Yup.mixed().oneOfSchemas([
    UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
    Yup.array().of(UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema),
  ]),
  updateMany: Yup.mixed().oneOfSchemas([
    UserUpdateManyWithWhereWithoutRoleInputObjectSchema,
    Yup.array().of(UserUpdateManyWithWhereWithoutRoleInputObjectSchema),
  ]),
  deleteMany: Yup.mixed().oneOfSchemas([
    UserScalarWhereInputObjectSchema,
    Yup.array().of(UserScalarWhereInputObjectSchema),
  ]),
});
