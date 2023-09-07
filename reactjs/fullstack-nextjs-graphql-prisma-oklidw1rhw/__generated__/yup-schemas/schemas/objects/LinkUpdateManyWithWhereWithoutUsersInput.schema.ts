// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkScalarWhereInputObjectSchema } from "../internals";
import { LinkUpdateManyMutationInputObjectSchema } from "../internals";
import { LinkUncheckedUpdateManyWithoutBookmarksInputObjectSchema } from "../internals";

export const LinkUpdateManyWithWhereWithoutUsersInputObjectSchema = Yup.object({
  where: LinkScalarWhereInputObjectSchema,
  data: Yup.mixed().oneOfSchemas([
    LinkUpdateManyMutationInputObjectSchema,
    LinkUncheckedUpdateManyWithoutBookmarksInputObjectSchema,
  ]),
});
