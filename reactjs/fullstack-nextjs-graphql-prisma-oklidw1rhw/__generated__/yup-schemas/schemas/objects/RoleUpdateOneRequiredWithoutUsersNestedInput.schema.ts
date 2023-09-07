// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from "../internals";
import { RoleUpsertWithoutUsersInputObjectSchema } from "../internals";
import { RoleWhereUniqueInputObjectSchema } from "../internals";
import { RoleUpdateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from "../internals";

export const RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      RoleCreateWithoutUsersInputObjectSchema,
      RoleUncheckedCreateWithoutUsersInputObjectSchema,
    ]),
    connectOrCreate: RoleCreateOrConnectWithoutUsersInputObjectSchema,
    upsert: RoleUpsertWithoutUsersInputObjectSchema,
    connect: RoleWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      RoleUpdateWithoutUsersInputObjectSchema,
      RoleUncheckedUpdateWithoutUsersInputObjectSchema,
    ]),
  });
