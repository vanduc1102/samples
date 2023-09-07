import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyHardwareMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.HardwareWhereInput, required: true }) }))

export const deleteManyHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyHardwareMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.hardware.deleteMany({ where: args.where }),
  }),
);

export const deleteManyHardwareMutation = defineMutation((t) => ({
  deleteManyHardware: t.field(deleteManyHardwareMutationObject(t)),
}));
