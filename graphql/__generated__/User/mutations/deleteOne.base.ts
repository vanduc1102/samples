import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneUserMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.UserWhereUniqueInput, required: true }) }))

export const deleteOneUserMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'User',
    nullable: true,
    args: deleteOneUserMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.user.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneUserMutation = defineMutation((t) => ({
  deleteOneUser: t.prismaField(deleteOneUserMutationObject(t)),
}));
