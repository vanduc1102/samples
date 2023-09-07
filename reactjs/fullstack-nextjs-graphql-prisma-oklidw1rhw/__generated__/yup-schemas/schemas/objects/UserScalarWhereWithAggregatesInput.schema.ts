// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntWithAggregatesFilterObjectSchema } from "../internals";
import { DateTimeWithAggregatesFilterObjectSchema } from "../internals";
import { StringNullableWithAggregatesFilterObjectSchema } from "../internals";

export const UserScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeWithAggregatesFilterObjectSchema,
  ]),
  email: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  image: Yup.mixed().oneOfSchemas([
    StringNullableWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  roleId: Yup.mixed().oneOfSchemas([
    IntWithAggregatesFilterObjectSchema,
    Yup.number(),
  ]),
});
