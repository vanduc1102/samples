import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const LinkObject = definePrismaObject('Link', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(LinkIdFieldObject),
    createdAt: t.field(LinkCreatedAtFieldObject),
    updatedAt: t.field(LinkUpdatedAtFieldObject),
    title: t.field(LinkTitleFieldObject),
    description: t.field(LinkDescriptionFieldObject),
    url: t.field(LinkUrlFieldObject),
    imageUrl: t.field(LinkImageUrlFieldObject),
    category: t.field(LinkCategoryFieldObject),
    users: t.relation('users', LinkUsersFieldObject(t)),
  }),
});

export const LinkIdFieldObject = defineFieldObject('Link', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const LinkCreatedAtFieldObject = defineFieldObject('Link', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const LinkUpdatedAtFieldObject = defineFieldObject('Link', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const LinkTitleFieldObject = defineFieldObject('Link', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.title,
});

export const LinkDescriptionFieldObject = defineFieldObject('Link', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.description,
});

export const LinkUrlFieldObject = defineFieldObject('Link', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.url,
});

export const LinkImageUrlFieldObject = defineFieldObject('Link', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.imageUrl,
});

export const LinkCategoryFieldObject = defineFieldObject('Link', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.category,
});

export const LinkUsersFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.UserWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.UserOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.UserWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.UserScalarFieldEnum], required: false }),
}))

export const LinkUsersFieldObject = defineRelationFunction('Link', (t) =>
  defineRelationObject('Link', 'users', {
    description: undefined,
    nullable: false,
    args: LinkUsersFieldArgs,
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
