import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneMarginModelMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: true }) }))

export const deleteOneMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'MarginModel',
    nullable: true,
    args: deleteOneMarginModelMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneMarginModelMutation = defineMutation((t) => ({
  deleteOneMarginModel: t.prismaField(deleteOneMarginModelMutationObject(t)),
}));
