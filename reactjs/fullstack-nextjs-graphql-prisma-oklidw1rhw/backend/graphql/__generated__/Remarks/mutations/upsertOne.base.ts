import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const upsertOneRemarksMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RemarksWhereUniqueInput, required: true }),
      create: t.field({ type: Inputs.RemarksCreateInput, required: true }),
      update: t.field({ type: Inputs.RemarksUpdateInput, required: true }),
    }))

export const upsertOneRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Remarks',
    nullable: false,
    args: upsertOneRemarksMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.upsert({
        where: args.where,
        create: args.create,
        update: args.update,
        ...query,
      }),
  }),
);

export const upsertOneRemarksMutation = defineMutation((t) => ({
  upsertOneRemarks: t.prismaField(upsertOneRemarksMutationObject(t)),
}));
