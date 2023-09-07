// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkWhereUniqueInputObjectSchema } from "../internals";
import { LinkUpdateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedUpdateWithoutUsersInputObjectSchema } from "../internals";
import { LinkCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";

export const LinkUpsertWithWhereUniqueWithoutUsersInputObjectSchema =
  Yup.object({
    where: LinkWhereUniqueInputObjectSchema,
    update: Yup.mixed().oneOfSchemas([
      LinkUpdateWithoutUsersInputObjectSchema,
      LinkUncheckedUpdateWithoutUsersInputObjectSchema,
    ]),
    create: Yup.mixed().oneOfSchemas([
      LinkCreateWithoutUsersInputObjectSchema,
      LinkUncheckedCreateWithoutUsersInputObjectSchema,
    ]),
  });
