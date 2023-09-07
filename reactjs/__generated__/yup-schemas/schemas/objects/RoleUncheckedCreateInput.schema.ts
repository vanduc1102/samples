// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from "../internals";

export const RoleUncheckedCreateInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  name: Yup.string().required(),
  code: Yup.string().required(),
  users: UserUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
});
