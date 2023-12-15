// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithoutRoleInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutRoleInputObjectSchema } from "../internals";

export const UserUpdateWithWhereUniqueWithoutRoleInputObjectSchema = Yup.object(
  {
    where: UserWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutRoleInputObjectSchema,
      UserUncheckedUpdateWithoutRoleInputObjectSchema,
    ]),
  }
);
