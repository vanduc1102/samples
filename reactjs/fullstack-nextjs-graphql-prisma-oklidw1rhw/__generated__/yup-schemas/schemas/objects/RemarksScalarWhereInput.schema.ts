// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFilterObjectSchema } from "../internals";
import { DateTimeFilterObjectSchema } from "../internals";
import { StringFilterObjectSchema } from "../internals";
import { BoolFilterObjectSchema } from "../internals";

export const RemarksScalarWhereInputObjectSchema = Yup.object({
  AND: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RemarksScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RemarksScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  OR: Yup.array().of(
    Yup.lazy(() => RemarksScalarWhereInputObjectSchema.default(undefined))
  ),
  NOT: Yup.mixed().oneOfSchemas([
    Yup.lazy(() => RemarksScalarWhereInputObjectSchema.default(undefined)),
    Yup.array().of(
      Yup.lazy(() => RemarksScalarWhereInputObjectSchema.default(undefined))
    ),
  ]),
  id: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),
  content: Yup.mixed().oneOfSchemas([StringFilterObjectSchema, Yup.string()]),
  trashed: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema, Yup.boolean()]),
  userId: Yup.mixed().oneOfSchemas([IntFilterObjectSchema, Yup.number()]),
});
