// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringFilterObjectSchema } from "../internals";

export const LinkScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => LinkScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => LinkScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => LinkScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => LinkScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => LinkScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  description: Yup.mixed().oneOfSchemas([
    StringFilterObjectSchema,
    Yup.string(),
  ]),
  url: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  imageUrl: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  category: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
});
