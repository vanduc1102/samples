import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const RoleObject = definePrismaObject('Role', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(RoleIdFieldObject),
    createdAt: t.field(RoleCreatedAtFieldObject),
    updatedAt: t.field(RoleUpdatedAtFieldObject),
    name: t.field(RoleNameFieldObject),
    code: t.field(RoleCodeFieldObject),
    users: t.relation('users', RoleUsersFieldObject(t)),
  }),
});

export const RoleIdFieldObject = defineFieldObject('Role', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const RoleCreatedAtFieldObject = defineFieldObject('Role', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const RoleUpdatedAtFieldObject = defineFieldObject('Role', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const RoleNameFieldObject = defineFieldObject('Role', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.name,
});

export const RoleCodeFieldObject = defineFieldObject('Role', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.code,
});

export const RoleUsersFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.UserWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.UserOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.UserWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserScalarFieldEnum], required: false }),
}))

export const RoleUsersFieldObject = defineRelationFunction('Role', (t) =>
  defineRelationObject('Role', 'users', {
    description: undefined,
    nullable: false,
    args: RoleUsersFieldArgs,
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
