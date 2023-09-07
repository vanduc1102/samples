import * as Yup from "yup";

export const RoleScalarFieldEnumSchema = Yup.mixed().oneOf([
  "id",
  "createdAt",
  "updatedAt",
  "name",
  "code",
]);
