import * as Yup from "yup";

export const RemarksScalarFieldEnumSchema = Yup.mixed().oneOf([
  "id",
  "createdAt",
  "updatedAt",
  "content",
  "trashed",
  "userId",
]);
