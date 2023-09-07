import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyHardwareMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.HardwareCreateInput], required: true }) }))

export const createManyHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Hardware'],
    nullable: false,
    args: createManyHardwareMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.hardware.create({ data }))),
  }),
);

export const createManyHardwareMutation = defineMutation((t) => ({
  createManyHardware: t.prismaField(createManyHardwareMutationObject(t)),
}));
