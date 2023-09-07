import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findManyRemarksQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RemarksWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RemarksOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RemarksWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RemarksScalarFieldEnum], required: false }),
}))

export const findManyRemarksQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: ['Remarks'],
    nullable: false,
    args: findManyRemarksQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.findMany({
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

export const findManyRemarksQuery = defineQuery((t) => ({
  findManyRemarks: t.prismaField(findManyRemarksQueryObject(t)),
}));
