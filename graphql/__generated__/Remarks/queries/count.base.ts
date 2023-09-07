import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countRemarksQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RemarksWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RemarksOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RemarksWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RemarksScalarFieldEnum], required: false }),
}))

export const countRemarksQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countRemarksQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.remarks.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countRemarksQuery = defineQuery((t) => ({
  countRemarks: t.field(countRemarksQueryObject(t)),
}));
