import { builder } from "../builder";

builder.prismaObject("Role", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    code: t.exposeString("code"),
  }),
});
