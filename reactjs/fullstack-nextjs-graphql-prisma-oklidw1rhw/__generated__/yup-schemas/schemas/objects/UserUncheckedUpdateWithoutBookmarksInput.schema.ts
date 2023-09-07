// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { IntFieldUpdateOperationsInputObjectSchema } from "../internals";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "../internals";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { RemarksUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "../internals";

export const UserUncheckedUpdateWithoutBookmarksInputObjectSchema = Yup.object({
  id: Yup.mixed().oneOfSchemas([
    Yup.number(),
    IntFieldUpdateOperationsInputObjectSchema,
  ]),
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
  roleId: Yup.mixed().oneOfSchemas([
    Yup.number(),
    IntFieldUpdateOperationsInputObjectSchema,
  ]),
  remarks: RemarksUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
});
