// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedUpdateWithoutBookmarksInputObjectSchema } from "../internals";

export const UserUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema =
  Yup.object({
    where: UserWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      UserUpdateWithoutBookmarksInputObjectSchema,
      UserUncheckedUpdateWithoutBookmarksInputObjectSchema,
    ]),
  });
