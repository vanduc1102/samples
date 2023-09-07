import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneLinkMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.LinkWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.LinkUpdateInput, required: true }),
    }))

export const updateOneLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Link',
    nullable: true,
    args: updateOneLinkMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneLinkMutation = defineMutation((t) => ({
  updateOneLink: t.prismaField(updateOneLinkMutationObject(t)),
}));
