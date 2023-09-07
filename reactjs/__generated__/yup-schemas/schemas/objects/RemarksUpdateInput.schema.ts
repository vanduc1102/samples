// @ts-nocheck
import * as Yup from "yup";
import "../helpers/oneOfSchemas.helper.ts";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "../internals";
import { StringFieldUpdateOperationsInputObjectSchema } from "../internals";
import { BoolFieldUpdateOperationsInputObjectSchema } from "../internals";
import { UserUpdateOneRequiredWithoutRemarksNestedInputObjectSchema } from "../internals";

export const RemarksUpdateInputObjectSchema = Yup.object({
  createdAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  updatedAt: Yup.mixed().oneOfSchemas([
    DateTimeFieldUpdateOperationsInputObjectSchema,
  ]),
  content: Yup.mixed().oneOfSchemas([
    Yup.string(),
    StringFieldUpdateOperationsInputObjectSchema,
  ]),
  trashed: Yup.mixed().oneOfSchemas([
    Yup.boolean(),
    BoolFieldUpdateOperationsInputObjectSchema,
  ]),
  user: UserUpdateOneRequiredWithoutRemarksNestedInputObjectSchema,
});
