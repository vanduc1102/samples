// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateNestedOneWithoutRemarksInputObjectSchema } from "../internals";

export const RemarksCreateInputObjectSchema = Yup.object({
  createdAt: Yup.date(),
  updatedAt: Yup.date(),
  content: Yup.string().required(),
  trashed: Yup.boolean(),
  user: UserCreateNestedOneWithoutRemarksInputObjectSchema,
});
