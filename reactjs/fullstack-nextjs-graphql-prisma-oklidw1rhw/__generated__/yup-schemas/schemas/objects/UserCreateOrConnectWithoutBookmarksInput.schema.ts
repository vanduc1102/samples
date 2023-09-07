// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutBookmarksInputObjectSchema } from "../internals";

export const UserCreateOrConnectWithoutBookmarksInputObjectSchema = Yup.object({
  where: UserWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    UserCreateWithoutBookmarksInputObjectSchema,
    UserUncheckedCreateWithoutBookmarksInputObjectSchema,
  ]),
});
