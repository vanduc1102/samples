// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutRemarksInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutRemarksInputObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";

export const UserCreateNestedOneWithoutRemarksInputObjectSchema = Yup.object({
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutRemarksInputObjectSchema,
    UserUncheckedCreateWithoutRemarksInputObjectSchema,
  ]),
  connectOrCreate: UserCreateOrConnectWithoutRemarksInputObjectSchema,
  connect: UserWhereUniqueInputObjectSchema,
});
