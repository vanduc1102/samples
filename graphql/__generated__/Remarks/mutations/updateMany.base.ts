import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyRemarksMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RemarksWhereInput, required: false }),
      data: t.field({ type: Inputs.RemarksUpdateManyMutationInput, required: true }),
    }))

export const updateManyRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyRemarksMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.remarks.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyRemarksMutation = defineMutation((t) => ({
  updateManyRemarks: t.field(updateManyRemarksMutationObject(t)),
}));
