// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { LinkCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkUncheckedCreateWithoutUsersInputObjectSchema } from "../internals";
import { LinkCreateOrConnectWithoutUsersInputObjectSchema } from "../internals";
import { LinkUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from "../internals";
import { LinkWhereUniqueInputObjectSchema } from "../internals";
import { LinkUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from "../internals";
import { LinkUpdateManyWithWhereWithoutUsersInputObjectSchema } from "../internals";
import { LinkScalarWhereInputObjectSchema } from "../internals";

export const LinkUpdateManyWithoutUsersNestedInputObjectSchema = Yup.object({
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
  upsert: Yup.mixed().oneOfSchemas([
    LinkUpsertWithWhereUniqueWithoutUsersInputObjectSchema,
    Yup.array().of(LinkUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
  ]),
  set: Yup.mixed().oneOfSchemas([
    LinkWhereUniqueInputObjectSchema,
    Yup.array().of(LinkWhereUniqueInputObjectSchema),
  ]),
  disconnect: Yup.mixed().oneOfSchemas([
    LinkWhereUniqueInputObjectSchema,
    Yup.array().of(LinkWhereUniqueInputObjectSchema),
  ]),
  delete: Yup.mixed().oneOfSchemas([
    LinkWhereUniqueInputObjectSchema,
    Yup.array().of(LinkWhereUniqueInputObjectSchema),
  ]),
  connect: Yup.mixed().oneOfSchemas([
    LinkWhereUniqueInputObjectSchema,
    Yup.array().of(LinkWhereUniqueInputObjectSchema),
  ]),
  update: Yup.mixed().oneOfSchemas([
    LinkUpdateWithWhereUniqueWithoutUsersInputObjectSchema,
    Yup.array().of(LinkUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
  ]),
  updateMany: Yup.mixed().oneOfSchemas([
    LinkUpdateManyWithWhereWithoutUsersInputObjectSchema,
    Yup.array().of(LinkUpdateManyWithWhereWithoutUsersInputObjectSchema),
  ]),
  deleteMany: Yup.mixed().oneOfSchemas([
    LinkScalarWhereInputObjectSchema,
    Yup.array().of(LinkScalarWhereInputObjectSchema),
  ]),
});
