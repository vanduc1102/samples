import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const updateManyMarginModelMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.MarginModelWhereInput, required: false }),
      data: t.field({ type: Inputs.MarginModelUpdateManyMutationInput, required: true }),
    }))

export const updateManyMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: false,
    args: updateManyMarginModelMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.marginModel.updateMany({ where: args.where || undefined, data: args.data }),
  }),
);

export const updateManyMarginModelMutation = defineMutation((t) => ({
  updateManyMarginModel: t.field(updateManyMarginModelMutationObject(t)),
}));
