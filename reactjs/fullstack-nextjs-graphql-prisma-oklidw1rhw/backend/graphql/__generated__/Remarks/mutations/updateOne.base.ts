import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const updateOneRemarksMutationArgs = builder.args((t) => ({
      where: t.field({ type: Inputs.RemarksWhereUniqueInput, required: true }),
      data: t.field({ type: Inputs.RemarksUpdateInput, required: true }),
    }))

export const updateOneRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Remarks',
    nullable: true,
    args: updateOneRemarksMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.update({ where: args.where, data: args.data, ...query }),
  }),
);

export const updateOneRemarksMutation = defineMutation((t) => ({
  updateOneRemarks: t.prismaField(updateOneRemarksMutationObject(t)),
}));
