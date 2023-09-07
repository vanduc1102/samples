// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from "../internals";
import { RoleWhereUniqueInputObjectSchema } from "../internals";

export const RoleCreateNestedOneWithoutUsersInputObjectSchema = Yup.object({
  create: Yup.mixed().oneOfSchemas([
    RoleCreateWithoutUsersInputObjectSchema,
    RoleUncheckedCreateWithoutUsersInputObjectSchema,
  ]),
  connectOrCreate: RoleCreateOrConnectWithoutUsersInputObjectSchema,
  connect: RoleWhereUniqueInputObjectSchema,
});
