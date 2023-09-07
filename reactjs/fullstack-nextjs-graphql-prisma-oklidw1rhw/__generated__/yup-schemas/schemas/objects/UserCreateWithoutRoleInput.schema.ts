// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkCreateNestedManyWithoutUsersInputObjectSchema } from "../internals";
import { RemarksCreateNestedManyWithoutUserInputObjectSchema } from "../internals";

export const UserCreateWithoutRoleInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  email: Yup.mixed().oneOfSchemas([Yup.string()]),
  image: Yup.mixed().oneOfSchemas([Yup.string()]),
  bookmarks: LinkCreateNestedManyWithoutUsersInputObjectSchema,
  remarks: RemarksCreateNestedManyWithoutUserInputObjectSchema,
});
