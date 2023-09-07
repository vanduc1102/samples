// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { RoleUpdateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from "../internals";
import { RoleCreateWithoutUsersInputObjectSchema } from "../internals";
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";

export const RoleUpsertWithoutUsersInputObjectSchema = Yup.object({
  update: Yup.mixed().oneOfSchemas([
    RoleUpdateWithoutUsersInputObjectSchema,
    RoleUncheckedUpdateWithoutUsersInputObjectSchema,
  ]),
  create: Yup.mixed().oneOfSchemas([
    RoleCreateWithoutUsersInputObjectSchema,
    RoleUncheckedCreateWithoutUsersInputObjectSchema,
  ]),
});
