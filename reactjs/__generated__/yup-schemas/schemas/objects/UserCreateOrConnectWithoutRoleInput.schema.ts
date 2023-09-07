// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserCreateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRoleInputObjectSchema } from "../internals";

export const UserCreateOrConnectWithoutRoleInputObjectSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutRoleInputObjectSchema,
    UserUncheckedCreateWithoutRoleInputObjectSchema,
  ]),
});
