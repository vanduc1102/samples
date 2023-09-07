import * as Inputs from '@/backend/graphql/__generated__/inputs';
import { builder } from '../../builder';
import {
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const HardwareObject = definePrismaObject('Hardware', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.field(HardwareIdFieldObject),
    createdAt: t.field(HardwareCreatedAtFieldObject),
    updatedAt: t.field(HardwareUpdatedAtFieldObject),
    productCode: t.field(HardwareProductCodeFieldObject),
    isActive: t.field(HardwareIsActiveFieldObject),
    productType: t.field(HardwareProductTypeFieldObject),
    productNameLabel: t.field(HardwareProductNameLabelFieldObject),
    productNameValue: t.field(HardwareProductNameValueFieldObject),
    productShortDescriptionLabel: t.field(HardwareProductShortDescriptionLabelFieldObject),
    productShortDescriptionValue: t.field(HardwareProductShortDescriptionValueFieldObject),
    remarksLabel: t.field(HardwareRemarksLabelFieldObject),
    remarksValue: t.field(HardwareRemarksValueFieldObject),
    manufacturerLabel: t.field(HardwareManufacturerLabelFieldObject),
    manufacturerValue: t.field(HardwareManufacturerValueFieldObject),
    manufPartsNumberLabel: t.field(HardwareManufPartsNumberLabelFieldObject),
    manufPartsNumberValue: t.field(HardwareManufPartsNumberValueFieldObject),
    speedcastPartsNumberLabel: t.field(HardwareSpeedcastPartsNumberLabelFieldObject),
    speedcastPartsNumberValue: t.field(HardwareSpeedcastPartsNumberValueFieldObject),
    standardWarrantyLabel: t.field(HardwareStandardWarrantyLabelFieldObject),
    standardWarrantyValue: t.field(HardwareStandardWarrantyValueFieldObject),
    delivryLeadTimeLabel: t.field(HardwareDelivryLeadTimeLabelFieldObject),
    delivryLeadTimeValue: t.field(HardwareDelivryLeadTimeValueFieldObject),
    iNCOTERMLabel: t.field(HardwareINCOTERMLabelFieldObject),
    iNCOTERMValue: t.field(HardwareINCOTERMValueFieldObject),
    costValue: t.field(HardwareCostValueFieldObject),
    leaseToOwnMarginModel: t.field(HardwareLeaseToOwnMarginModelFieldObject),
    leaseToOperateMarginModel: t.field(HardwareLeaseToOperateMarginModelFieldObject),
    sellRoundup: t.field(HardwareSellRoundupFieldObject),
    leaseToOwnRoundup: t.field(HardwareLeaseToOwnRoundupFieldObject),
    leaseToOperateRoundup: t.field(HardwareLeaseToOperateRoundupFieldObject),
    pickUpLocationValue: t.field(HardwarePickUpLocationValueFieldObject),
    packageWeightLabel: t.field(HardwarePackageWeightLabelFieldObject),
    packageWeightValue: t.field(HardwarePackageWeightValueFieldObject),
    packageWeightUnit: t.field(HardwarePackageWeightUnitFieldObject),
    packageLengthLabel: t.field(HardwarePackageLengthLabelFieldObject),
    packageLengthValue: t.field(HardwarePackageLengthValueFieldObject),
    packageLengthUnit: t.field(HardwarePackageLengthUnitFieldObject),
    packageWidthLabel: t.field(HardwarePackageWidthLabelFieldObject),
    packageWidthValue: t.field(HardwarePackageWidthValueFieldObject),
    packageWidthUnit: t.field(HardwarePackageWidthUnitFieldObject),
    packageHeightLabel: t.field(HardwarePackageHeightLabelFieldObject),
    packageHeightValue: t.field(HardwarePackageHeightValueFieldObject),
    packageHeightUnit: t.field(HardwarePackageHeightUnitFieldObject),
    sellAllowed: t.field(HardwareSellAllowedFieldObject),
    leaseToOwn1_5MthAllowed: t.field(HardwareLeaseToOwn1_5MthAllowedFieldObject),
    leaseToOwn6_11MthAllowed: t.field(HardwareLeaseToOwn6_11MthAllowedFieldObject),
    leaseToOwn12_23MthAllowed: t.field(HardwareLeaseToOwn12_23MthAllowedFieldObject),
    leaseToOwn24_35MthAllowed: t.field(HardwareLeaseToOwn24_35MthAllowedFieldObject),
    leaseToOwn36_47MthAllowed: t.field(HardwareLeaseToOwn36_47MthAllowedFieldObject),
    leaseToOwn48_59MthAllowed: t.field(HardwareLeaseToOwn48_59MthAllowedFieldObject),
    leaseToOwn60MthAllowed: t.field(HardwareLeaseToOwn60MthAllowedFieldObject),
    leaseToOperate1_5MthAllowed: t.field(HardwareLeaseToOperate1_5MthAllowedFieldObject),
    leaseToOperate6_11MthAllowed: t.field(HardwareLeaseToOperate6_11MthAllowedFieldObject),
    leaseToOperate12_23MthAllowed: t.field(HardwareLeaseToOperate12_23MthAllowedFieldObject),
    leaseToOperate24_35MthAllowed: t.field(HardwareLeaseToOperate24_35MthAllowedFieldObject),
    leaseToOperate36_47MthAllowed: t.field(HardwareLeaseToOperate36_47MthAllowedFieldObject),
    leaseToOperate48_59MthAllowed: t.field(HardwareLeaseToOperate48_59MthAllowedFieldObject),
    leaseToOperate60MthAllowed: t.field(HardwareLeaseToOperate60MthAllowedFieldObject),
    sellMarginModel: t.relation('sellMarginModel', HardwareSellMarginModelFieldObject),
    sellMarginModelName: t.field(HardwareSellMarginModelNameFieldObject),
  }),
});

