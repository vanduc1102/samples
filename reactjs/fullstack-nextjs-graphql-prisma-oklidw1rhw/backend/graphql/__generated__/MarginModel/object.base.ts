import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const MarginModelObject = definePrismaObject('MarginModel', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(MarginModelIdFieldObject),
    createdAt: t.field(MarginModelCreatedAtFieldObject),
    updatedAt: t.field(MarginModelUpdatedAtFieldObject),
    productCode: t.field(MarginModelProductCodeFieldObject),
    isActive: t.field(MarginModelIsActiveFieldObject),
    productType: t.field(MarginModelProductTypeFieldObject),
    productNameLabel: t.field(MarginModelProductNameLabelFieldObject),
    productNameValue: t.field(MarginModelProductNameValueFieldObject),
    remarksLabel: t.field(MarginModelRemarksLabelFieldObject),
    remarksValue: t.field(MarginModelRemarksValueFieldObject),
    priceLevel1Label: t.field(MarginModelPriceLevel1LabelFieldObject),
    priceLevel1Value: t.field(MarginModelPriceLevel1ValueFieldObject),
    priceLevel2Label: t.field(MarginModelPriceLevel2LabelFieldObject),
    priceLevel2Value: t.field(MarginModelPriceLevel2ValueFieldObject),
    priceLevel3Label: t.field(MarginModelPriceLevel3LabelFieldObject),
    priceLevel3Value: t.field(MarginModelPriceLevel3ValueFieldObject),
    priceLevel4Label: t.field(MarginModelPriceLevel4LabelFieldObject),
    priceLevel4Value: t.field(MarginModelPriceLevel4ValueFieldObject),
    priceLevel5Label: t.field(MarginModelPriceLevel5LabelFieldObject),
    priceLevel5Value: t.field(MarginModelPriceLevel5ValueFieldObject),
    priceLevel6Label: t.field(MarginModelPriceLevel6LabelFieldObject),
    priceLevel6Value: t.field(MarginModelPriceLevel6ValueFieldObject),
    priceLevel7Label: t.field(MarginModelPriceLevel7LabelFieldObject),
    priceLevel7Value: t.field(MarginModelPriceLevel7ValueFieldObject),
    priceLevel8Label: t.field(MarginModelPriceLevel8LabelFieldObject),
    priceLevel8Value: t.field(MarginModelPriceLevel8ValueFieldObject),
    priceLevel9Label: t.field(MarginModelPriceLevel9LabelFieldObject),
    priceLevel9Value: t.field(MarginModelPriceLevel9ValueFieldObject),
    priceLevel10Label: t.field(MarginModelPriceLevel10LabelFieldObject),
    priceLevel10Value: t.field(MarginModelPriceLevel10ValueFieldObject),
    priceLevel11Label: t.field(MarginModelPriceLevel11LabelFieldObject),
    priceLevel11Value: t.field(MarginModelPriceLevel11ValueFieldObject),
    hardware: t.relation('hardware', MarginModelHardwareFieldObject(t)),
  }),
});

export const MarginModelIdFieldObject = defineFieldObject('MarginModel', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const MarginModelCreatedAtFieldObject = defineFieldObject('MarginModel', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const MarginModelUpdatedAtFieldObject = defineFieldObject('MarginModel', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const MarginModelProductCodeFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.productCode,
});

export const MarginModelIsActiveFieldObject = defineFieldObject('MarginModel', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.isActive,
});

export const MarginModelProductTypeFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productType,
});

export const MarginModelProductNameLabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productNameLabel,
});

export const MarginModelProductNameValueFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.productNameValue,
});

export const MarginModelRemarksLabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.remarksLabel,
});

export const MarginModelRemarksValueFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.remarksValue,
});

export const MarginModelPriceLevel1LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel1Label,
});

export const MarginModelPriceLevel1ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel1Value,
});

export const MarginModelPriceLevel2LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel2Label,
});

export const MarginModelPriceLevel2ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel2Value,
});

export const MarginModelPriceLevel3LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel3Label,
});

export const MarginModelPriceLevel3ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel3Value,
});

export const MarginModelPriceLevel4LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel4Label,
});

export const MarginModelPriceLevel4ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel4Value,
});

export const MarginModelPriceLevel5LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel5Label,
});

export const MarginModelPriceLevel5ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel5Value,
});

export const MarginModelPriceLevel6LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel6Label,
});

export const MarginModelPriceLevel6ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel6Value,
});

export const MarginModelPriceLevel7LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel7Label,
});

export const MarginModelPriceLevel7ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel7Value,
});

export const MarginModelPriceLevel8LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel8Label,
});

export const MarginModelPriceLevel8ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel8Value,
});

export const MarginModelPriceLevel9LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel9Label,
});

export const MarginModelPriceLevel9ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel9Value,
});

export const MarginModelPriceLevel10LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel10Label,
});

export const MarginModelPriceLevel10ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel10Value,
});

export const MarginModelPriceLevel11LabelFieldObject = defineFieldObject('MarginModel', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel11Label,
});

export const MarginModelPriceLevel11ValueFieldObject = defineFieldObject('MarginModel', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.priceLevel11Value,
});

export const MarginModelHardwareFieldArgs = builder.args((t) => ({
  where: t.field({ type: Inputs.HardwareWhereInput, required: false }),
  orderBy: t.field({ type: [Inputs.HardwareOrderByWithRelationInput], required: false }),
  cursor: t.field({ type: Inputs.HardwareWhereUniqueInput, required: false }),
  take: t.field({ type: 'Int', required: false }),
  skip: t.field({ type: 'Int', required: false }),
  distinct: t.field({ type: [Inputs.HardwareScalarFieldEnum], required: false }),
}))

export const MarginModelHardwareFieldObject = defineRelationFunction('MarginModel', (t) =>
  defineRelationObject('MarginModel', 'hardware', {
    description: undefined,
    nullable: false,
    args: MarginModelHardwareFieldArgs,
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
