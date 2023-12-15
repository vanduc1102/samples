// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutBookmarksInputObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";

export const UserCreateNestedManyWithoutBookmarksInputObjectSchema = Yup.object(
  {
    create: Yup.mixed().oneOfSchemas([
      UserCreateWithoutBookmarksInputObjectSchema,
      Yup.array().of(UserCreateWithoutBookmarksInputObjectSchema),
      UserUncheckedCreateWithoutBookmarksInputObjectSchema,
      Yup.array().of(UserUncheckedCreateWithoutBookmarksInputObjectSchema),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      UserCreateOrConnectWithoutBookmarksInputObjectSchema,
      Yup.array().of(UserCreateOrConnectWithoutBookmarksInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
  }
);
