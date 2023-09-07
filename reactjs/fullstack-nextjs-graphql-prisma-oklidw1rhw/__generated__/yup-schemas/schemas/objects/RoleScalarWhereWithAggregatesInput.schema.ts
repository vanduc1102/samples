// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntWithAggregatesFilterObjectSchema } from "../internals";
import { DateTimeWithAggregatesFilterObjectSchema } from "../internals";
import { StringWithAggregatesFilterObjectSchema } from "../internals";

export const RoleScalarWhereWithAggregatesInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RoleScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RoleScalarWhereWithAggregatesInputObjectSchema.default(undefined)
      )
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() =>
      RoleScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    )
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() =>
      RoleScalarWhereWithAggregatesInputObjectSchema.default(undefined)
    ),
    Yup.array().of(
      Yup.lazy(() =>
        RoleScalarWhereWithAggregatesInputObjectSchema.default(undefined)
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
  name: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
  code: Yup.mixed().oneOfSchemas([
    StringWithAggregatesFilterObjectSchema,
    Yup.string(),
  ]),
});
