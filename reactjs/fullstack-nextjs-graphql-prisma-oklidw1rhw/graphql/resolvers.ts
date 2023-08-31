import { prisma } from "../lib/prisma";

// /graphql/resolvers.ts
export const resolvers = {
  Query: {
    links: () => {
      return prisma.link.findMany();
    },
  },
};
