import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneMarginModelMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.MarginModelWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.MarginModelCreateInput, required: true }),
      update: t.field({ type: Inputs.MarginModelUpdateInput, required: true }),
    }))

export const upsertOneMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'MarginModel',
    nullable: false,
    args: upsertOneMarginModelMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.marginModel.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneMarginModelMutation = defineMutation((t) => ({
  upsertOneMarginModel: t.prismaField(upsertOneMarginModelMutationObject(t)),
}));