export const HardwareIdFieldObject = defineFieldObject('Hardware', {
  type: "ID",
  description: undefined,
  nullable: false,
  resolve: (parent) => String(parent.id),
});

export const HardwareCreatedAtFieldObject = defineFieldObject('Hardware', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.createdAt,
});

export const HardwareUpdatedAtFieldObject = defineFieldObject('Hardware', {
  type: Inputs.DateTime,
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.updatedAt,
});

export const HardwareProductCodeFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.productCode,
});

export const HardwareIsActiveFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.isActive,
});

export const HardwareProductTypeFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productType,
});

export const HardwareProductNameLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productNameLabel,
});

export const HardwareProductNameValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productNameValue,
});

export const HardwareProductShortDescriptionLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productShortDescriptionLabel,
});

export const HardwareProductShortDescriptionValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.productShortDescriptionValue,
});

export const HardwareRemarksLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.remarksLabel,
});

export const HardwareRemarksValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.remarksValue,
});

export const HardwareManufacturerLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.manufacturerLabel,
});

export const HardwareManufacturerValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.manufacturerValue,
});

export const HardwareManufPartsNumberLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.manufPartsNumberLabel,
});

export const HardwareManufPartsNumberValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.manufPartsNumberValue,
});

export const HardwareSpeedcastPartsNumberLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.speedcastPartsNumberLabel,
});

export const HardwareSpeedcastPartsNumberValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.speedcastPartsNumberValue,
});

export const HardwareStandardWarrantyLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.standardWarrantyLabel,
});

export const HardwareStandardWarrantyValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.standardWarrantyValue,
});

export const HardwareDelivryLeadTimeLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.delivryLeadTimeLabel,
});

export const HardwareDelivryLeadTimeValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.delivryLeadTimeValue,
});

export const HardwareINCOTERMLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.iNCOTERMLabel,
});

export const HardwareINCOTERMValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.iNCOTERMValue,
});

export const HardwareCostValueFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.costValue,
});

export const HardwareLeaseToOwnMarginModelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.leaseToOwnMarginModel,
});

export const HardwareLeaseToOperateMarginModelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.leaseToOperateMarginModel,
});

export const HardwareSellRoundupFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.sellRoundup,
});

export const HardwareLeaseToOwnRoundupFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.leaseToOwnRoundup,
});

export const HardwareLeaseToOperateRoundupFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.leaseToOperateRoundup,
});

export const HardwarePickUpLocationValueFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.pickUpLocationValue,
});

export const HardwarePackageWeightLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWeightLabel,
});

export const HardwarePackageWeightValueFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWeightValue,
});

export const HardwarePackageWeightUnitFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWeightUnit,
});

export const HardwarePackageLengthLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageLengthLabel,
});

export const HardwarePackageLengthValueFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageLengthValue,
});

export const HardwarePackageLengthUnitFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageLengthUnit,
});

export const HardwarePackageWidthLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWidthLabel,
});

export const HardwarePackageWidthValueFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWidthValue,
});

export const HardwarePackageWidthUnitFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageWidthUnit,
});

export const HardwarePackageHeightLabelFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageHeightLabel,
});

export const HardwarePackageHeightValueFieldObject = defineFieldObject('Hardware', {
  type: "Float",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageHeightValue,
});

export const HardwarePackageHeightUnitFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.packageHeightUnit,
});

export const HardwareSellAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.sellAllowed,
});

export const HardwareLeaseToOwn1_5MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn1_5MthAllowed,
});

export const HardwareLeaseToOwn6_11MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn6_11MthAllowed,
});

export const HardwareLeaseToOwn12_23MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn12_23MthAllowed,
});

export const HardwareLeaseToOwn24_35MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn24_35MthAllowed,
});

export const HardwareLeaseToOwn36_47MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn36_47MthAllowed,
});

export const HardwareLeaseToOwn48_59MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn48_59MthAllowed,
});

export const HardwareLeaseToOwn60MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOwn60MthAllowed,
});

export const HardwareLeaseToOperate1_5MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate1_5MthAllowed,
});

export const HardwareLeaseToOperate6_11MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate6_11MthAllowed,
});

export const HardwareLeaseToOperate12_23MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate12_23MthAllowed,
});

export const HardwareLeaseToOperate24_35MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate24_35MthAllowed,
});

export const HardwareLeaseToOperate36_47MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate36_47MthAllowed,
});

export const HardwareLeaseToOperate48_59MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate48_59MthAllowed,
});

export const HardwareLeaseToOperate60MthAllowedFieldObject = defineFieldObject('Hardware', {
  type: "Boolean",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.leaseToOperate60MthAllowed,
});

export const HardwareSellMarginModelFieldObject = defineRelationObject('Hardware', 'sellMarginModel', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const HardwareSellMarginModelNameFieldObject = defineFieldObject('Hardware', {
  type: "String",
  description: undefined,
  nullable: false,
  resolve: (parent) => parent.sellMarginModelName,
});
