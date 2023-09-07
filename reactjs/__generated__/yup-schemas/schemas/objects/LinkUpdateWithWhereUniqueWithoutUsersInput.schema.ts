// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkWhereUniqueInputObjectSchema } from "../internals";
import { LinkUpdateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedUpdateWithoutUsersInputObjectSchema } from "../internals";

export const LinkUpdateWithWhereUniqueWithoutUsersInputObjectSchema =
  Yup.object({
    where: LinkWhereUniqueInputObjectSchema,
    data: Yup.mixed().oneOfSchemas([
      LinkUpdateWithoutUsersInputObjectSchema,
      LinkUncheckedUpdateWithoutUsersInputObjectSchema,
    ]),
  });
