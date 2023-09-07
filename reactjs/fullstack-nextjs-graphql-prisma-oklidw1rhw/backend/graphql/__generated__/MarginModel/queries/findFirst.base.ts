import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstMarginModelQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.MarginModelWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.MarginModelOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.MarginModelScalarFieldEnum], required: false }),
}))

export const findFirstMarginModelQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'MarginModel',
    nullable: true,
    args: findFirstMarginModelQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.findFirst({
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

export const findFirstMarginModelQuery = defineQuery((t) => ({
  findFirstMarginModel: t.prismaField(findFirstMarginModelQueryObject(t)),
}));
