import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneHardwareMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.HardwareWhereUniqueInput, required: true }) }))

export const deleteOneHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hardware',
    nullable: true,
    args: deleteOneHardwareMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneHardwareMutation = defineMutation((t) => ({
  deleteOneHardware: t.prismaField(deleteOneHardwareMutationObject(t)),
}));
