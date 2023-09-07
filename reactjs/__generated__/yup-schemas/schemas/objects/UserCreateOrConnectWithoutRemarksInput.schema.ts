// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRemarksInputObjectSchema } from "../internals";

export const UserCreateOrConnectWithoutRemarksInputObjectSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutRemarksInputObjectSchema,
    UserUncheckedCreateWithoutRemarksInputObjectSchema,
  ]),
});
