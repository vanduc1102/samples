import * as Yup from "yup";

export const UserScalarFieldEnumSchema = Yup.mixed().oneOf([
  "id",
  "createdAt",
  "updatedAt",
  "email",
  "image",
  "roleId",
]);
