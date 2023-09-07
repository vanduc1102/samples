import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueLinkQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.LinkWhereUniqueInput, required: true }) }))

export const findUniqueLinkQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Link',
    nullable: true,
    args: findUniqueLinkQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueLinkQuery = defineQuery((t) => ({
  findUniqueLink: t.prismaField(findUniqueLinkQueryObject(t)),
}));
