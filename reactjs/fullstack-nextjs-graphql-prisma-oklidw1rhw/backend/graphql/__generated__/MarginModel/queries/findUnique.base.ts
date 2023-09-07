import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueMarginModelQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: true }) }))

export const findUniqueMarginModelQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'MarginModel',
    nullable: true,
    args: findUniqueMarginModelQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueMarginModelQuery = defineQuery((t) => ({
  findUniqueMarginModel: t.prismaField(findUniqueMarginModelQueryObject(t)),
}));
