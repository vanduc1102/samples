// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateNestedManyWithoutBookmarksInputObjectSchema } from "../internals";

export const LinkCreateInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  url: Yup.string().required(),
  imageUrl: Yup.string().required(),
  category: Yup.string().required(),
  users: UserCreateNestedManyWithoutBookmarksInputObjectSchema,
});
