import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countLinkQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.LinkWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.LinkOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.LinkWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.LinkScalarFieldEnum], required: false }),
}))

export const countLinkQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countLinkQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.link.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countLinkQuery = defineQuery((t) => ({
  countLink: t.field(countLinkQueryObject(t)),
}));
