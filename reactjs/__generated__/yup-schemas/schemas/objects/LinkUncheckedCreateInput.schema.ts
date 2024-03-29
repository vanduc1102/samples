// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema } from "../internals";

export const LinkUncheckedCreateInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  url: Yup.string().required(),
  imageUrl: Yup.string().required(),
  category: Yup.string().required(),
  users: UserUncheckedCreateNestedManyWithoutBookmarksInputObjectSchema,
});
