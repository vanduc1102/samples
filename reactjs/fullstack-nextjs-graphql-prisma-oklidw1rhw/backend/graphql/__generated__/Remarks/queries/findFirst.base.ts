import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstRemarksQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RemarksWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RemarksOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RemarksWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RemarksScalarFieldEnum], required: false }),
}))

export const findFirstRemarksQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Remarks',
    nullable: true,
    args: findFirstRemarksQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.findFirst({
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

export const findFirstRemarksQuery = defineQuery((t) => ({
  findFirstRemarks: t.prismaField(findFirstRemarksQueryObject(t)),
}));
