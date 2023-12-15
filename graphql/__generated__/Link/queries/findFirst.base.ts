import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstLinkQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.LinkWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.LinkOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.LinkWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.LinkScalarFieldEnum], required: false }),
}))

export const findFirstLinkQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Link',
    nullable: true,
    args: findFirstLinkQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.findFirst({
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

export const findFirstLinkQuery = defineQuery((t) => ({
  findFirstLink: t.prismaField(findFirstLinkQueryObject(t)),
}));
