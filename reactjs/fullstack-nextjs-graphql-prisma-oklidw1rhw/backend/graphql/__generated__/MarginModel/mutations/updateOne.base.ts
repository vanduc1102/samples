import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneMarginModelMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.MarginModelUpdateInput, required: true }),
    }))

export const updateOneMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'MarginModel',
    nullable: true,
    args: updateOneMarginModelMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneMarginModelMutation = defineMutation((t) => ({
  updateOneMarginModel: t.prismaField(updateOneMarginModelMutationObject(t)),
}));
