import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneLinkMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.LinkWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.LinkCreateInput, required: true }),
      update: t.field({ type: Inputs.LinkUpdateInput, required: true }),
    }))

export const upsertOneLinkMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Link',
    nullable: false,
    args: upsertOneLinkMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.link.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneLinkMutation = defineMutation((t) => ({
  upsertOneLink: t.prismaField(upsertOneLinkMutationObject(t)),
}));
