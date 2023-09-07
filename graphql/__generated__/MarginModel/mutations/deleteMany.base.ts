import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyMarginModelMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.MarginModelWhereInput, required: true }) }))

export const deleteManyMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyMarginModelMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.marginModel.deleteMany({ where: args.where }),
  }),
);

export const deleteManyMarginModelMutation = defineMutation((t) => ({
  deleteManyMarginModel: t.field(deleteManyMarginModelMutationObject(t)),
}));
