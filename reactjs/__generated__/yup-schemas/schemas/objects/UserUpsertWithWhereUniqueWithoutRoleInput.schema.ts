// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from "../internals";
import { UserCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from "../internals";

export const UserUpsertWithWhereUniqueWithoutRoleInputObjectSchema = Yup.object(
  {
    where: UserWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutRoleInputObjectSchema,
      UserUncheckedUpdateWithoutRoleInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutRoleInputObjectSchema,
      UserUncheckedCreateWithoutRoleInputObjectSchema,
    ]),
  }
);
