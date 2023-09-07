import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneLinkMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.LinkCreateInput, required: true }) }))

export const createOneLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Link',
    nullable: false,
    args: createOneLinkMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.create({ data: args.data, ...query }),
  }),
);

export const createOneLinkMutation = defineMutation((t) => ({
  createOneLink: t.prismaField(createOneLinkMutationObject(t)),
}));
