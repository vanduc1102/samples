import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyMarginModelMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.MarginModelCreateInput], required: true }) }))

export const createManyMarginModelMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['MarginModel'],
    nullable: false,
    args: createManyMarginModelMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.marginModel.create({ data }))),
  }),
);

export const createManyMarginModelMutation = defineMutation((t) => ({
  createManyMarginModel: t.prismaField(createManyMarginModelMutationObject(t)),
}));
