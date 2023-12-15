// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserScalarWhereInputObjectSchema } from "../internals";
import { UserUpdateManyMutationInputObjectSchema } from "../internals";
import { UserUncheckedUpdateManyWithoutUsersInputObjectSchema } from "../internals";

export const UserUpdateManyWithWhereWithoutRoleInputObjectSchema = Yup.object({
  where: UserScalarWhereInputObjectSchema,
  data: Yup.mixed().oneOfSchemas([
    UserUpdateManyMutationInputObjectSchema,
    UserUncheckedUpdateManyWithoutUsersInputObjectSchema,
  ]),
});
