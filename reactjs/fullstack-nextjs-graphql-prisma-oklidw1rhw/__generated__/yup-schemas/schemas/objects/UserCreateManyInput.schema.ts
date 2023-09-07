// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";

export const UserCreateManyInputObjectSchema = Yup.object({
  id: Yup.number(),
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  email: Yup.mixed().oneOfSchemas([Yup.string()]),
  image: Yup.mixed().oneOfSchemas([Yup.string()]),
  roleId: Yup.number().required(),
});
