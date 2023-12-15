import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findFirstHardwareQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.HardwareWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.HardwareOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.HardwareWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.HardwareScalarFieldEnum], required: false }),
}))

export const findFirstHardwareQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Hardware',
    nullable: true,
    args: findFirstHardwareQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.findFirst({
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

export const findFirstHardwareQuery = defineQuery((t) => ({
  findFirstHardware: t.prismaField(findFirstHardwareQueryObject(t)),
}));
