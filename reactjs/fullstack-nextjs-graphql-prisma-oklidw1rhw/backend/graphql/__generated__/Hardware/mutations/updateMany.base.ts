import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyHardwareMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.HardwareWhereInput, required: false }),
      data: t.field({ type: Inputs.HardwareUpdateManyMutationInput, required: true }),
    }))

export const updateManyHardwareMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyHardwareMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.hardware.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyHardwareMutation = defineMutation((t) => ({
  updateManyHardware: t.field(updateManyHardwareMutationObject(t)),
}));
