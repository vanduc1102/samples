import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createOneRemarksMutationArgs = builder.args((t) => ({ data: t.field({ type: Inputs.RemarksCreateInput, required: true }) }))

export const createOneRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: 'Remarks',
    nullable: false,
    args: createOneRemarksMutationArgs,
    resolve: async (query, _root, args, _context, _info) =>
      await prisma.remarks.create({ data: args.data, ...query }),
  }),
);

export const createOneRemarksMutation = defineMutation((t) => ({
  createOneRemarks: t.prismaField(createOneRemarksMutationObject(t)),
}));
