import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RemarksObject = definePrismaObject('Remarks', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(RemarksIdFieldObject),
    createdAt: t.field(RemarksCreatedAtFieldObject),
    updatedAt: t.field(RemarksUpdatedAtFieldObject),
    content: t.field(RemarksContentFieldObject),
    trashed: t.field(RemarksTrashedFieldObject),
    user: t.relation('user', RemarksUserFieldObject),
    userId: t.field(RemarksUserIdFieldObject),
  }),
});

export const RemarksIdFieldObject = defineFieldObject('Remarks', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const RemarksCreatedAtFieldObject = defineFieldObject('Remarks', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const RemarksUpdatedAtFieldObject = defineFieldObject('Remarks', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const RemarksContentFieldObject = defineFieldObject('Remarks', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.content,
});

export const RemarksTrashedFieldObject = defineFieldObject('Remarks', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.trashed,
});

export const RemarksUserFieldObject = defineRelationObject('Remarks', 'user', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const RemarksUserIdFieldObject = defineFieldObject('Remarks', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.userId,
});
