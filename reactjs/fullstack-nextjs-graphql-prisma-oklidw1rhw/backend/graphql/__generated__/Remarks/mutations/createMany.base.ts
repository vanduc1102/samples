import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../builder';
import { defineMutation, defineMutationFunction, defineMutationPrismaObject } from '../../utils';

export const createManyRemarksMutationArgs = builder.args((t) => ({ data: t.field({ type: [Inputs.RemarksCreateInput], required: true }) }))

export const createManyRemarksMutationObject = defineMutationFunction((t) =>
  defineMutationPrismaObject({
    type: ['Remarks'],
    nullable: false,
    args: createManyRemarksMutationArgs,
    resolve: async (_query, _root, args, _context, _info) =>
      await prisma.$transaction(args.data.map((data) => prisma.remarks.create({ data }))),
  }),
);

export const createManyRemarksMutation = defineMutation((t) => ({
  createManyRemarks: t.prismaField(createManyRemarksMutationObject(t)),
}));
