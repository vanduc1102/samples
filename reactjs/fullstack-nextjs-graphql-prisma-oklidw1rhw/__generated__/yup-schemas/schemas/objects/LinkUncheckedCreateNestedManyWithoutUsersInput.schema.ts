// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkCreateOrConnectWithoutUsersInputObjectSchema } from "../internals";
import { LinkWhereUniqueInputObjectSchema } from "../internals";

export const LinkUncheckedCreateNestedManyWithoutUsersInputObjectSchema =
  Yup.object({
    create: Yup.mixed().oneOfSchemas([
      LinkCreateWithoutUsersInputObjectSchema,
      Yup.array().of(LinkCreateWithoutUsersInputObjectSchema),
      LinkUncheckedCreateWithoutUsersInputObjectSchema,
      Yup.array().of(LinkUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
    connectOrCreate: Yup.mixed().oneOfSchemas([
      LinkCreateOrConnectWithoutUsersInputObjectSchema,
      Yup.array().of(LinkCreateOrConnectWithoutUsersInputObjectSchema),
    ]),
    connect: Yup.mixed().oneOfSchemas([
      LinkWhereUniqueInputObjectSchema,
      Yup.array().of(LinkWhereUniqueInputObjectSchema),
    ]),
  });
