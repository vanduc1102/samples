import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneLinkMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.LinkWhereUniqueInput, required: true }) }))

export const deleteOneLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Link',
    nullable: true,
    args: deleteOneLinkMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneLinkMutation = defineMutation((t) => ({
  deleteOneLink: t.prismaField(deleteOneLinkMutationObject(t)),
}));
