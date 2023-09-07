import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneHardwareMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.HardwareCreateInput, required: true }) }))

export const createOneHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hardware',
    nullable: false,
    args: createOneHardwareMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.create({ data: args.data, ...query }),
  }),
);

export const createOneHardwareMutation = defineMutation((t) => ({
  createOneHardware: t.prismaField(createOneHardwareMutationObject(t)),
}));
