import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { BatchPayload } from '../../objects';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationObject } from '../../utils';

export const deleteManyLinkMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.LinkWhereInput, required: true }) }))

export const deleteManyLinkMutationObject = defineMutationFunction((t) =>
  defineMutationObject({
    type: BatchPayload,
    nullable: true,
    args: deleteManyLinkMutationArgs,
    resolve: async (_root, args, _context, _info) =>
      await prisma.link.deleteMany({ where: args.where }),
  }),
);

export const deleteManyLinkMutation = defineMutation((t) => ({
  deleteManyLink: t.field(deleteManyLinkMutationObject(t)),
}));
