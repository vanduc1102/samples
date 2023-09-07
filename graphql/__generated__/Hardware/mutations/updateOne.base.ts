import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneHardwareMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.HardwareWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.HardwareUpdateInput, required: true }),
    }))

export const updateOneHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hardware',
    nullable: true,
    args: updateOneHardwareMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneHardwareMutation = defineMutation((t) => ({
  updateOneHardware: t.prismaField(updateOneHardwareMutationObject(t)),
}));
