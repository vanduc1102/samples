import * as Yup from "yup";

export const LinkScalarFieldEnumSchema = Yup.mixed().oneOf([
  "id",
  "createdAt",
  "updatedAt",
  "title",
  "description",
  "url",
  "imageUrl",
  "category",
]);
