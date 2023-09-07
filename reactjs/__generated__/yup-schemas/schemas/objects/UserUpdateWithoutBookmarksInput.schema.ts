// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "../internals";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from "../internals";
import { RemarksUpdateManyWithoutUserNestedInputObjectSchema } from "../internals";

export const UserUpdateWithoutBookmarksInputObjectSchema = Yup.object({
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  email: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  image: Yup.mixed().oneOfSchemas([
    Yup.string(),
    NullableStringFieldUpdateOperationsInputObjectSchema,
  ]),
  role: RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema,
  remarks: RemarksUpdateManyWithoutUserNestedInputObjectSchema,
});
