import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneHardwareMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.HardwareWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.HardwareCreateInput, required: true }),
      update: t.field({ type: Inputs.HardwareUpdateInput, required: true }),
    }))

export const upsertOneHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Hardware',
    nullable: false,
    args: upsertOneHardwareMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.hardware.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneHardwareMutation = defineMutation((t) => ({
  upsertOneHardware: t.prismaField(upsertOneHardwareMutationObject(t)),
}));
