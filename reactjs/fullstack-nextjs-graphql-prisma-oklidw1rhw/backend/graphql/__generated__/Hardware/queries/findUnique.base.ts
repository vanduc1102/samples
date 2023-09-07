import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineQuery, defineQueryFunction, defineQueryPrismaObject } from '../../utils';

export const findUniqueHardwareQueryArgs = builder.args((t) => ({ where: t.field({ type: Inputs.HardwareWhereUniqueInput, required: true }) }))

export const findUniqueHardwareQueryObject = defineQueryFunction((t) =>
  defineQueryPrismaObject({
    type: 'Hardware',
    nullable: true,
    args: findUniqueHardwareQueryArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.findUnique({ where: args.where, ...query }),
  }),
);

export const findUniqueHardwareQuery = defineQuery((t) => ({
  findUniqueHardware: t.prismaField(findUniqueHardwareQueryObject(t)),
}));
