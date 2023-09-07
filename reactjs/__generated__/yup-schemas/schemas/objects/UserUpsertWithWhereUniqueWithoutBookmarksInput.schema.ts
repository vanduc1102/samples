// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutBookmarksInputObjectSchema } from "../internals";

export const UserUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Yup.object({
    where: UserWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutBookmarksInputObjectSchema,
      UserUncheckedUpdateWithoutBookmarksInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutBookmarksInputObjectSchema,
      UserUncheckedCreateWithoutBookmarksInputObjectSchema,
    ]),
  });
