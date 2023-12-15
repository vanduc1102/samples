// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleWhereUniqueInputObjectSchema } from "../internals";
import { RoleCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";

export const RoleCreateOrConnectWithoutUsersInputObjectSchema = Yup.object({
  where: RoleWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    RoleCreateWithoutUsersInputObjectSchema,
    RoleUncheckedCreateWithoutUsersInputObjectSchema,
  ]),
});
