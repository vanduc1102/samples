import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyMarginModelQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.MarginModelWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.MarginModelOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.MarginModelScalarFieldEnum], required: false }),
}))

export const findManyMarginModelQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['MarginModel'],
    nullable: false,
    args: findManyMarginModelQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.findMany({
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

export const findManyMarginModelQuery = defineQuery((t) => ({
  findManyMarginModel: t.prismaField(findManyMarginModelQueryObject(t)),
}));
