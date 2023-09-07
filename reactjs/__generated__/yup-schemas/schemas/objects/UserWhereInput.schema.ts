// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringNullableFilterObjectSchema } from "../internals";
import { RoleRelationFilterObjectSchema } from "../internals";
import { RoleWhereInputObjectSchema } from "../internals";
import { LinkListRelationFilterObjectSchema } from "../internals";
import { RemarksListRelationFilterObjectSchema } from "../internals";

export const UserWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  email: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  image: Yup.mixed().oneOfSchemas([
    StringNullableFilterObjectSchema,
    Yup.string(),
  ]),
  roleId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  role: Yup.mixed().oneOfSchemas([
    RoleRelationFilterObjectSchema,
    RoleWhereInputObjectSchema,
  ]),
  bookmarks: LinkListRelationFilterObjectSchema,
  remarks: RemarksListRelationFilterObjectSchema,
});
