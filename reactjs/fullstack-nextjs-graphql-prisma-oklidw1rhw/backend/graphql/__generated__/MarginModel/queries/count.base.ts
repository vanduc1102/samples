import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countMarginModelQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.MarginModelWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.MarginModelOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.MarginModelScalarFieldEnum], required: false }),
}))

export const countMarginModelQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countMarginModelQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.marginModel.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countMarginModelQuery = defineQuery((t) => ({
  countMarginModel: t.field(countMarginModelQueryObject(t)),
}));
