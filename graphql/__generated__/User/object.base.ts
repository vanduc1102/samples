import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(UserIdFieldObject),
    createdAt: t.field(UserCreatedAtFieldObject),
    updatedAt: t.field(UserUpdatedAtFieldObject),
    email: t.field(UserEmailFieldObject),
    image: t.field(UserImageFieldObject),
    role: t.relation('role', UserRoleFieldObject),
    roleId: t.field(UserRoleIdFieldObject),
    bookmarks: t.relation('bookmarks', UserBookmarksFieldObject(t)),
    remarks: t.relation('remarks', UserRemarksFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineFieldObject('User', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const UserCreatedAtFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const UserUpdatedAtFieldObject = defineFieldObject('User', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const UserEmailFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.email,
});

export const UserImageFieldObject = defineFieldObject('User', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.image,
});

export const UserRoleFieldObject = defineRelationObject('User', 'role', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const UserRoleIdFieldObject = defineFieldObject('User', {
  type: "Int",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.roleId,
});

export const UserBookmarksFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.LinkWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.LinkOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.LinkWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.LinkScalarFieldEnum], required: false }),
}))

export const UserBookmarksFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'bookmarks', {
    description: undefined,
    nullable: false,
    args: UserBookmarksFieldArgs,
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

export const UserRemarksFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.RemarksWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.RemarksOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.RemarksWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.RemarksScalarFieldEnum], required: false }),
}))

export const UserRemarksFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'remarks', {
    description: undefined,
    nullable: false,
    args: UserRemarksFieldArgs,
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
