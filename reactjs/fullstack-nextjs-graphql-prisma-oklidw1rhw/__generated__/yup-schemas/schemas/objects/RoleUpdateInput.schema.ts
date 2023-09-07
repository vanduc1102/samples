// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "../internals";
import { StringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { UserUpdateManyWithoutRoleNestedInputObjectSchema } from "../internals";

export const RoleUpdateInputObjectSchema = Yup.object({
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  name: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  code: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  users: UserUpdateManyWithoutRoleNestedInputObjectSchema,
});
