import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const deleteOneRemarksMutationArgs = builder.args((t) => ({ where: t.field({ type: Inputs.RemarksWhereUniqueInput, required: true }) }))

export const deleteOneRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Remarks',
    nullable: true,
    args: deleteOneRemarksMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.delete({ where: args.where, ...query }),
  }),
);

export const deleteOneRemarksMutation = defineMutation((t) => ({
  deleteOneRemarks: t.prismaField(deleteOneRemarksMutationObject(t)),
}));
