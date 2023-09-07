import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyRemarksMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RemarksWhereInput, required: true }) }))

export const deleteManyRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyRemarksMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.remarks.deleteMany({ where: args.where }),
  }),
);

export const deleteManyRemarksMutation = defineMutation((t) => ({
  deleteManyRemarks: t.field(deleteManyRemarksMutationObject(t)),
}));
