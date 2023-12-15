// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringFilterObjectSchema } from "../internals";
import { UserListRelationFilterObjectSchema } from "../internals";

export const RoleWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RoleWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RoleWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RoleWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RoleWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RoleWhereInputObjectSchema.default(undefined))
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  code: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  users: UserListRelationFilterObjectSchema,
});
