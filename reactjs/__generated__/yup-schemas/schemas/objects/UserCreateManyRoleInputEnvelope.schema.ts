// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { UserCreateManyRoleInputObjectSchema } from "../internals";

export const UserCreateManyRoleInputEnvelopeObjectSchema = Yup.object({
  data: Yup.mixed().oneOfSchemas([
    UserCreateManyRoleInputObjectSchema,
    Yup.array().of(UserCreateManyRoleInputObjectSchema),
  ]),
  skipDuplicates: Yup.boolean(),
});
