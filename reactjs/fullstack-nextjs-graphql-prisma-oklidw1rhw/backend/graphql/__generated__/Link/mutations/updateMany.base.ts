import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyLinkMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.LinkWhereInput, required: false }),
      data: t.field({ type: Inputs.LinkUpdateManyMutationInput, required: true }),
    }))

export const updateManyLinkMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyLinkMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.link.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyLinkMutation = defineMutation((t) => ({
  updateManyLink: t.field(updateManyLinkMutationObject(t)),
}));
