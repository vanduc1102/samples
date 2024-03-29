// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleCreateNestedOneWithoutUsersInputObjectSchema } from "../internals";
import { RemarksCreateNestedManyWithoutUserInputObjectSchema } from "../internals";

export const UserCreateWithoutBookmarksInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  email: Yup.mixed().oneOfSchemas([Yup.string()]),
  image: Yup.mixed().oneOfSchemas([Yup.string()]),
  role: RoleCreateNestedOneWithoutUsersInputObjectSchema,
  remarks: RemarksCreateNestedManyWithoutUserInputObjectSchema,
});
