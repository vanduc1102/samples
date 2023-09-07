import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryObject } from '../../utils';

export const countHardwareQueryArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.HardwareWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.HardwareOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.HardwareWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.HardwareScalarFieldEnum], required: false }),
}))

export const countHardwareQueryObject = defineQueryFunction((t) =>
  defineQueryObject({
    type: 'Int',
    nullable: false,
    args: countHardwareQueryArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.hardware.count({
        where: args.where || undefined,
        cursor: args.cursor || undefined,
        take: args.take || undefined,
        distinct: args.distinct || undefined,
        skip: args.skip || undefined,
        orderBy: args.orderBy || undefined,
      }),
  }),
);

export const countHardwareQuery = defineQuery((t) => ({
  countHardware: t.field(countHardwareQueryObject(t)),
}));
