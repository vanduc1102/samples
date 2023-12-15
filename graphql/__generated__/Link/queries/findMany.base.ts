import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyLinkQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.LinkWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.LinkOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.LinkWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.LinkScalarFieldEnum], required: false }),
}))

export const findManyLinkQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Link'],
    nullable: false,
    args: findManyLinkQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.findMany({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
        ...query,
      }),
  }),
);

export const findManyLinkQuery = defineQuery((t) => ({
  findManyLink: t.prismaField(findManyLinkQueryObject(t)),
}));
