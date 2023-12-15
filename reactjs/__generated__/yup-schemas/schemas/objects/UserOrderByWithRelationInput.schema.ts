// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { SortOrderSchema } from "../internals";
import { SortOrderInputObjectSchema } from "../internals";
import { RoleOrderByWithRelationInputObjectSchema } from "../internals";
import { LinkOrderByRelationAggregateInputObjectSchema } from "../internals";
import { RemarksOrderByRelationAggregateInputObjectSchema } from "../internals";

export const UserOrderByWithRelationInputObjectSchema = Yup.object({
  id: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  email: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  image: Yup.mixed().oneOfSchemas([
    SortOrderSchema,
    SortOrderInputObjectSchema,
  ]),
  roleId: SortOrderSchema,
  role: RoleOrderByWithRelationInputObjectSchema,
  bookmarks: LinkOrderByRelationAggregateInputObjectSchema,
  remarks: RemarksOrderByRelationAggregateInputObjectSchema,
});
