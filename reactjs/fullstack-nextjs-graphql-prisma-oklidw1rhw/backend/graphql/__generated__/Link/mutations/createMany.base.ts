import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyLinkMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.LinkCreateInput], required: true }) }))

export const createManyLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Link'],
    nullable: false,
    args: createManyLinkMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.link.create({ data }))),
  }),
);

export const createManyLinkMutation = defineMutation((t) => ({
  createManyLink: t.prismaField(createManyLinkMutationObject(t)),
}));
