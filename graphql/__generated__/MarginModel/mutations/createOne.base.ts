import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneMarginModelMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.MarginModelCreateInput, required: true }) }))

export const createOneMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'MarginModel',
    nullable: false,
    args: createOneMarginModelMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.create({ data: args.data, ...query }),
  }),
);

export const createOneMarginModelMutation = defineMutation((t) => ({
  createOneMarginModel: t.prismaField(createOneMarginModelMutationObject(t)),
}));
