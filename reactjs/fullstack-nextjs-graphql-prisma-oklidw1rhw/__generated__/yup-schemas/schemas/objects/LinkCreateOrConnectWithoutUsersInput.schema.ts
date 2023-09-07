// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkWhereUniqueInputObjectSchema } from "../internals";
import { LinkCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";

export const LinkCreateOrConnectWithoutUsersInputObjectSchema = Yup.object({
  where: LinkWhereUniqueInputObjectSchema,
  create: Yup.mixed().oneOfSchemas([
    LinkCreateWithoutUsersInputObjectSchema,
    LinkUncheckedCreateWithoutUsersInputObjectSchema,
  ]),
});
