// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateNestedManyWithoutRoleInputObjectSchema } from "../internals";

export const RoleCreateInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  name: Yup.string().required(),
  code: Yup.string().required(),
  users: UserCreateNestedManyWithoutRoleInputObjectSchema,
});
