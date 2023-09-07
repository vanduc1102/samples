// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUncheckedCreateWithoutBookmarksInputObjectSchema } from "../internals";
import { UserCreateOrConnectWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema } from "../internals";
import { UserWhereUniqueInputObjectSchema } from "../internals";
import { UserUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema } from "../internals";
import { UserUpdateManyWithWhereWithoutBookmarksInputObjectSchema } from "../internals";
import { UserScalarWhereInputObjectSchema } from "../internals";

export const UserUpdateManyWithoutBookmarksNestedInputObjectSchema = Yup.object(
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
    upsert: Yup.mixed().oneOfSchemas([
      UserUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema,
      Yup.array().of(
        UserUpsertWithWhereUniqueWithoutBookmarksInputObjectSchema
      ),
    ]),
    set: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
    disconnect: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
    delete: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      UserWhereUniqueInputObjectSchema,
      Yup.array().of(UserWhereUniqueInputObjectSchema),
    ]),
    update: Yup.mixed().oneOfSchemas([
      UserUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema,
      Yup.array().of(
        UserUpdateWithWhereUniqueWithoutBookmarksInputObjectSchema
      ),
    ]),
    updateMany: Yup.mixed().oneOfSchemas([
      UserUpdateManyWithWhereWithoutBookmarksInputObjectSchema,
      Yup.array().of(UserUpdateManyWithWhereWithoutBookmarksInputObjectSchema),
    ]),
    deleteMany: Yup.mixed().oneOfSchemas([
      UserScalarWhereInputObjectSchema,
      Yup.array().of(UserScalarWhereInputObjectSchema),
    ]),
  }
);
