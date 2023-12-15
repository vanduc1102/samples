import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueRemarksQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RemarksWhereUniqueInput, required: true }) }))

export const findUniqueRemarksQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Remarks',
    nullable: true,
    args: findUniqueRemarksQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueRemarksQuery = defineQuery((t) => ({
  findUniqueRemarks: t.prismaField(findUniqueRemarksQueryObject(t)),
}));
