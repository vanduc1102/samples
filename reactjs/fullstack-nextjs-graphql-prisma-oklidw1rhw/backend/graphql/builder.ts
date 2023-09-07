import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { Scalars } from 'prisma-generator-pothos-codegen';
import type PrismaTypes from "@pothos/plugin-prisma/generated";

import { prisma } from "../lib/prisma";
import { createContext } from "./context";
import { Prisma } from "@prisma/client";

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>; // required
  Context: ReturnType<typeof createContext>
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({})
