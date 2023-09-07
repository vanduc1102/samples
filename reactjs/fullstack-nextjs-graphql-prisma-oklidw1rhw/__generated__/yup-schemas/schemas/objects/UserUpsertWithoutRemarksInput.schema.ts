// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserUpdateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutRemarksInputObjectSchema } from "../internals";
import { UserCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRemarksInputObjectSchema } from "../internals";

export const UserUpsertWithoutRemarksInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    UserUpdateWithoutRemarksInputObjectSchema,
    UserUncheckedUpdateWithoutRemarksInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutRemarksInputObjectSchema,
    UserUncheckedCreateWithoutRemarksInputObjectSchema,
  ]),
});
