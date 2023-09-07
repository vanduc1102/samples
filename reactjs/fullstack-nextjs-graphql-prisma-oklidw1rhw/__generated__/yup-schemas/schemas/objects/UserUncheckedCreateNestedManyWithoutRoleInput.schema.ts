// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutRoleInputObjectSchema } from "../internals";
import { UserCreateManyRoleInputEnvelopeObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";

export const UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema =
  Yup.object({
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
    createMany: UserCreateManyRoleInputEnvelopeObjectSchema,
    connect: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
  });
