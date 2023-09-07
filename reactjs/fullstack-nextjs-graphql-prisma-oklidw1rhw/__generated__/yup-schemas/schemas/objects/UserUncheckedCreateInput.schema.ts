// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from "../internals";
import { RemarksUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "../internals";

export const UserUncheckedCreateInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  email: Yup.mixed().oneOfSchemas([Yup.string()]),
  image: Yup.mixed().oneOfSchemas([Yup.string()]),
  roleId: Yup.number().required(),
  bookmarks: LinkUncheckedCreateNestedManyWithoutUsersInputObjectSchema,
  remarks: RemarksUncheckedCreateNestedManyWithoutUserInputObjectSchema,
});
