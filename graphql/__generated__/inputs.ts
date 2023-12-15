// @ts-nocheck
import { Prisma } from '.prisma/client';

import { builder } from '../../reactjs/fullstack-nextjs-graphql-prisma-oklidw1rhw/builder';

type Filters = {
  string: Prisma.StringFieldUpdateOperationsInput;
  nullableString: Prisma.NullableStringFieldUpdateOperationsInput;
  dateTime: Prisma.DateTimeFieldUpdateOperationsInput;
  nullableDateTime: Prisma.NullableDateTimeFieldUpdateOperationsInput;
  int: Prisma.IntFieldUpdateOperationsInput;
  nullableInt: Prisma.NullableIntFieldUpdateOperationsInput;
  bool: Prisma.BoolFieldUpdateOperationsInput;
  nullableBool: Prisma.NullableBoolFieldUpdateOperationsInput;
  bigInt: Prisma.BigIntFieldUpdateOperationsInput;
  nullableBigInt: Prisma.NullableBigIntFieldUpdateOperationsInput;
  bytes: Prisma.BytesFieldUpdateOperationsInput;
  nullableBytes: Prisma.NullableBytesFieldUpdateOperationsInput;
  float: Prisma.FloatFieldUpdateOperationsInput;
  nullableFloat: Prisma.NullableFloatFieldUpdateOperationsInput;
  decimal: Prisma.DecimalFieldUpdateOperationsInput;
  nullableDecimal: Prisma.NullableDecimalFieldUpdateOperationsInput;
};

type ApplyFilters<InputField> = {
  [F in keyof Filters]: 0 extends 1 & Filters[F]
    ? never
    : Filters[F] extends InputField
    ? Filters[F]
    : never;
}[keyof Filters];

type PrismaUpdateOperationsInputFilter<T extends object> = {
  [K in keyof T]: [ApplyFilters<T[K]>] extends [never] ? T[K] : ApplyFilters<T[K]>
};

export const DateTime = builder.scalarType('DateTime', {
  parseValue: (value) => {
    try {
      const date = new Date(value)
      if (date.toString() === 'Invalid Date') throw new Error('Invalid Date')
      return date
    } catch (error) {
      throw new Error('Invalid Date');
    }
  },
  serialize: (value) => value ? new Date(value) : null,
});

export const TransactionIsolationLevel = builder.enumType('TransactionIsolationLevel', {
  values: ["ReadUncommitted","ReadCommitted","RepeatableRead","Serializable"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","email","image","roleId"] as const,
});

export const RoleScalarFieldEnum = builder.enumType('RoleScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","name","code"] as const,
});

export const LinkScalarFieldEnum = builder.enumType('LinkScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","title","description","url","imageUrl","category"] as const,
});

export const RemarksScalarFieldEnum = builder.enumType('RemarksScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","content","trashed","userId"] as const,
});

export const MarginModelScalarFieldEnum = builder.enumType('MarginModelScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","productCode","isActive","productType","productNameLabel","productNameValue","remarksLabel","remarksValue","priceLevel1Label","priceLevel1Value","priceLevel2Label","priceLevel2Value","priceLevel3Label","priceLevel3Value","priceLevel4Label","priceLevel4Value","priceLevel5Label","priceLevel5Value","priceLevel6Label","priceLevel6Value","priceLevel7Label","priceLevel7Value","priceLevel8Label","priceLevel8Value","priceLevel9Label","priceLevel9Value","priceLevel10Label","priceLevel10Value","priceLevel11Label","priceLevel11Value"] as const,
});

export const HardwareScalarFieldEnum = builder.enumType('HardwareScalarFieldEnum', {
  values: ["id","createdAt","updatedAt","productCode","isActive","productType","productNameLabel","productNameValue","productShortDescriptionLabel","productShortDescriptionValue","remarksLabel","remarksValue","manufacturerLabel","manufacturerValue","manufPartsNumberLabel","manufPartsNumberValue","speedcastPartsNumberLabel","speedcastPartsNumberValue","standardWarrantyLabel","standardWarrantyValue","delivryLeadTimeLabel","delivryLeadTimeValue","iNCOTERMLabel","iNCOTERMValue","costValue","leaseToOwnMarginModel","leaseToOperateMarginModel","sellRoundup","leaseToOwnRoundup","leaseToOperateRoundup","pickUpLocationValue","packageWeightLabel","packageWeightValue","packageWeightUnit","packageLengthLabel","packageLengthValue","packageLengthUnit","packageWidthLabel","packageWidthValue","packageWidthUnit","packageHeightLabel","packageHeightValue","packageHeightUnit","sellAllowed","leaseToOwn1_5MthAllowed","leaseToOwn6_11MthAllowed","leaseToOwn12_23MthAllowed","leaseToOwn24_35MthAllowed","leaseToOwn36_47MthAllowed","leaseToOwn48_59MthAllowed","leaseToOwn60MthAllowed","leaseToOperate1_5MthAllowed","leaseToOperate6_11MthAllowed","leaseToOperate12_23MthAllowed","leaseToOperate24_35MthAllowed","leaseToOperate36_47MthAllowed","leaseToOperate48_59MthAllowed","leaseToOperate60MthAllowed","sellMarginModelName"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const NullsOrder = builder.enumType('NullsOrder', {
  values: ["first","last"] as const,
});

export const UserWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  email: t.field({"required":false,"type":StringNullableFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
  role: t.field({"required":false,"type":RoleWhereInput}),
  bookmarks: t.field({"required":false,"type":LinkListRelationFilter}),
  remarks: t.field({"required":false,"type":RemarksListRelationFilter}),
});
export const UserWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereInput>>('UserWhereInput').implement({
  fields: UserWhereInputFields,
});

export const UserOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
  role: t.field({"required":false,"type":RoleOrderByWithRelationInput}),
  bookmarks: t.field({"required":false,"type":LinkOrderByRelationAggregateInput}),
  remarks: t.field({"required":false,"type":RemarksOrderByRelationAggregateInput}),
});
export const UserOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithRelationInput>>('UserOrderByWithRelationInput').implement({
  fields: UserOrderByWithRelationInputFields,
});

export const UserWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  email: t.string({"required":false}),
  AND: t.field({"required":false,"type":[UserWhereInput]}),
  OR: t.field({"required":false,"type":[UserWhereInput]}),
  NOT: t.field({"required":false,"type":[UserWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
  role: t.field({"required":false,"type":RoleWhereInput}),
  bookmarks: t.field({"required":false,"type":LinkListRelationFilter}),
  remarks: t.field({"required":false,"type":RemarksListRelationFilter}),
});
export const UserWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserWhereUniqueInput>>('UserWhereUniqueInput').implement({
  fields: UserWhereUniqueInputFields,
});

export const UserOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":UserCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":UserAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":UserMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":UserMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":UserSumOrderByAggregateInput}),
});
export const UserOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByWithAggregationInput>>('UserOrderByWithAggregationInput').implement({
  fields: UserOrderByWithAggregationInputFields,
});

export const UserScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  email: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  image: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  roleId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const UserScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereWithAggregatesInput>>('UserScalarWhereWithAggregatesInput').implement({
  fields: UserScalarWhereWithAggregatesInputFields,
});

export const RoleWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RoleWhereInput]}),
  OR: t.field({"required":false,"type":[RoleWhereInput]}),
  NOT: t.field({"required":false,"type":[RoleWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  code: t.field({"required":false,"type":StringFilter}),
  users: t.field({"required":false,"type":UserListRelationFilter}),
});
export const RoleWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleWhereInput>>('RoleWhereInput').implement({
  fields: RoleWhereInputFields,
});

export const RoleOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  code: t.field({"required":false,"type":SortOrder}),
  users: t.field({"required":false,"type":UserOrderByRelationAggregateInput}),
});
export const RoleOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleOrderByWithRelationInput>>('RoleOrderByWithRelationInput').implement({
  fields: RoleOrderByWithRelationInputFields,
});

export const RoleWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  code: t.string({"required":false}),
  AND: t.field({"required":false,"type":[RoleWhereInput]}),
  OR: t.field({"required":false,"type":[RoleWhereInput]}),
  NOT: t.field({"required":false,"type":[RoleWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  name: t.field({"required":false,"type":StringFilter}),
  users: t.field({"required":false,"type":UserListRelationFilter}),
});
export const RoleWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleWhereUniqueInput>>('RoleWhereUniqueInput').implement({
  fields: RoleWhereUniqueInputFields,
});

export const RoleOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  code: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RoleCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RoleAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RoleMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RoleMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RoleSumOrderByAggregateInput}),
});
export const RoleOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleOrderByWithAggregationInput>>('RoleOrderByWithAggregationInput').implement({
  fields: RoleOrderByWithAggregationInputFields,
});

export const RoleScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RoleScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  name: t.field({"required":false,"type":StringWithAggregatesFilter}),
  code: t.field({"required":false,"type":StringWithAggregatesFilter}),
});
export const RoleScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleScalarWhereWithAggregatesInput>>('RoleScalarWhereWithAggregatesInput').implement({
  fields: RoleScalarWhereWithAggregatesInputFields,
});

export const LinkWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[LinkWhereInput]}),
  OR: t.field({"required":false,"type":[LinkWhereInput]}),
  NOT: t.field({"required":false,"type":[LinkWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  title: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  url: t.field({"required":false,"type":StringFilter}),
  imageUrl: t.field({"required":false,"type":StringFilter}),
  category: t.field({"required":false,"type":StringFilter}),
  users: t.field({"required":false,"type":UserListRelationFilter}),
});
export const LinkWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkWhereInput>>('LinkWhereInput').implement({
  fields: LinkWhereInputFields,
});

export const LinkOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  url: t.field({"required":false,"type":SortOrder}),
  imageUrl: t.field({"required":false,"type":SortOrder}),
  category: t.field({"required":false,"type":SortOrder}),
  users: t.field({"required":false,"type":UserOrderByRelationAggregateInput}),
});
export const LinkOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkOrderByWithRelationInput>>('LinkOrderByWithRelationInput').implement({
  fields: LinkOrderByWithRelationInputFields,
});

export const LinkWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  AND: t.field({"required":false,"type":[LinkWhereInput]}),
  OR: t.field({"required":false,"type":[LinkWhereInput]}),
  NOT: t.field({"required":false,"type":[LinkWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  title: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  url: t.field({"required":false,"type":StringFilter}),
  imageUrl: t.field({"required":false,"type":StringFilter}),
  category: t.field({"required":false,"type":StringFilter}),
  users: t.field({"required":false,"type":UserListRelationFilter}),
});
export const LinkWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkWhereUniqueInput>>('LinkWhereUniqueInput').implement({
  fields: LinkWhereUniqueInputFields,
});

export const LinkOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  url: t.field({"required":false,"type":SortOrder}),
  imageUrl: t.field({"required":false,"type":SortOrder}),
  category: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":LinkCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":LinkAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":LinkMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":LinkMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":LinkSumOrderByAggregateInput}),
});
export const LinkOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkOrderByWithAggregationInput>>('LinkOrderByWithAggregationInput').implement({
  fields: LinkOrderByWithAggregationInputFields,
});

export const LinkScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[LinkScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[LinkScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[LinkScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  title: t.field({"required":false,"type":StringWithAggregatesFilter}),
  description: t.field({"required":false,"type":StringWithAggregatesFilter}),
  url: t.field({"required":false,"type":StringWithAggregatesFilter}),
  imageUrl: t.field({"required":false,"type":StringWithAggregatesFilter}),
  category: t.field({"required":false,"type":StringWithAggregatesFilter}),
});
export const LinkScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkScalarWhereWithAggregatesInput>>('LinkScalarWhereWithAggregatesInput').implement({
  fields: LinkScalarWhereWithAggregatesInputFields,
});

export const RemarksWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RemarksWhereInput]}),
  OR: t.field({"required":false,"type":[RemarksWhereInput]}),
  NOT: t.field({"required":false,"type":[RemarksWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  content: t.field({"required":false,"type":StringFilter}),
  trashed: t.field({"required":false,"type":BoolFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const RemarksWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksWhereInput>>('RemarksWhereInput').implement({
  fields: RemarksWhereInputFields,
});

export const RemarksOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  trashed: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  user: t.field({"required":false,"type":UserOrderByWithRelationInput}),
});
export const RemarksOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksOrderByWithRelationInput>>('RemarksOrderByWithRelationInput').implement({
  fields: RemarksOrderByWithRelationInputFields,
});

export const RemarksWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  content: t.string({"required":false}),
  AND: t.field({"required":false,"type":[RemarksWhereInput]}),
  OR: t.field({"required":false,"type":[RemarksWhereInput]}),
  NOT: t.field({"required":false,"type":[RemarksWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  trashed: t.field({"required":false,"type":BoolFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
  user: t.field({"required":false,"type":UserWhereInput}),
});
export const RemarksWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksWhereUniqueInput>>('RemarksWhereUniqueInput').implement({
  fields: RemarksWhereUniqueInputFields,
});

export const RemarksOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  trashed: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":RemarksCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":RemarksAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":RemarksMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":RemarksMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":RemarksSumOrderByAggregateInput}),
});
export const RemarksOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksOrderByWithAggregationInput>>('RemarksOrderByWithAggregationInput').implement({
  fields: RemarksOrderByWithAggregationInputFields,
});

export const RemarksScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RemarksScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[RemarksScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[RemarksScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  content: t.field({"required":false,"type":StringWithAggregatesFilter}),
  trashed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  userId: t.field({"required":false,"type":IntWithAggregatesFilter}),
});
export const RemarksScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksScalarWhereWithAggregatesInput>>('RemarksScalarWhereWithAggregatesInput').implement({
  fields: RemarksScalarWhereWithAggregatesInputFields,
});

export const MarginModelWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[MarginModelWhereInput]}),
  OR: t.field({"required":false,"type":[MarginModelWhereInput]}),
  NOT: t.field({"required":false,"type":[MarginModelWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  productCode: t.field({"required":false,"type":StringFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  productType: t.field({"required":false,"type":StringNullableFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableFilter}),
  productNameValue: t.field({"required":false,"type":StringFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel1Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel1Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel2Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel2Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel3Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel3Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel4Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel4Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel5Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel5Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel6Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel6Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel7Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel7Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel8Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel8Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel9Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel9Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel10Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel10Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel11Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel11Value: t.field({"required":false,"type":FloatNullableFilter}),
  hardware: t.field({"required":false,"type":HardwareListRelationFilter}),
});
export const MarginModelWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelWhereInput>>('MarginModelWhereInput').implement({
  fields: MarginModelWhereInputFields,
});

export const MarginModelOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  priceLevel1Label: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Label: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Label: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Label: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Label: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Label: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Label: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Label: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Label: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Label: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Label: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
  hardware: t.field({"required":false,"type":HardwareOrderByRelationAggregateInput}),
});
export const MarginModelOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelOrderByWithRelationInput>>('MarginModelOrderByWithRelationInput').implement({
  fields: MarginModelOrderByWithRelationInputFields,
});

export const MarginModelWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  productCode: t.string({"required":false}),
  productNameValue: t.string({"required":false}),
  AND: t.field({"required":false,"type":[MarginModelWhereInput]}),
  OR: t.field({"required":false,"type":[MarginModelWhereInput]}),
  NOT: t.field({"required":false,"type":[MarginModelWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  productType: t.field({"required":false,"type":StringNullableFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel1Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel1Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel2Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel2Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel3Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel3Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel4Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel4Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel5Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel5Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel6Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel6Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel7Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel7Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel8Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel8Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel9Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel9Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel10Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel10Value: t.field({"required":false,"type":FloatNullableFilter}),
  priceLevel11Label: t.field({"required":false,"type":StringNullableFilter}),
  priceLevel11Value: t.field({"required":false,"type":FloatNullableFilter}),
  hardware: t.field({"required":false,"type":HardwareListRelationFilter}),
});
export const MarginModelWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelWhereUniqueInput>>('MarginModelWhereUniqueInput').implement({
  fields: MarginModelWhereUniqueInputFields,
});

export const MarginModelOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  priceLevel1Label: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Label: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Label: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Label: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Label: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Label: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Label: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Label: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Label: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Label: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Label: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":MarginModelCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":MarginModelAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":MarginModelMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":MarginModelMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":MarginModelSumOrderByAggregateInput}),
});
export const MarginModelOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelOrderByWithAggregationInput>>('MarginModelOrderByWithAggregationInput').implement({
  fields: MarginModelOrderByWithAggregationInputFields,
});

export const MarginModelScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[MarginModelScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[MarginModelScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[MarginModelScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  productCode: t.field({"required":false,"type":StringWithAggregatesFilter}),
  isActive: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  productType: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productNameValue: t.field({"required":false,"type":StringWithAggregatesFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel1Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel1Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel2Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel2Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel3Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel3Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel4Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel4Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel5Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel5Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel6Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel6Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel7Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel7Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel8Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel8Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel9Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel9Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel10Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel10Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  priceLevel11Label: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  priceLevel11Value: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
});
export const MarginModelScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelScalarWhereWithAggregatesInput>>('MarginModelScalarWhereWithAggregatesInput').implement({
  fields: MarginModelScalarWhereWithAggregatesInputFields,
});

export const HardwareWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[HardwareWhereInput]}),
  OR: t.field({"required":false,"type":[HardwareWhereInput]}),
  NOT: t.field({"required":false,"type":[HardwareWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  productCode: t.field({"required":false,"type":StringFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  productType: t.field({"required":false,"type":StringNullableFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableFilter}),
  productNameValue: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionLabel: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionValue: t.field({"required":false,"type":StringNullableFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerValue: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyLabel: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyValue: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeLabel: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeValue: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMLabel: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMValue: t.field({"required":false,"type":StringNullableFilter}),
  costValue: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  leaseToOperateMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  sellRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOperateRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  pickUpLocationValue: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageLengthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWidthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageHeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  sellAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  sellMarginModelName: t.field({"required":false,"type":StringFilter}),
  sellMarginModel: t.field({"required":false,"type":MarginModelWhereInput}),
});
export const HardwareWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareWhereInput>>('HardwareWhereInput').implement({
  fields: HardwareWhereInputFields,
});

export const HardwareOrderByWithRelationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionLabel: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  manufacturerLabel: t.field({"required":false,"type":SortOrder}),
  manufacturerValue: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  standardWarrantyLabel: t.field({"required":false,"type":SortOrder}),
  standardWarrantyValue: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeLabel: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeValue: t.field({"required":false,"type":SortOrder}),
  iNCOTERMLabel: t.field({"required":false,"type":SortOrder}),
  iNCOTERMValue: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  leaseToOwnMarginModel: t.field({"required":false,"type":SortOrder}),
  leaseToOperateMarginModel: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  pickUpLocationValue: t.field({"required":false,"type":SortOrder}),
  packageWeightLabel: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageWeightUnit: t.field({"required":false,"type":SortOrder}),
  packageLengthLabel: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageLengthUnit: t.field({"required":false,"type":SortOrder}),
  packageWidthLabel: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthUnit: t.field({"required":false,"type":SortOrder}),
  packageHeightLabel: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
  packageHeightUnit: t.field({"required":false,"type":SortOrder}),
  sellAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":SortOrder}),
  sellMarginModelName: t.field({"required":false,"type":SortOrder}),
  sellMarginModel: t.field({"required":false,"type":MarginModelOrderByWithRelationInput}),
});
export const HardwareOrderByWithRelationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareOrderByWithRelationInput>>('HardwareOrderByWithRelationInput').implement({
  fields: HardwareOrderByWithRelationInputFields,
});

export const HardwareWhereUniqueInputFields = (t: any) => ({
  id: t.int({"required":false}),
  productCode: t.string({"required":false}),
  AND: t.field({"required":false,"type":[HardwareWhereInput]}),
  OR: t.field({"required":false,"type":[HardwareWhereInput]}),
  NOT: t.field({"required":false,"type":[HardwareWhereInput]}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  productType: t.field({"required":false,"type":StringNullableFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableFilter}),
  productNameValue: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionLabel: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionValue: t.field({"required":false,"type":StringNullableFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerValue: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyLabel: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyValue: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeLabel: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeValue: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMLabel: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMValue: t.field({"required":false,"type":StringNullableFilter}),
  costValue: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  leaseToOperateMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  sellRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOperateRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  pickUpLocationValue: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageLengthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWidthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageHeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  sellAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  sellMarginModelName: t.field({"required":false,"type":StringFilter}),
  sellMarginModel: t.field({"required":false,"type":MarginModelWhereInput}),
});
export const HardwareWhereUniqueInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareWhereUniqueInput>>('HardwareWhereUniqueInput').implement({
  fields: HardwareWhereUniqueInputFields,
});

export const HardwareOrderByWithAggregationInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionLabel: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  manufacturerLabel: t.field({"required":false,"type":SortOrder}),
  manufacturerValue: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  standardWarrantyLabel: t.field({"required":false,"type":SortOrder}),
  standardWarrantyValue: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeLabel: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeValue: t.field({"required":false,"type":SortOrder}),
  iNCOTERMLabel: t.field({"required":false,"type":SortOrder}),
  iNCOTERMValue: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  leaseToOwnMarginModel: t.field({"required":false,"type":SortOrder}),
  leaseToOperateMarginModel: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  pickUpLocationValue: t.field({"required":false,"type":SortOrder}),
  packageWeightLabel: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageWeightUnit: t.field({"required":false,"type":SortOrder}),
  packageLengthLabel: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageLengthUnit: t.field({"required":false,"type":SortOrder}),
  packageWidthLabel: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthUnit: t.field({"required":false,"type":SortOrder}),
  packageHeightLabel: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
  packageHeightUnit: t.field({"required":false,"type":SortOrder}),
  sellAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":SortOrder}),
  sellMarginModelName: t.field({"required":false,"type":SortOrder}),
  _count: t.field({"required":false,"type":HardwareCountOrderByAggregateInput}),
  _avg: t.field({"required":false,"type":HardwareAvgOrderByAggregateInput}),
  _max: t.field({"required":false,"type":HardwareMaxOrderByAggregateInput}),
  _min: t.field({"required":false,"type":HardwareMinOrderByAggregateInput}),
  _sum: t.field({"required":false,"type":HardwareSumOrderByAggregateInput}),
});
export const HardwareOrderByWithAggregationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareOrderByWithAggregationInput>>('HardwareOrderByWithAggregationInput').implement({
  fields: HardwareOrderByWithAggregationInputFields,
});

export const HardwareScalarWhereWithAggregatesInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[HardwareScalarWhereWithAggregatesInput]}),
  OR: t.field({"required":false,"type":[HardwareScalarWhereWithAggregatesInput]}),
  NOT: t.field({"required":false,"type":[HardwareScalarWhereWithAggregatesInput]}),
  id: t.field({"required":false,"type":IntWithAggregatesFilter}),
  createdAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeWithAggregatesFilter}),
  productCode: t.field({"required":false,"type":StringWithAggregatesFilter}),
  isActive: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  productType: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productNameValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productShortDescriptionLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  productShortDescriptionValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  manufacturerLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  manufacturerValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  manufPartsNumberLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  manufPartsNumberValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  speedcastPartsNumberValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  standardWarrantyLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  standardWarrantyValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  delivryLeadTimeLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  delivryLeadTimeValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  iNCOTERMLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  iNCOTERMValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  costValue: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  leaseToOwnMarginModel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  leaseToOperateMarginModel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  sellRoundup: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  leaseToOwnRoundup: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  leaseToOperateRoundup: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  pickUpLocationValue: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageWeightLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageWeightValue: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  packageWeightUnit: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageLengthLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageLengthValue: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  packageLengthUnit: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageWidthLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageWidthValue: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  packageWidthUnit: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageHeightLabel: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  packageHeightValue: t.field({"required":false,"type":FloatNullableWithAggregatesFilter}),
  packageHeightUnit: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  sellAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolWithAggregatesFilter}),
  sellMarginModelName: t.field({"required":false,"type":StringWithAggregatesFilter}),
});
export const HardwareScalarWhereWithAggregatesInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareScalarWhereWithAggregatesInput>>('HardwareScalarWhereWithAggregatesInput').implement({
  fields: HardwareScalarWhereWithAggregatesInputFields,
});

export const UserCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutUsersInput}),
  bookmarks: t.field({"required":false,"type":LinkCreateNestedManyWithoutUsersInput}),
  remarks: t.field({"required":false,"type":RemarksCreateNestedManyWithoutUserInput}),
});
export const UserCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateInput>>('UserCreateInput').implement({
  fields: UserCreateInputFields,
});

export const UserUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutUsersNestedInput}),
  bookmarks: t.field({"required":false,"type":LinkUpdateManyWithoutUsersNestedInput}),
  remarks: t.field({"required":false,"type":RemarksUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateInput>>('UserUpdateInput').implement({
  fields: UserUpdateInputFields,
});

export const UserCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
  roleId: t.int({"required":true}),
});
export const UserCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyInput>>('UserCreateManyInput').implement({
  fields: UserCreateManyInputFields,
});

export const UserUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
});
export const UserUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyMutationInput>>('UserUpdateManyMutationInput').implement({
  fields: UserUpdateManyMutationInputFields,
});

export const RoleCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  name: t.string({"required":true}),
  code: t.string({"required":true}),
  users: t.field({"required":false,"type":UserCreateNestedManyWithoutRoleInput}),
});
export const RoleCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateInput>>('RoleCreateInput').implement({
  fields: RoleCreateInputFields,
});

export const RoleUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  code: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  users: t.field({"required":false,"type":UserUpdateManyWithoutRoleNestedInput}),
});
export const RoleUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateInput>>('RoleUpdateInput').implement({
  fields: RoleUpdateInputFields,
});

export const RoleCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  name: t.string({"required":true}),
  code: t.string({"required":true}),
});
export const RoleCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateManyInput>>('RoleCreateManyInput').implement({
  fields: RoleCreateManyInputFields,
});

export const RoleUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  code: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const RoleUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateManyMutationInput>>('RoleUpdateManyMutationInput').implement({
  fields: RoleUpdateManyMutationInputFields,
});

export const LinkCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  title: t.string({"required":true}),
  description: t.string({"required":true}),
  url: t.string({"required":true}),
  imageUrl: t.string({"required":true}),
  category: t.string({"required":true}),
  users: t.field({"required":false,"type":UserCreateNestedManyWithoutBookmarksInput}),
});
export const LinkCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCreateInput>>('LinkCreateInput').implement({
  fields: LinkCreateInputFields,
});

export const LinkUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  url: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  imageUrl: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  category: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  users: t.field({"required":false,"type":UserUpdateManyWithoutBookmarksNestedInput}),
});
export const LinkUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateInput>>('LinkUpdateInput').implement({
  fields: LinkUpdateInputFields,
});

export const LinkCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  title: t.string({"required":true}),
  description: t.string({"required":true}),
  url: t.string({"required":true}),
  imageUrl: t.string({"required":true}),
  category: t.string({"required":true}),
});
export const LinkCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCreateManyInput>>('LinkCreateManyInput').implement({
  fields: LinkCreateManyInputFields,
});

export const LinkUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  url: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  imageUrl: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  category: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const LinkUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateManyMutationInput>>('LinkUpdateManyMutationInput').implement({
  fields: LinkUpdateManyMutationInputFields,
});

export const RemarksCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  content: t.string({"required":true}),
  trashed: t.boolean({"required":false}),
  user: t.field({"required":true,"type":UserCreateNestedOneWithoutRemarksInput}),
});
export const RemarksCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateInput>>('RemarksCreateInput').implement({
  fields: RemarksCreateInputFields,
});

export const RemarksUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  content: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  trashed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  user: t.field({"required":false,"type":UserUpdateOneRequiredWithoutRemarksNestedInput}),
});
export const RemarksUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateInput>>('RemarksUpdateInput').implement({
  fields: RemarksUpdateInputFields,
});

export const RemarksCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  content: t.string({"required":true}),
  trashed: t.boolean({"required":false}),
  userId: t.int({"required":true}),
});
export const RemarksCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateManyInput>>('RemarksCreateManyInput').implement({
  fields: RemarksCreateManyInputFields,
});

export const RemarksUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  content: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  trashed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
});
export const RemarksUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateManyMutationInput>>('RemarksUpdateManyMutationInput').implement({
  fields: RemarksUpdateManyMutationInputFields,
});

export const MarginModelCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":true}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  priceLevel1Label: t.string({"required":false}),
  priceLevel1Value: t.float({"required":false}),
  priceLevel2Label: t.string({"required":false}),
  priceLevel2Value: t.float({"required":false}),
  priceLevel3Label: t.string({"required":false}),
  priceLevel3Value: t.float({"required":false}),
  priceLevel4Label: t.string({"required":false}),
  priceLevel4Value: t.float({"required":false}),
  priceLevel5Label: t.string({"required":false}),
  priceLevel5Value: t.float({"required":false}),
  priceLevel6Label: t.string({"required":false}),
  priceLevel6Value: t.float({"required":false}),
  priceLevel7Label: t.string({"required":false}),
  priceLevel7Value: t.float({"required":false}),
  priceLevel8Label: t.string({"required":false}),
  priceLevel8Value: t.float({"required":false}),
  priceLevel9Label: t.string({"required":false}),
  priceLevel9Value: t.float({"required":false}),
  priceLevel10Label: t.string({"required":false}),
  priceLevel10Value: t.float({"required":false}),
  priceLevel11Label: t.string({"required":false}),
  priceLevel11Value: t.float({"required":false}),
  hardware: t.field({"required":false,"type":HardwareCreateNestedManyWithoutSellMarginModelInput}),
});
export const MarginModelCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCreateInput>>('MarginModelCreateInput').implement({
  fields: MarginModelCreateInputFields,
});

export const MarginModelUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel2Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel2Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel3Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel3Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel4Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel4Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel5Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel5Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel6Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel6Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel7Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel7Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel8Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel8Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel9Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel9Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel10Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel10Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel11Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel11Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  hardware: t.field({"required":false,"type":HardwareUpdateManyWithoutSellMarginModelNestedInput}),
});
export const MarginModelUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpdateInput>>('MarginModelUpdateInput').implement({
  fields: MarginModelUpdateInputFields,
});

export const MarginModelCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":true}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  priceLevel1Label: t.string({"required":false}),
  priceLevel1Value: t.float({"required":false}),
  priceLevel2Label: t.string({"required":false}),
  priceLevel2Value: t.float({"required":false}),
  priceLevel3Label: t.string({"required":false}),
  priceLevel3Value: t.float({"required":false}),
  priceLevel4Label: t.string({"required":false}),
  priceLevel4Value: t.float({"required":false}),
  priceLevel5Label: t.string({"required":false}),
  priceLevel5Value: t.float({"required":false}),
  priceLevel6Label: t.string({"required":false}),
  priceLevel6Value: t.float({"required":false}),
  priceLevel7Label: t.string({"required":false}),
  priceLevel7Value: t.float({"required":false}),
  priceLevel8Label: t.string({"required":false}),
  priceLevel8Value: t.float({"required":false}),
  priceLevel9Label: t.string({"required":false}),
  priceLevel9Value: t.float({"required":false}),
  priceLevel10Label: t.string({"required":false}),
  priceLevel10Value: t.float({"required":false}),
  priceLevel11Label: t.string({"required":false}),
  priceLevel11Value: t.float({"required":false}),
});
export const MarginModelCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCreateManyInput>>('MarginModelCreateManyInput').implement({
  fields: MarginModelCreateManyInputFields,
});

export const MarginModelUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel2Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel2Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel3Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel3Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel4Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel4Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel5Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel5Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel6Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel6Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel7Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel7Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel8Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel8Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel9Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel9Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel10Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel10Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel11Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel11Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
});
export const MarginModelUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpdateManyMutationInput>>('MarginModelUpdateManyMutationInput').implement({
  fields: MarginModelUpdateManyMutationInputFields,
});

export const HardwareCreateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":false}),
  productShortDescriptionLabel: t.string({"required":false}),
  productShortDescriptionValue: t.string({"required":false}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  manufacturerLabel: t.string({"required":false}),
  manufacturerValue: t.string({"required":false}),
  manufPartsNumberLabel: t.string({"required":false}),
  manufPartsNumberValue: t.string({"required":false}),
  speedcastPartsNumberLabel: t.string({"required":false}),
  speedcastPartsNumberValue: t.string({"required":false}),
  standardWarrantyLabel: t.string({"required":false}),
  standardWarrantyValue: t.string({"required":false}),
  delivryLeadTimeLabel: t.string({"required":false}),
  delivryLeadTimeValue: t.string({"required":false}),
  iNCOTERMLabel: t.string({"required":false}),
  iNCOTERMValue: t.string({"required":false}),
  costValue: t.float({"required":false}),
  leaseToOwnMarginModel: t.string({"required":false}),
  leaseToOperateMarginModel: t.string({"required":false}),
  sellRoundup: t.float({"required":false}),
  leaseToOwnRoundup: t.float({"required":false}),
  leaseToOperateRoundup: t.float({"required":false}),
  pickUpLocationValue: t.string({"required":false}),
  packageWeightLabel: t.string({"required":false}),
  packageWeightValue: t.float({"required":false}),
  packageWeightUnit: t.string({"required":false}),
  packageLengthLabel: t.string({"required":false}),
  packageLengthValue: t.float({"required":false}),
  packageLengthUnit: t.string({"required":false}),
  packageWidthLabel: t.string({"required":false}),
  packageWidthValue: t.float({"required":false}),
  packageWidthUnit: t.string({"required":false}),
  packageHeightLabel: t.string({"required":false}),
  packageHeightValue: t.float({"required":false}),
  packageHeightUnit: t.string({"required":false}),
  sellAllowed: t.boolean({"required":false}),
  leaseToOwn1_5MthAllowed: t.boolean({"required":false}),
  leaseToOwn6_11MthAllowed: t.boolean({"required":false}),
  leaseToOwn12_23MthAllowed: t.boolean({"required":false}),
  leaseToOwn24_35MthAllowed: t.boolean({"required":false}),
  leaseToOwn36_47MthAllowed: t.boolean({"required":false}),
  leaseToOwn48_59MthAllowed: t.boolean({"required":false}),
  leaseToOwn60MthAllowed: t.boolean({"required":false}),
  leaseToOperate1_5MthAllowed: t.boolean({"required":false}),
  leaseToOperate6_11MthAllowed: t.boolean({"required":false}),
  leaseToOperate12_23MthAllowed: t.boolean({"required":false}),
  leaseToOperate24_35MthAllowed: t.boolean({"required":false}),
  leaseToOperate36_47MthAllowed: t.boolean({"required":false}),
  leaseToOperate48_59MthAllowed: t.boolean({"required":false}),
  leaseToOperate60MthAllowed: t.boolean({"required":false}),
  sellMarginModel: t.field({"required":true,"type":MarginModelCreateNestedOneWithoutHardwareInput}),
});
export const HardwareCreateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateInput>>('HardwareCreateInput').implement({
  fields: HardwareCreateInputFields,
});

export const HardwareUpdateInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  costValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  leaseToOperateMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOperateRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  pickUpLocationValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageLengthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWidthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageHeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  sellMarginModel: t.field({"required":false,"type":MarginModelUpdateOneRequiredWithoutHardwareNestedInput}),
});
export const HardwareUpdateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateInput>>('HardwareUpdateInput').implement({
  fields: HardwareUpdateInputFields,
});

export const HardwareCreateManyInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":false}),
  productShortDescriptionLabel: t.string({"required":false}),
  productShortDescriptionValue: t.string({"required":false}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  manufacturerLabel: t.string({"required":false}),
  manufacturerValue: t.string({"required":false}),
  manufPartsNumberLabel: t.string({"required":false}),
  manufPartsNumberValue: t.string({"required":false}),
  speedcastPartsNumberLabel: t.string({"required":false}),
  speedcastPartsNumberValue: t.string({"required":false}),
  standardWarrantyLabel: t.string({"required":false}),
  standardWarrantyValue: t.string({"required":false}),
  delivryLeadTimeLabel: t.string({"required":false}),
  delivryLeadTimeValue: t.string({"required":false}),
  iNCOTERMLabel: t.string({"required":false}),
  iNCOTERMValue: t.string({"required":false}),
  costValue: t.float({"required":false}),
  leaseToOwnMarginModel: t.string({"required":false}),
  leaseToOperateMarginModel: t.string({"required":false}),
  sellRoundup: t.float({"required":false}),
  leaseToOwnRoundup: t.float({"required":false}),
  leaseToOperateRoundup: t.float({"required":false}),
  pickUpLocationValue: t.string({"required":false}),
  packageWeightLabel: t.string({"required":false}),
  packageWeightValue: t.float({"required":false}),
  packageWeightUnit: t.string({"required":false}),
  packageLengthLabel: t.string({"required":false}),
  packageLengthValue: t.float({"required":false}),
  packageLengthUnit: t.string({"required":false}),
  packageWidthLabel: t.string({"required":false}),
  packageWidthValue: t.float({"required":false}),
  packageWidthUnit: t.string({"required":false}),
  packageHeightLabel: t.string({"required":false}),
  packageHeightValue: t.float({"required":false}),
  packageHeightUnit: t.string({"required":false}),
  sellAllowed: t.boolean({"required":false}),
  leaseToOwn1_5MthAllowed: t.boolean({"required":false}),
  leaseToOwn6_11MthAllowed: t.boolean({"required":false}),
  leaseToOwn12_23MthAllowed: t.boolean({"required":false}),
  leaseToOwn24_35MthAllowed: t.boolean({"required":false}),
  leaseToOwn36_47MthAllowed: t.boolean({"required":false}),
  leaseToOwn48_59MthAllowed: t.boolean({"required":false}),
  leaseToOwn60MthAllowed: t.boolean({"required":false}),
  leaseToOperate1_5MthAllowed: t.boolean({"required":false}),
  leaseToOperate6_11MthAllowed: t.boolean({"required":false}),
  leaseToOperate12_23MthAllowed: t.boolean({"required":false}),
  leaseToOperate24_35MthAllowed: t.boolean({"required":false}),
  leaseToOperate36_47MthAllowed: t.boolean({"required":false}),
  leaseToOperate48_59MthAllowed: t.boolean({"required":false}),
  leaseToOperate60MthAllowed: t.boolean({"required":false}),
  sellMarginModelName: t.string({"required":true}),
});
export const HardwareCreateManyInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateManyInput>>('HardwareCreateManyInput').implement({
  fields: HardwareCreateManyInputFields,
});

export const HardwareUpdateManyMutationInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  costValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  leaseToOperateMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOperateRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  pickUpLocationValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageLengthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWidthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageHeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
});
export const HardwareUpdateManyMutationInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateManyMutationInput>>('HardwareUpdateManyMutationInput').implement({
  fields: HardwareUpdateManyMutationInputFields,
});

export const IntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFilter>>('IntFilter').implement({
  fields: IntFilterFields,
});

export const DateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFilter>>('DateTimeFilter').implement({
  fields: DateTimeFilterFields,
});

export const StringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableFilter>>('StringNullableFilter').implement({
  fields: StringNullableFilterFields,
});

export const RoleRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":RoleWhereInput}),
  isNot: t.field({"required":false,"type":RoleWhereInput}),
});
export const RoleRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleRelationFilter>>('RoleRelationFilter').implement({
  fields: RoleRelationFilterFields,
});

export const LinkListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":LinkWhereInput}),
  some: t.field({"required":false,"type":LinkWhereInput}),
  none: t.field({"required":false,"type":LinkWhereInput}),
});
export const LinkListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkListRelationFilter>>('LinkListRelationFilter').implement({
  fields: LinkListRelationFilterFields,
});

export const RemarksListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":RemarksWhereInput}),
  some: t.field({"required":false,"type":RemarksWhereInput}),
  none: t.field({"required":false,"type":RemarksWhereInput}),
});
export const RemarksListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksListRelationFilter>>('RemarksListRelationFilter').implement({
  fields: RemarksListRelationFilterFields,
});

export const LinkOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const LinkOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkOrderByRelationAggregateInput>>('LinkOrderByRelationAggregateInput').implement({
  fields: LinkOrderByRelationAggregateInputFields,
});

export const RemarksOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const RemarksOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksOrderByRelationAggregateInput>>('RemarksOrderByRelationAggregateInput').implement({
  fields: RemarksOrderByRelationAggregateInputFields,
});

export const UserCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCountOrderByAggregateInput>>('UserCountOrderByAggregateInput').implement({
  fields: UserCountOrderByAggregateInputFields,
});

export const UserAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserAvgOrderByAggregateInput>>('UserAvgOrderByAggregateInput').implement({
  fields: UserAvgOrderByAggregateInputFields,
});

export const UserMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMaxOrderByAggregateInput>>('UserMaxOrderByAggregateInput').implement({
  fields: UserMaxOrderByAggregateInputFields,
});

export const UserMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  email: t.field({"required":false,"type":SortOrder}),
  image: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserMinOrderByAggregateInput>>('UserMinOrderByAggregateInput').implement({
  fields: UserMinOrderByAggregateInputFields,
});

export const UserSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  roleId: t.field({"required":false,"type":SortOrder}),
});
export const UserSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserSumOrderByAggregateInput>>('UserSumOrderByAggregateInput').implement({
  fields: UserSumOrderByAggregateInputFields,
});

export const IntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const IntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntWithAggregatesFilter>>('IntWithAggregatesFilter').implement({
  fields: IntWithAggregatesFilterFields,
});

export const DateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const DateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeWithAggregatesFilter>>('DateTimeWithAggregatesFilter').implement({
  fields: DateTimeWithAggregatesFilterFields,
});

export const StringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const StringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringNullableWithAggregatesFilter>>('StringNullableWithAggregatesFilter').implement({
  fields: StringNullableWithAggregatesFilterFields,
});

export const StringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFilter>>('StringFilter').implement({
  fields: StringFilterFields,
});

export const UserListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":UserWhereInput}),
  some: t.field({"required":false,"type":UserWhereInput}),
  none: t.field({"required":false,"type":UserWhereInput}),
});
export const UserListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserListRelationFilter>>('UserListRelationFilter').implement({
  fields: UserListRelationFilterFields,
});

export const UserOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const UserOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserOrderByRelationAggregateInput>>('UserOrderByRelationAggregateInput').implement({
  fields: UserOrderByRelationAggregateInputFields,
});

export const RoleCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  code: t.field({"required":false,"type":SortOrder}),
});
export const RoleCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCountOrderByAggregateInput>>('RoleCountOrderByAggregateInput').implement({
  fields: RoleCountOrderByAggregateInputFields,
});

export const RoleAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RoleAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleAvgOrderByAggregateInput>>('RoleAvgOrderByAggregateInput').implement({
  fields: RoleAvgOrderByAggregateInputFields,
});

export const RoleMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  code: t.field({"required":false,"type":SortOrder}),
});
export const RoleMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleMaxOrderByAggregateInput>>('RoleMaxOrderByAggregateInput').implement({
  fields: RoleMaxOrderByAggregateInputFields,
});

export const RoleMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  name: t.field({"required":false,"type":SortOrder}),
  code: t.field({"required":false,"type":SortOrder}),
});
export const RoleMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleMinOrderByAggregateInput>>('RoleMinOrderByAggregateInput').implement({
  fields: RoleMinOrderByAggregateInputFields,
});

export const RoleSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const RoleSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleSumOrderByAggregateInput>>('RoleSumOrderByAggregateInput').implement({
  fields: RoleSumOrderByAggregateInputFields,
});

export const StringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  mode: t.field({"required":false,"type":QueryMode}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const StringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringWithAggregatesFilter>>('StringWithAggregatesFilter').implement({
  fields: StringWithAggregatesFilterFields,
});

export const LinkCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  url: t.field({"required":false,"type":SortOrder}),
  imageUrl: t.field({"required":false,"type":SortOrder}),
  category: t.field({"required":false,"type":SortOrder}),
});
export const LinkCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCountOrderByAggregateInput>>('LinkCountOrderByAggregateInput').implement({
  fields: LinkCountOrderByAggregateInputFields,
});

export const LinkAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const LinkAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkAvgOrderByAggregateInput>>('LinkAvgOrderByAggregateInput').implement({
  fields: LinkAvgOrderByAggregateInputFields,
});

export const LinkMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  url: t.field({"required":false,"type":SortOrder}),
  imageUrl: t.field({"required":false,"type":SortOrder}),
  category: t.field({"required":false,"type":SortOrder}),
});
export const LinkMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkMaxOrderByAggregateInput>>('LinkMaxOrderByAggregateInput').implement({
  fields: LinkMaxOrderByAggregateInputFields,
});

export const LinkMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  title: t.field({"required":false,"type":SortOrder}),
  description: t.field({"required":false,"type":SortOrder}),
  url: t.field({"required":false,"type":SortOrder}),
  imageUrl: t.field({"required":false,"type":SortOrder}),
  category: t.field({"required":false,"type":SortOrder}),
});
export const LinkMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkMinOrderByAggregateInput>>('LinkMinOrderByAggregateInput').implement({
  fields: LinkMinOrderByAggregateInputFields,
});

export const LinkSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
});
export const LinkSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkSumOrderByAggregateInput>>('LinkSumOrderByAggregateInput').implement({
  fields: LinkSumOrderByAggregateInputFields,
});

export const BoolFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolFilter}),
});
export const BoolFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolFilter>>('BoolFilter').implement({
  fields: BoolFilterFields,
});

export const UserRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":UserWhereInput}),
  isNot: t.field({"required":false,"type":UserWhereInput}),
});
export const UserRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserRelationFilter>>('UserRelationFilter').implement({
  fields: UserRelationFilterFields,
});

export const RemarksCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  trashed: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const RemarksCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCountOrderByAggregateInput>>('RemarksCountOrderByAggregateInput').implement({
  fields: RemarksCountOrderByAggregateInputFields,
});

export const RemarksAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const RemarksAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksAvgOrderByAggregateInput>>('RemarksAvgOrderByAggregateInput').implement({
  fields: RemarksAvgOrderByAggregateInputFields,
});

export const RemarksMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  trashed: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const RemarksMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksMaxOrderByAggregateInput>>('RemarksMaxOrderByAggregateInput').implement({
  fields: RemarksMaxOrderByAggregateInputFields,
});

export const RemarksMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  content: t.field({"required":false,"type":SortOrder}),
  trashed: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const RemarksMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksMinOrderByAggregateInput>>('RemarksMinOrderByAggregateInput').implement({
  fields: RemarksMinOrderByAggregateInputFields,
});

export const RemarksSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  userId: t.field({"required":false,"type":SortOrder}),
});
export const RemarksSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksSumOrderByAggregateInput>>('RemarksSumOrderByAggregateInput').implement({
  fields: RemarksSumOrderByAggregateInputFields,
});

export const BoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedBoolFilter}),
  _max: t.field({"required":false,"type":NestedBoolFilter}),
});
export const BoolWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolWithAggregatesFilter>>('BoolWithAggregatesFilter').implement({
  fields: BoolWithAggregatesFilterFields,
});

export const FloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableFilter>>('FloatNullableFilter').implement({
  fields: FloatNullableFilterFields,
});

export const HardwareListRelationFilterFields = (t: any) => ({
  every: t.field({"required":false,"type":HardwareWhereInput}),
  some: t.field({"required":false,"type":HardwareWhereInput}),
  none: t.field({"required":false,"type":HardwareWhereInput}),
});
export const HardwareListRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareListRelationFilter>>('HardwareListRelationFilter').implement({
  fields: HardwareListRelationFilterFields,
});

export const HardwareOrderByRelationAggregateInputFields = (t: any) => ({
  _count: t.field({"required":false,"type":SortOrder}),
});
export const HardwareOrderByRelationAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareOrderByRelationAggregateInput>>('HardwareOrderByRelationAggregateInput').implement({
  fields: HardwareOrderByRelationAggregateInputFields,
});

export const MarginModelCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  priceLevel1Label: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Label: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Label: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Label: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Label: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Label: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Label: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Label: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Label: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Label: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Label: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
});
export const MarginModelCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCountOrderByAggregateInput>>('MarginModelCountOrderByAggregateInput').implement({
  fields: MarginModelCountOrderByAggregateInputFields,
});

export const MarginModelAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
});
export const MarginModelAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelAvgOrderByAggregateInput>>('MarginModelAvgOrderByAggregateInput').implement({
  fields: MarginModelAvgOrderByAggregateInputFields,
});

export const MarginModelMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  priceLevel1Label: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Label: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Label: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Label: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Label: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Label: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Label: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Label: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Label: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Label: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Label: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
});
export const MarginModelMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelMaxOrderByAggregateInput>>('MarginModelMaxOrderByAggregateInput').implement({
  fields: MarginModelMaxOrderByAggregateInputFields,
});

export const MarginModelMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  priceLevel1Label: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Label: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Label: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Label: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Label: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Label: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Label: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Label: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Label: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Label: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Label: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
});
export const MarginModelMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelMinOrderByAggregateInput>>('MarginModelMinOrderByAggregateInput').implement({
  fields: MarginModelMinOrderByAggregateInputFields,
});

export const MarginModelSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  priceLevel1Value: t.field({"required":false,"type":SortOrder}),
  priceLevel2Value: t.field({"required":false,"type":SortOrder}),
  priceLevel3Value: t.field({"required":false,"type":SortOrder}),
  priceLevel4Value: t.field({"required":false,"type":SortOrder}),
  priceLevel5Value: t.field({"required":false,"type":SortOrder}),
  priceLevel6Value: t.field({"required":false,"type":SortOrder}),
  priceLevel7Value: t.field({"required":false,"type":SortOrder}),
  priceLevel8Value: t.field({"required":false,"type":SortOrder}),
  priceLevel9Value: t.field({"required":false,"type":SortOrder}),
  priceLevel10Value: t.field({"required":false,"type":SortOrder}),
  priceLevel11Value: t.field({"required":false,"type":SortOrder}),
});
export const MarginModelSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelSumOrderByAggregateInput>>('MarginModelSumOrderByAggregateInput').implement({
  fields: MarginModelSumOrderByAggregateInputFields,
});

export const FloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const FloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.FloatNullableWithAggregatesFilter>>('FloatNullableWithAggregatesFilter').implement({
  fields: FloatNullableWithAggregatesFilterFields,
});

export const MarginModelRelationFilterFields = (t: any) => ({
  is: t.field({"required":false,"type":MarginModelWhereInput}),
  isNot: t.field({"required":false,"type":MarginModelWhereInput}),
});
export const MarginModelRelationFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelRelationFilter>>('MarginModelRelationFilter').implement({
  fields: MarginModelRelationFilterFields,
});

export const HardwareCountOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionLabel: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  manufacturerLabel: t.field({"required":false,"type":SortOrder}),
  manufacturerValue: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  standardWarrantyLabel: t.field({"required":false,"type":SortOrder}),
  standardWarrantyValue: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeLabel: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeValue: t.field({"required":false,"type":SortOrder}),
  iNCOTERMLabel: t.field({"required":false,"type":SortOrder}),
  iNCOTERMValue: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  leaseToOwnMarginModel: t.field({"required":false,"type":SortOrder}),
  leaseToOperateMarginModel: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  pickUpLocationValue: t.field({"required":false,"type":SortOrder}),
  packageWeightLabel: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageWeightUnit: t.field({"required":false,"type":SortOrder}),
  packageLengthLabel: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageLengthUnit: t.field({"required":false,"type":SortOrder}),
  packageWidthLabel: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthUnit: t.field({"required":false,"type":SortOrder}),
  packageHeightLabel: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
  packageHeightUnit: t.field({"required":false,"type":SortOrder}),
  sellAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":SortOrder}),
  sellMarginModelName: t.field({"required":false,"type":SortOrder}),
});
export const HardwareCountOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCountOrderByAggregateInput>>('HardwareCountOrderByAggregateInput').implement({
  fields: HardwareCountOrderByAggregateInputFields,
});

export const HardwareAvgOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
});
export const HardwareAvgOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareAvgOrderByAggregateInput>>('HardwareAvgOrderByAggregateInput').implement({
  fields: HardwareAvgOrderByAggregateInputFields,
});

export const HardwareMaxOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionLabel: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  manufacturerLabel: t.field({"required":false,"type":SortOrder}),
  manufacturerValue: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  standardWarrantyLabel: t.field({"required":false,"type":SortOrder}),
  standardWarrantyValue: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeLabel: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeValue: t.field({"required":false,"type":SortOrder}),
  iNCOTERMLabel: t.field({"required":false,"type":SortOrder}),
  iNCOTERMValue: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  leaseToOwnMarginModel: t.field({"required":false,"type":SortOrder}),
  leaseToOperateMarginModel: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  pickUpLocationValue: t.field({"required":false,"type":SortOrder}),
  packageWeightLabel: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageWeightUnit: t.field({"required":false,"type":SortOrder}),
  packageLengthLabel: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageLengthUnit: t.field({"required":false,"type":SortOrder}),
  packageWidthLabel: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthUnit: t.field({"required":false,"type":SortOrder}),
  packageHeightLabel: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
  packageHeightUnit: t.field({"required":false,"type":SortOrder}),
  sellAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":SortOrder}),
  sellMarginModelName: t.field({"required":false,"type":SortOrder}),
});
export const HardwareMaxOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareMaxOrderByAggregateInput>>('HardwareMaxOrderByAggregateInput').implement({
  fields: HardwareMaxOrderByAggregateInputFields,
});

export const HardwareMinOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  createdAt: t.field({"required":false,"type":SortOrder}),
  updatedAt: t.field({"required":false,"type":SortOrder}),
  productCode: t.field({"required":false,"type":SortOrder}),
  isActive: t.field({"required":false,"type":SortOrder}),
  productType: t.field({"required":false,"type":SortOrder}),
  productNameLabel: t.field({"required":false,"type":SortOrder}),
  productNameValue: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionLabel: t.field({"required":false,"type":SortOrder}),
  productShortDescriptionValue: t.field({"required":false,"type":SortOrder}),
  remarksLabel: t.field({"required":false,"type":SortOrder}),
  remarksValue: t.field({"required":false,"type":SortOrder}),
  manufacturerLabel: t.field({"required":false,"type":SortOrder}),
  manufacturerValue: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  manufPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":SortOrder}),
  speedcastPartsNumberValue: t.field({"required":false,"type":SortOrder}),
  standardWarrantyLabel: t.field({"required":false,"type":SortOrder}),
  standardWarrantyValue: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeLabel: t.field({"required":false,"type":SortOrder}),
  delivryLeadTimeValue: t.field({"required":false,"type":SortOrder}),
  iNCOTERMLabel: t.field({"required":false,"type":SortOrder}),
  iNCOTERMValue: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  leaseToOwnMarginModel: t.field({"required":false,"type":SortOrder}),
  leaseToOperateMarginModel: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  pickUpLocationValue: t.field({"required":false,"type":SortOrder}),
  packageWeightLabel: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageWeightUnit: t.field({"required":false,"type":SortOrder}),
  packageLengthLabel: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageLengthUnit: t.field({"required":false,"type":SortOrder}),
  packageWidthLabel: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthUnit: t.field({"required":false,"type":SortOrder}),
  packageHeightLabel: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
  packageHeightUnit: t.field({"required":false,"type":SortOrder}),
  sellAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":SortOrder}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":SortOrder}),
  sellMarginModelName: t.field({"required":false,"type":SortOrder}),
});
export const HardwareMinOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareMinOrderByAggregateInput>>('HardwareMinOrderByAggregateInput').implement({
  fields: HardwareMinOrderByAggregateInputFields,
});

export const HardwareSumOrderByAggregateInputFields = (t: any) => ({
  id: t.field({"required":false,"type":SortOrder}),
  costValue: t.field({"required":false,"type":SortOrder}),
  sellRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOwnRoundup: t.field({"required":false,"type":SortOrder}),
  leaseToOperateRoundup: t.field({"required":false,"type":SortOrder}),
  packageWeightValue: t.field({"required":false,"type":SortOrder}),
  packageLengthValue: t.field({"required":false,"type":SortOrder}),
  packageWidthValue: t.field({"required":false,"type":SortOrder}),
  packageHeightValue: t.field({"required":false,"type":SortOrder}),
});
export const HardwareSumOrderByAggregateInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareSumOrderByAggregateInput>>('HardwareSumOrderByAggregateInput').implement({
  fields: HardwareSumOrderByAggregateInputFields,
});

export const RoleCreateNestedOneWithoutUsersInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutUsersInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutUsersInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
});
export const RoleCreateNestedOneWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateNestedOneWithoutUsersInput>>('RoleCreateNestedOneWithoutUsersInput').implement({
  fields: RoleCreateNestedOneWithoutUsersInputFields,
});

export const LinkCreateNestedManyWithoutUsersInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[LinkCreateWithoutUsersInput]}),
  connectOrCreate: t.field({"required":false,"type":[LinkCreateOrConnectWithoutUsersInput]}),
  connect: t.field({"required":false,"type":[LinkWhereUniqueInput]}),
});
export const LinkCreateNestedManyWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCreateNestedManyWithoutUsersInput>>('LinkCreateNestedManyWithoutUsersInput').implement({
  fields: LinkCreateNestedManyWithoutUsersInputFields,
});

export const RemarksCreateNestedManyWithoutUserInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RemarksCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[RemarksCreateOrConnectWithoutUserInput]}),
  createMany: t.field({"required":false,"type":RemarksCreateManyUserInputEnvelope}),
  connect: t.field({"required":false,"type":[RemarksWhereUniqueInput]}),
});
export const RemarksCreateNestedManyWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateNestedManyWithoutUserInput>>('RemarksCreateNestedManyWithoutUserInput').implement({
  fields: RemarksCreateNestedManyWithoutUserInputFields,
});

export const DateTimeFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.field({"required":false,"type":DateTime}),
});
export const DateTimeFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.DateTimeFieldUpdateOperationsInput>>('DateTimeFieldUpdateOperationsInput').implement({
  fields: DateTimeFieldUpdateOperationsInputFields,
});

export const NullableStringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const NullableStringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableStringFieldUpdateOperationsInput>>('NullableStringFieldUpdateOperationsInput').implement({
  fields: NullableStringFieldUpdateOperationsInputFields,
});

export const RoleUpdateOneRequiredWithoutUsersNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":RoleCreateWithoutUsersInput}),
  connectOrCreate: t.field({"required":false,"type":RoleCreateOrConnectWithoutUsersInput}),
  upsert: t.field({"required":false,"type":RoleUpsertWithoutUsersInput}),
  connect: t.field({"required":false,"type":RoleWhereUniqueInput}),
  update: t.field({"required":false,"type":RoleUpdateToOneWithWhereWithoutUsersInput}),
});
export const RoleUpdateOneRequiredWithoutUsersNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput>>('RoleUpdateOneRequiredWithoutUsersNestedInput').implement({
  fields: RoleUpdateOneRequiredWithoutUsersNestedInputFields,
});

export const LinkUpdateManyWithoutUsersNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[LinkCreateWithoutUsersInput]}),
  connectOrCreate: t.field({"required":false,"type":[LinkCreateOrConnectWithoutUsersInput]}),
  upsert: t.field({"required":false,"type":[LinkUpsertWithWhereUniqueWithoutUsersInput]}),
  set: t.field({"required":false,"type":[LinkWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[LinkWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[LinkWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[LinkWhereUniqueInput]}),
  update: t.field({"required":false,"type":[LinkUpdateWithWhereUniqueWithoutUsersInput]}),
  updateMany: t.field({"required":false,"type":[LinkUpdateManyWithWhereWithoutUsersInput]}),
  deleteMany: t.field({"required":false,"type":[LinkScalarWhereInput]}),
});
export const LinkUpdateManyWithoutUsersNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateManyWithoutUsersNestedInput>>('LinkUpdateManyWithoutUsersNestedInput').implement({
  fields: LinkUpdateManyWithoutUsersNestedInputFields,
});

export const RemarksUpdateManyWithoutUserNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[RemarksCreateWithoutUserInput]}),
  connectOrCreate: t.field({"required":false,"type":[RemarksCreateOrConnectWithoutUserInput]}),
  upsert: t.field({"required":false,"type":[RemarksUpsertWithWhereUniqueWithoutUserInput]}),
  createMany: t.field({"required":false,"type":RemarksCreateManyUserInputEnvelope}),
  set: t.field({"required":false,"type":[RemarksWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[RemarksWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[RemarksWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[RemarksWhereUniqueInput]}),
  update: t.field({"required":false,"type":[RemarksUpdateWithWhereUniqueWithoutUserInput]}),
  updateMany: t.field({"required":false,"type":[RemarksUpdateManyWithWhereWithoutUserInput]}),
  deleteMany: t.field({"required":false,"type":[RemarksScalarWhereInput]}),
});
export const RemarksUpdateManyWithoutUserNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateManyWithoutUserNestedInput>>('RemarksUpdateManyWithoutUserNestedInput').implement({
  fields: RemarksUpdateManyWithoutUserNestedInputFields,
});

export const IntFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.int({"required":false}),
  increment: t.int({"required":false}),
  decrement: t.int({"required":false}),
  multiply: t.int({"required":false}),
  divide: t.int({"required":false}),
});
export const IntFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.IntFieldUpdateOperationsInput>>('IntFieldUpdateOperationsInput').implement({
  fields: IntFieldUpdateOperationsInputFields,
});

export const UserCreateNestedManyWithoutRoleInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserCreateOrConnectWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":UserCreateManyRoleInputEnvelope}),
  connect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
});
export const UserCreateNestedManyWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedManyWithoutRoleInput>>('UserCreateNestedManyWithoutRoleInput').implement({
  fields: UserCreateNestedManyWithoutRoleInputFields,
});

export const StringFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.string({"required":false}),
});
export const StringFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.StringFieldUpdateOperationsInput>>('StringFieldUpdateOperationsInput').implement({
  fields: StringFieldUpdateOperationsInputFields,
});

export const UserUpdateManyWithoutRoleNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserCreateWithoutRoleInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserCreateOrConnectWithoutRoleInput]}),
  upsert: t.field({"required":false,"type":[UserUpsertWithWhereUniqueWithoutRoleInput]}),
  createMany: t.field({"required":false,"type":UserCreateManyRoleInputEnvelope}),
  set: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  update: t.field({"required":false,"type":[UserUpdateWithWhereUniqueWithoutRoleInput]}),
  updateMany: t.field({"required":false,"type":[UserUpdateManyWithWhereWithoutRoleInput]}),
  deleteMany: t.field({"required":false,"type":[UserScalarWhereInput]}),
});
export const UserUpdateManyWithoutRoleNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyWithoutRoleNestedInput>>('UserUpdateManyWithoutRoleNestedInput').implement({
  fields: UserUpdateManyWithoutRoleNestedInputFields,
});

export const UserCreateNestedManyWithoutBookmarksInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserCreateWithoutBookmarksInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserCreateOrConnectWithoutBookmarksInput]}),
  connect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
});
export const UserCreateNestedManyWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedManyWithoutBookmarksInput>>('UserCreateNestedManyWithoutBookmarksInput').implement({
  fields: UserCreateNestedManyWithoutBookmarksInputFields,
});

export const UserUpdateManyWithoutBookmarksNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[UserCreateWithoutBookmarksInput]}),
  connectOrCreate: t.field({"required":false,"type":[UserCreateOrConnectWithoutBookmarksInput]}),
  upsert: t.field({"required":false,"type":[UserUpsertWithWhereUniqueWithoutBookmarksInput]}),
  set: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[UserWhereUniqueInput]}),
  update: t.field({"required":false,"type":[UserUpdateWithWhereUniqueWithoutBookmarksInput]}),
  updateMany: t.field({"required":false,"type":[UserUpdateManyWithWhereWithoutBookmarksInput]}),
  deleteMany: t.field({"required":false,"type":[UserScalarWhereInput]}),
});
export const UserUpdateManyWithoutBookmarksNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyWithoutBookmarksNestedInput>>('UserUpdateManyWithoutBookmarksNestedInput').implement({
  fields: UserUpdateManyWithoutBookmarksNestedInputFields,
});

export const UserCreateNestedOneWithoutRemarksInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRemarksInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRemarksInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
});
export const UserCreateNestedOneWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateNestedOneWithoutRemarksInput>>('UserCreateNestedOneWithoutRemarksInput').implement({
  fields: UserCreateNestedOneWithoutRemarksInputFields,
});

export const BoolFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.boolean({"required":false}),
});
export const BoolFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.BoolFieldUpdateOperationsInput>>('BoolFieldUpdateOperationsInput').implement({
  fields: BoolFieldUpdateOperationsInputFields,
});

export const UserUpdateOneRequiredWithoutRemarksNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":UserCreateWithoutRemarksInput}),
  connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutRemarksInput}),
  upsert: t.field({"required":false,"type":UserUpsertWithoutRemarksInput}),
  connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  update: t.field({"required":false,"type":UserUpdateToOneWithWhereWithoutRemarksInput}),
});
export const UserUpdateOneRequiredWithoutRemarksNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateOneRequiredWithoutRemarksNestedInput>>('UserUpdateOneRequiredWithoutRemarksNestedInput').implement({
  fields: UserUpdateOneRequiredWithoutRemarksNestedInputFields,
});

export const HardwareCreateNestedManyWithoutSellMarginModelInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[HardwareCreateWithoutSellMarginModelInput]}),
  connectOrCreate: t.field({"required":false,"type":[HardwareCreateOrConnectWithoutSellMarginModelInput]}),
  createMany: t.field({"required":false,"type":HardwareCreateManySellMarginModelInputEnvelope}),
  connect: t.field({"required":false,"type":[HardwareWhereUniqueInput]}),
});
export const HardwareCreateNestedManyWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateNestedManyWithoutSellMarginModelInput>>('HardwareCreateNestedManyWithoutSellMarginModelInput').implement({
  fields: HardwareCreateNestedManyWithoutSellMarginModelInputFields,
});

export const NullableFloatFieldUpdateOperationsInputFields = (t: any) => ({
  set: t.float({"required":false}),
  increment: t.float({"required":false}),
  decrement: t.float({"required":false}),
  multiply: t.float({"required":false}),
  divide: t.float({"required":false}),
});
export const NullableFloatFieldUpdateOperationsInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NullableFloatFieldUpdateOperationsInput>>('NullableFloatFieldUpdateOperationsInput').implement({
  fields: NullableFloatFieldUpdateOperationsInputFields,
});

export const HardwareUpdateManyWithoutSellMarginModelNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":[HardwareCreateWithoutSellMarginModelInput]}),
  connectOrCreate: t.field({"required":false,"type":[HardwareCreateOrConnectWithoutSellMarginModelInput]}),
  upsert: t.field({"required":false,"type":[HardwareUpsertWithWhereUniqueWithoutSellMarginModelInput]}),
  createMany: t.field({"required":false,"type":HardwareCreateManySellMarginModelInputEnvelope}),
  set: t.field({"required":false,"type":[HardwareWhereUniqueInput]}),
  disconnect: t.field({"required":false,"type":[HardwareWhereUniqueInput]}),
  delete: t.field({"required":false,"type":[HardwareWhereUniqueInput]}),
  connect: t.field({"required":false,"type":[HardwareWhereUniqueInput]}),
  update: t.field({"required":false,"type":[HardwareUpdateWithWhereUniqueWithoutSellMarginModelInput]}),
  updateMany: t.field({"required":false,"type":[HardwareUpdateManyWithWhereWithoutSellMarginModelInput]}),
  deleteMany: t.field({"required":false,"type":[HardwareScalarWhereInput]}),
});
export const HardwareUpdateManyWithoutSellMarginModelNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateManyWithoutSellMarginModelNestedInput>>('HardwareUpdateManyWithoutSellMarginModelNestedInput').implement({
  fields: HardwareUpdateManyWithoutSellMarginModelNestedInputFields,
});

export const MarginModelCreateNestedOneWithoutHardwareInputFields = (t: any) => ({
  create: t.field({"required":false,"type":MarginModelCreateWithoutHardwareInput}),
  connectOrCreate: t.field({"required":false,"type":MarginModelCreateOrConnectWithoutHardwareInput}),
  connect: t.field({"required":false,"type":MarginModelWhereUniqueInput}),
});
export const MarginModelCreateNestedOneWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCreateNestedOneWithoutHardwareInput>>('MarginModelCreateNestedOneWithoutHardwareInput').implement({
  fields: MarginModelCreateNestedOneWithoutHardwareInputFields,
});

export const MarginModelUpdateOneRequiredWithoutHardwareNestedInputFields = (t: any) => ({
  create: t.field({"required":false,"type":MarginModelCreateWithoutHardwareInput}),
  connectOrCreate: t.field({"required":false,"type":MarginModelCreateOrConnectWithoutHardwareInput}),
  upsert: t.field({"required":false,"type":MarginModelUpsertWithoutHardwareInput}),
  connect: t.field({"required":false,"type":MarginModelWhereUniqueInput}),
  update: t.field({"required":false,"type":MarginModelUpdateToOneWithWhereWithoutHardwareInput}),
});
export const MarginModelUpdateOneRequiredWithoutHardwareNestedInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpdateOneRequiredWithoutHardwareNestedInput>>('MarginModelUpdateOneRequiredWithoutHardwareNestedInput').implement({
  fields: MarginModelUpdateOneRequiredWithoutHardwareNestedInputFields,
});

export const NestedIntFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntFilter>>('NestedIntFilter').implement({
  fields: NestedIntFilterFields,
});

export const NestedDateTimeFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeFilter>>('NestedDateTimeFilter').implement({
  fields: NestedDateTimeFilterFields,
});

export const NestedStringNullableFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableFilter>>('NestedStringNullableFilter').implement({
  fields: NestedStringNullableFilterFields,
});

export const NestedIntWithAggregatesFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _avg: t.field({"required":false,"type":NestedFloatFilter}),
  _sum: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedIntFilter}),
  _max: t.field({"required":false,"type":NestedIntFilter}),
});
export const NestedIntWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntWithAggregatesFilter>>('NestedIntWithAggregatesFilter').implement({
  fields: NestedIntWithAggregatesFilterFields,
});

export const NestedFloatFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatFilter}),
});
export const NestedFloatFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatFilter>>('NestedFloatFilter').implement({
  fields: NestedFloatFilterFields,
});

export const NestedDateTimeWithAggregatesFilterFields = (t: any) => ({
  equals: t.field({"required":false,"type":DateTime}),
  in: t.field({"required":false,"type":[DateTime]}),
  notIn: t.field({"required":false,"type":[DateTime]}),
  lt: t.field({"required":false,"type":DateTime}),
  lte: t.field({"required":false,"type":DateTime}),
  gt: t.field({"required":false,"type":DateTime}),
  gte: t.field({"required":false,"type":DateTime}),
  not: t.field({"required":false,"type":NestedDateTimeWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedDateTimeFilter}),
  _max: t.field({"required":false,"type":NestedDateTimeFilter}),
});
export const NestedDateTimeWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedDateTimeWithAggregatesFilter>>('NestedDateTimeWithAggregatesFilter').implement({
  fields: NestedDateTimeWithAggregatesFilterFields,
});

export const NestedStringNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _min: t.field({"required":false,"type":NestedStringNullableFilter}),
  _max: t.field({"required":false,"type":NestedStringNullableFilter}),
});
export const NestedStringNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringNullableWithAggregatesFilter>>('NestedStringNullableWithAggregatesFilter').implement({
  fields: NestedStringNullableWithAggregatesFilterFields,
});

export const NestedIntNullableFilterFields = (t: any) => ({
  equals: t.int({"required":false}),
  in: t.intList({"required":false}),
  notIn: t.intList({"required":false}),
  lt: t.int({"required":false}),
  lte: t.int({"required":false}),
  gt: t.int({"required":false}),
  gte: t.int({"required":false}),
  not: t.field({"required":false,"type":NestedIntNullableFilter}),
});
export const NestedIntNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedIntNullableFilter>>('NestedIntNullableFilter').implement({
  fields: NestedIntNullableFilterFields,
});

export const NestedStringFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringFilter>>('NestedStringFilter').implement({
  fields: NestedStringFilterFields,
});

export const NestedStringWithAggregatesFilterFields = (t: any) => ({
  equals: t.string({"required":false}),
  in: t.stringList({"required":false}),
  notIn: t.stringList({"required":false}),
  lt: t.string({"required":false}),
  lte: t.string({"required":false}),
  gt: t.string({"required":false}),
  gte: t.string({"required":false}),
  contains: t.string({"required":false}),
  startsWith: t.string({"required":false}),
  endsWith: t.string({"required":false}),
  not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedStringFilter}),
  _max: t.field({"required":false,"type":NestedStringFilter}),
});
export const NestedStringWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedStringWithAggregatesFilter>>('NestedStringWithAggregatesFilter').implement({
  fields: NestedStringWithAggregatesFilterFields,
});

export const NestedBoolFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolFilter}),
});
export const NestedBoolFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedBoolFilter>>('NestedBoolFilter').implement({
  fields: NestedBoolFilterFields,
});

export const NestedBoolWithAggregatesFilterFields = (t: any) => ({
  equals: t.boolean({"required":false}),
  not: t.field({"required":false,"type":NestedBoolWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntFilter}),
  _min: t.field({"required":false,"type":NestedBoolFilter}),
  _max: t.field({"required":false,"type":NestedBoolFilter}),
});
export const NestedBoolWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedBoolWithAggregatesFilter>>('NestedBoolWithAggregatesFilter').implement({
  fields: NestedBoolWithAggregatesFilterFields,
});

export const NestedFloatNullableFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableFilter>>('NestedFloatNullableFilter').implement({
  fields: NestedFloatNullableFilterFields,
});

export const NestedFloatNullableWithAggregatesFilterFields = (t: any) => ({
  equals: t.float({"required":false}),
  in: t.floatList({"required":false}),
  notIn: t.floatList({"required":false}),
  lt: t.float({"required":false}),
  lte: t.float({"required":false}),
  gt: t.float({"required":false}),
  gte: t.float({"required":false}),
  not: t.field({"required":false,"type":NestedFloatNullableWithAggregatesFilter}),
  _count: t.field({"required":false,"type":NestedIntNullableFilter}),
  _avg: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _sum: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _min: t.field({"required":false,"type":NestedFloatNullableFilter}),
  _max: t.field({"required":false,"type":NestedFloatNullableFilter}),
});
export const NestedFloatNullableWithAggregatesFilter = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.NestedFloatNullableWithAggregatesFilter>>('NestedFloatNullableWithAggregatesFilter').implement({
  fields: NestedFloatNullableWithAggregatesFilterFields,
});

export const RoleCreateWithoutUsersInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  name: t.string({"required":true}),
  code: t.string({"required":true}),
});
export const RoleCreateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateWithoutUsersInput>>('RoleCreateWithoutUsersInput').implement({
  fields: RoleCreateWithoutUsersInputFields,
});

export const RoleCreateOrConnectWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RoleWhereUniqueInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutUsersInput}),
});
export const RoleCreateOrConnectWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleCreateOrConnectWithoutUsersInput>>('RoleCreateOrConnectWithoutUsersInput').implement({
  fields: RoleCreateOrConnectWithoutUsersInputFields,
});

export const LinkCreateWithoutUsersInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  title: t.string({"required":true}),
  description: t.string({"required":true}),
  url: t.string({"required":true}),
  imageUrl: t.string({"required":true}),
  category: t.string({"required":true}),
});
export const LinkCreateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCreateWithoutUsersInput>>('LinkCreateWithoutUsersInput').implement({
  fields: LinkCreateWithoutUsersInputFields,
});

export const LinkCreateOrConnectWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":LinkWhereUniqueInput}),
  create: t.field({"required":true,"type":LinkCreateWithoutUsersInput}),
});
export const LinkCreateOrConnectWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkCreateOrConnectWithoutUsersInput>>('LinkCreateOrConnectWithoutUsersInput').implement({
  fields: LinkCreateOrConnectWithoutUsersInputFields,
});

export const RemarksCreateWithoutUserInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  content: t.string({"required":true}),
  trashed: t.boolean({"required":false}),
});
export const RemarksCreateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateWithoutUserInput>>('RemarksCreateWithoutUserInput').implement({
  fields: RemarksCreateWithoutUserInputFields,
});

export const RemarksCreateOrConnectWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RemarksWhereUniqueInput}),
  create: t.field({"required":true,"type":RemarksCreateWithoutUserInput}),
});
export const RemarksCreateOrConnectWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateOrConnectWithoutUserInput>>('RemarksCreateOrConnectWithoutUserInput').implement({
  fields: RemarksCreateOrConnectWithoutUserInputFields,
});

export const RemarksCreateManyUserInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[RemarksCreateManyUserInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const RemarksCreateManyUserInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateManyUserInputEnvelope>>('RemarksCreateManyUserInputEnvelope').implement({
  fields: RemarksCreateManyUserInputEnvelopeFields,
});

export const RoleUpsertWithoutUsersInputFields = (t: any) => ({
  update: t.field({"required":true,"type":RoleUpdateWithoutUsersInput}),
  create: t.field({"required":true,"type":RoleCreateWithoutUsersInput}),
  where: t.field({"required":false,"type":RoleWhereInput}),
});
export const RoleUpsertWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpsertWithoutUsersInput>>('RoleUpsertWithoutUsersInput').implement({
  fields: RoleUpsertWithoutUsersInputFields,
});

export const RoleUpdateToOneWithWhereWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":false,"type":RoleWhereInput}),
  data: t.field({"required":true,"type":RoleUpdateWithoutUsersInput}),
});
export const RoleUpdateToOneWithWhereWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateToOneWithWhereWithoutUsersInput>>('RoleUpdateToOneWithWhereWithoutUsersInput').implement({
  fields: RoleUpdateToOneWithWhereWithoutUsersInputFields,
});

export const RoleUpdateWithoutUsersInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  name: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  code: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const RoleUpdateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RoleUpdateWithoutUsersInput>>('RoleUpdateWithoutUsersInput').implement({
  fields: RoleUpdateWithoutUsersInputFields,
});

export const LinkUpsertWithWhereUniqueWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":LinkWhereUniqueInput}),
  update: t.field({"required":true,"type":LinkUpdateWithoutUsersInput}),
  create: t.field({"required":true,"type":LinkCreateWithoutUsersInput}),
});
export const LinkUpsertWithWhereUniqueWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpsertWithWhereUniqueWithoutUsersInput>>('LinkUpsertWithWhereUniqueWithoutUsersInput').implement({
  fields: LinkUpsertWithWhereUniqueWithoutUsersInputFields,
});

export const LinkUpdateWithWhereUniqueWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":LinkWhereUniqueInput}),
  data: t.field({"required":true,"type":LinkUpdateWithoutUsersInput}),
});
export const LinkUpdateWithWhereUniqueWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateWithWhereUniqueWithoutUsersInput>>('LinkUpdateWithWhereUniqueWithoutUsersInput').implement({
  fields: LinkUpdateWithWhereUniqueWithoutUsersInputFields,
});

export const LinkUpdateManyWithWhereWithoutUsersInputFields = (t: any) => ({
  where: t.field({"required":true,"type":LinkScalarWhereInput}),
  data: t.field({"required":true,"type":LinkUpdateManyMutationInput}),
});
export const LinkUpdateManyWithWhereWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateManyWithWhereWithoutUsersInput>>('LinkUpdateManyWithWhereWithoutUsersInput').implement({
  fields: LinkUpdateManyWithWhereWithoutUsersInputFields,
});

export const LinkScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[LinkScalarWhereInput]}),
  OR: t.field({"required":false,"type":[LinkScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[LinkScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  title: t.field({"required":false,"type":StringFilter}),
  description: t.field({"required":false,"type":StringFilter}),
  url: t.field({"required":false,"type":StringFilter}),
  imageUrl: t.field({"required":false,"type":StringFilter}),
  category: t.field({"required":false,"type":StringFilter}),
});
export const LinkScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkScalarWhereInput>>('LinkScalarWhereInput').implement({
  fields: LinkScalarWhereInputFields,
});

export const RemarksUpsertWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RemarksWhereUniqueInput}),
  update: t.field({"required":true,"type":RemarksUpdateWithoutUserInput}),
  create: t.field({"required":true,"type":RemarksCreateWithoutUserInput}),
});
export const RemarksUpsertWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpsertWithWhereUniqueWithoutUserInput>>('RemarksUpsertWithWhereUniqueWithoutUserInput').implement({
  fields: RemarksUpsertWithWhereUniqueWithoutUserInputFields,
});

export const RemarksUpdateWithWhereUniqueWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RemarksWhereUniqueInput}),
  data: t.field({"required":true,"type":RemarksUpdateWithoutUserInput}),
});
export const RemarksUpdateWithWhereUniqueWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateWithWhereUniqueWithoutUserInput>>('RemarksUpdateWithWhereUniqueWithoutUserInput').implement({
  fields: RemarksUpdateWithWhereUniqueWithoutUserInputFields,
});

export const RemarksUpdateManyWithWhereWithoutUserInputFields = (t: any) => ({
  where: t.field({"required":true,"type":RemarksScalarWhereInput}),
  data: t.field({"required":true,"type":RemarksUpdateManyMutationInput}),
});
export const RemarksUpdateManyWithWhereWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateManyWithWhereWithoutUserInput>>('RemarksUpdateManyWithWhereWithoutUserInput').implement({
  fields: RemarksUpdateManyWithWhereWithoutUserInputFields,
});

export const RemarksScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[RemarksScalarWhereInput]}),
  OR: t.field({"required":false,"type":[RemarksScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[RemarksScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  content: t.field({"required":false,"type":StringFilter}),
  trashed: t.field({"required":false,"type":BoolFilter}),
  userId: t.field({"required":false,"type":IntFilter}),
});
export const RemarksScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksScalarWhereInput>>('RemarksScalarWhereInput').implement({
  fields: RemarksScalarWhereInputFields,
});

export const UserCreateWithoutRoleInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
  bookmarks: t.field({"required":false,"type":LinkCreateNestedManyWithoutUsersInput}),
  remarks: t.field({"required":false,"type":RemarksCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutRoleInput>>('UserCreateWithoutRoleInput').implement({
  fields: UserCreateWithoutRoleInputFields,
});

export const UserCreateOrConnectWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRoleInput}),
});
export const UserCreateOrConnectWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutRoleInput>>('UserCreateOrConnectWithoutRoleInput').implement({
  fields: UserCreateOrConnectWithoutRoleInputFields,
});

export const UserCreateManyRoleInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[UserCreateManyRoleInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const UserCreateManyRoleInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyRoleInputEnvelope>>('UserCreateManyRoleInputEnvelope').implement({
  fields: UserCreateManyRoleInputEnvelopeFields,
});

export const UserUpsertWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  update: t.field({"required":true,"type":UserUpdateWithoutRoleInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRoleInput}),
});
export const UserUpsertWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithWhereUniqueWithoutRoleInput>>('UserUpsertWithWhereUniqueWithoutRoleInput').implement({
  fields: UserUpsertWithWhereUniqueWithoutRoleInputFields,
});

export const UserUpdateWithWhereUniqueWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutRoleInput}),
});
export const UserUpdateWithWhereUniqueWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithWhereUniqueWithoutRoleInput>>('UserUpdateWithWhereUniqueWithoutRoleInput').implement({
  fields: UserUpdateWithWhereUniqueWithoutRoleInputFields,
});

export const UserUpdateManyWithWhereWithoutRoleInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserScalarWhereInput}),
  data: t.field({"required":true,"type":UserUpdateManyMutationInput}),
});
export const UserUpdateManyWithWhereWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyWithWhereWithoutRoleInput>>('UserUpdateManyWithWhereWithoutRoleInput').implement({
  fields: UserUpdateManyWithWhereWithoutRoleInputFields,
});

export const UserScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[UserScalarWhereInput]}),
  OR: t.field({"required":false,"type":[UserScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[UserScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  email: t.field({"required":false,"type":StringNullableFilter}),
  image: t.field({"required":false,"type":StringNullableFilter}),
  roleId: t.field({"required":false,"type":IntFilter}),
});
export const UserScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserScalarWhereInput>>('UserScalarWhereInput').implement({
  fields: UserScalarWhereInputFields,
});

export const UserCreateWithoutBookmarksInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutUsersInput}),
  remarks: t.field({"required":false,"type":RemarksCreateNestedManyWithoutUserInput}),
});
export const UserCreateWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutBookmarksInput>>('UserCreateWithoutBookmarksInput').implement({
  fields: UserCreateWithoutBookmarksInputFields,
});

export const UserCreateOrConnectWithoutBookmarksInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutBookmarksInput}),
});
export const UserCreateOrConnectWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutBookmarksInput>>('UserCreateOrConnectWithoutBookmarksInput').implement({
  fields: UserCreateOrConnectWithoutBookmarksInputFields,
});

export const UserUpsertWithWhereUniqueWithoutBookmarksInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  update: t.field({"required":true,"type":UserUpdateWithoutBookmarksInput}),
  create: t.field({"required":true,"type":UserCreateWithoutBookmarksInput}),
});
export const UserUpsertWithWhereUniqueWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithWhereUniqueWithoutBookmarksInput>>('UserUpsertWithWhereUniqueWithoutBookmarksInput').implement({
  fields: UserUpsertWithWhereUniqueWithoutBookmarksInputFields,
});

export const UserUpdateWithWhereUniqueWithoutBookmarksInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutBookmarksInput}),
});
export const UserUpdateWithWhereUniqueWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithWhereUniqueWithoutBookmarksInput>>('UserUpdateWithWhereUniqueWithoutBookmarksInput').implement({
  fields: UserUpdateWithWhereUniqueWithoutBookmarksInputFields,
});

export const UserUpdateManyWithWhereWithoutBookmarksInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserScalarWhereInput}),
  data: t.field({"required":true,"type":UserUpdateManyMutationInput}),
});
export const UserUpdateManyWithWhereWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateManyWithWhereWithoutBookmarksInput>>('UserUpdateManyWithWhereWithoutBookmarksInput').implement({
  fields: UserUpdateManyWithWhereWithoutBookmarksInputFields,
});

export const UserCreateWithoutRemarksInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
  role: t.field({"required":true,"type":RoleCreateNestedOneWithoutUsersInput}),
  bookmarks: t.field({"required":false,"type":LinkCreateNestedManyWithoutUsersInput}),
});
export const UserCreateWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateWithoutRemarksInput>>('UserCreateWithoutRemarksInput').implement({
  fields: UserCreateWithoutRemarksInputFields,
});

export const UserCreateOrConnectWithoutRemarksInputFields = (t: any) => ({
  where: t.field({"required":true,"type":UserWhereUniqueInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRemarksInput}),
});
export const UserCreateOrConnectWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateOrConnectWithoutRemarksInput>>('UserCreateOrConnectWithoutRemarksInput').implement({
  fields: UserCreateOrConnectWithoutRemarksInputFields,
});

export const UserUpsertWithoutRemarksInputFields = (t: any) => ({
  update: t.field({"required":true,"type":UserUpdateWithoutRemarksInput}),
  create: t.field({"required":true,"type":UserCreateWithoutRemarksInput}),
  where: t.field({"required":false,"type":UserWhereInput}),
});
export const UserUpsertWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpsertWithoutRemarksInput>>('UserUpsertWithoutRemarksInput').implement({
  fields: UserUpsertWithoutRemarksInputFields,
});

export const UserUpdateToOneWithWhereWithoutRemarksInputFields = (t: any) => ({
  where: t.field({"required":false,"type":UserWhereInput}),
  data: t.field({"required":true,"type":UserUpdateWithoutRemarksInput}),
});
export const UserUpdateToOneWithWhereWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateToOneWithWhereWithoutRemarksInput>>('UserUpdateToOneWithWhereWithoutRemarksInput').implement({
  fields: UserUpdateToOneWithWhereWithoutRemarksInputFields,
});

export const UserUpdateWithoutRemarksInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutUsersNestedInput}),
  bookmarks: t.field({"required":false,"type":LinkUpdateManyWithoutUsersNestedInput}),
});
export const UserUpdateWithoutRemarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutRemarksInput>>('UserUpdateWithoutRemarksInput').implement({
  fields: UserUpdateWithoutRemarksInputFields,
});

export const HardwareCreateWithoutSellMarginModelInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":false}),
  productShortDescriptionLabel: t.string({"required":false}),
  productShortDescriptionValue: t.string({"required":false}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  manufacturerLabel: t.string({"required":false}),
  manufacturerValue: t.string({"required":false}),
  manufPartsNumberLabel: t.string({"required":false}),
  manufPartsNumberValue: t.string({"required":false}),
  speedcastPartsNumberLabel: t.string({"required":false}),
  speedcastPartsNumberValue: t.string({"required":false}),
  standardWarrantyLabel: t.string({"required":false}),
  standardWarrantyValue: t.string({"required":false}),
  delivryLeadTimeLabel: t.string({"required":false}),
  delivryLeadTimeValue: t.string({"required":false}),
  iNCOTERMLabel: t.string({"required":false}),
  iNCOTERMValue: t.string({"required":false}),
  costValue: t.float({"required":false}),
  leaseToOwnMarginModel: t.string({"required":false}),
  leaseToOperateMarginModel: t.string({"required":false}),
  sellRoundup: t.float({"required":false}),
  leaseToOwnRoundup: t.float({"required":false}),
  leaseToOperateRoundup: t.float({"required":false}),
  pickUpLocationValue: t.string({"required":false}),
  packageWeightLabel: t.string({"required":false}),
  packageWeightValue: t.float({"required":false}),
  packageWeightUnit: t.string({"required":false}),
  packageLengthLabel: t.string({"required":false}),
  packageLengthValue: t.float({"required":false}),
  packageLengthUnit: t.string({"required":false}),
  packageWidthLabel: t.string({"required":false}),
  packageWidthValue: t.float({"required":false}),
  packageWidthUnit: t.string({"required":false}),
  packageHeightLabel: t.string({"required":false}),
  packageHeightValue: t.float({"required":false}),
  packageHeightUnit: t.string({"required":false}),
  sellAllowed: t.boolean({"required":false}),
  leaseToOwn1_5MthAllowed: t.boolean({"required":false}),
  leaseToOwn6_11MthAllowed: t.boolean({"required":false}),
  leaseToOwn12_23MthAllowed: t.boolean({"required":false}),
  leaseToOwn24_35MthAllowed: t.boolean({"required":false}),
  leaseToOwn36_47MthAllowed: t.boolean({"required":false}),
  leaseToOwn48_59MthAllowed: t.boolean({"required":false}),
  leaseToOwn60MthAllowed: t.boolean({"required":false}),
  leaseToOperate1_5MthAllowed: t.boolean({"required":false}),
  leaseToOperate6_11MthAllowed: t.boolean({"required":false}),
  leaseToOperate12_23MthAllowed: t.boolean({"required":false}),
  leaseToOperate24_35MthAllowed: t.boolean({"required":false}),
  leaseToOperate36_47MthAllowed: t.boolean({"required":false}),
  leaseToOperate48_59MthAllowed: t.boolean({"required":false}),
  leaseToOperate60MthAllowed: t.boolean({"required":false}),
});
export const HardwareCreateWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateWithoutSellMarginModelInput>>('HardwareCreateWithoutSellMarginModelInput').implement({
  fields: HardwareCreateWithoutSellMarginModelInputFields,
});

export const HardwareCreateOrConnectWithoutSellMarginModelInputFields = (t: any) => ({
  where: t.field({"required":true,"type":HardwareWhereUniqueInput}),
  create: t.field({"required":true,"type":HardwareCreateWithoutSellMarginModelInput}),
});
export const HardwareCreateOrConnectWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateOrConnectWithoutSellMarginModelInput>>('HardwareCreateOrConnectWithoutSellMarginModelInput').implement({
  fields: HardwareCreateOrConnectWithoutSellMarginModelInputFields,
});

export const HardwareCreateManySellMarginModelInputEnvelopeFields = (t: any) => ({
  data: t.field({"required":true,"type":[HardwareCreateManySellMarginModelInput]}),
  skipDuplicates: t.boolean({"required":false}),
});
export const HardwareCreateManySellMarginModelInputEnvelope = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateManySellMarginModelInputEnvelope>>('HardwareCreateManySellMarginModelInputEnvelope').implement({
  fields: HardwareCreateManySellMarginModelInputEnvelopeFields,
});

export const HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputFields = (t: any) => ({
  where: t.field({"required":true,"type":HardwareWhereUniqueInput}),
  update: t.field({"required":true,"type":HardwareUpdateWithoutSellMarginModelInput}),
  create: t.field({"required":true,"type":HardwareCreateWithoutSellMarginModelInput}),
});
export const HardwareUpsertWithWhereUniqueWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpsertWithWhereUniqueWithoutSellMarginModelInput>>('HardwareUpsertWithWhereUniqueWithoutSellMarginModelInput').implement({
  fields: HardwareUpsertWithWhereUniqueWithoutSellMarginModelInputFields,
});

export const HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputFields = (t: any) => ({
  where: t.field({"required":true,"type":HardwareWhereUniqueInput}),
  data: t.field({"required":true,"type":HardwareUpdateWithoutSellMarginModelInput}),
});
export const HardwareUpdateWithWhereUniqueWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateWithWhereUniqueWithoutSellMarginModelInput>>('HardwareUpdateWithWhereUniqueWithoutSellMarginModelInput').implement({
  fields: HardwareUpdateWithWhereUniqueWithoutSellMarginModelInputFields,
});

export const HardwareUpdateManyWithWhereWithoutSellMarginModelInputFields = (t: any) => ({
  where: t.field({"required":true,"type":HardwareScalarWhereInput}),
  data: t.field({"required":true,"type":HardwareUpdateManyMutationInput}),
});
export const HardwareUpdateManyWithWhereWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateManyWithWhereWithoutSellMarginModelInput>>('HardwareUpdateManyWithWhereWithoutSellMarginModelInput').implement({
  fields: HardwareUpdateManyWithWhereWithoutSellMarginModelInputFields,
});

export const HardwareScalarWhereInputFields = (t: any) => ({
  AND: t.field({"required":false,"type":[HardwareScalarWhereInput]}),
  OR: t.field({"required":false,"type":[HardwareScalarWhereInput]}),
  NOT: t.field({"required":false,"type":[HardwareScalarWhereInput]}),
  id: t.field({"required":false,"type":IntFilter}),
  createdAt: t.field({"required":false,"type":DateTimeFilter}),
  updatedAt: t.field({"required":false,"type":DateTimeFilter}),
  productCode: t.field({"required":false,"type":StringFilter}),
  isActive: t.field({"required":false,"type":BoolFilter}),
  productType: t.field({"required":false,"type":StringNullableFilter}),
  productNameLabel: t.field({"required":false,"type":StringNullableFilter}),
  productNameValue: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionLabel: t.field({"required":false,"type":StringNullableFilter}),
  productShortDescriptionValue: t.field({"required":false,"type":StringNullableFilter}),
  remarksLabel: t.field({"required":false,"type":StringNullableFilter}),
  remarksValue: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufacturerValue: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  manufPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":StringNullableFilter}),
  speedcastPartsNumberValue: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyLabel: t.field({"required":false,"type":StringNullableFilter}),
  standardWarrantyValue: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeLabel: t.field({"required":false,"type":StringNullableFilter}),
  delivryLeadTimeValue: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMLabel: t.field({"required":false,"type":StringNullableFilter}),
  iNCOTERMValue: t.field({"required":false,"type":StringNullableFilter}),
  costValue: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  leaseToOperateMarginModel: t.field({"required":false,"type":StringNullableFilter}),
  sellRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOwnRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  leaseToOperateRoundup: t.field({"required":false,"type":FloatNullableFilter}),
  pickUpLocationValue: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageLengthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageLengthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageWidthValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageWidthUnit: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightLabel: t.field({"required":false,"type":StringNullableFilter}),
  packageHeightValue: t.field({"required":false,"type":FloatNullableFilter}),
  packageHeightUnit: t.field({"required":false,"type":StringNullableFilter}),
  sellAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFilter}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFilter}),
  sellMarginModelName: t.field({"required":false,"type":StringFilter}),
});
export const HardwareScalarWhereInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareScalarWhereInput>>('HardwareScalarWhereInput').implement({
  fields: HardwareScalarWhereInputFields,
});

export const MarginModelCreateWithoutHardwareInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":true}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  priceLevel1Label: t.string({"required":false}),
  priceLevel1Value: t.float({"required":false}),
  priceLevel2Label: t.string({"required":false}),
  priceLevel2Value: t.float({"required":false}),
  priceLevel3Label: t.string({"required":false}),
  priceLevel3Value: t.float({"required":false}),
  priceLevel4Label: t.string({"required":false}),
  priceLevel4Value: t.float({"required":false}),
  priceLevel5Label: t.string({"required":false}),
  priceLevel5Value: t.float({"required":false}),
  priceLevel6Label: t.string({"required":false}),
  priceLevel6Value: t.float({"required":false}),
  priceLevel7Label: t.string({"required":false}),
  priceLevel7Value: t.float({"required":false}),
  priceLevel8Label: t.string({"required":false}),
  priceLevel8Value: t.float({"required":false}),
  priceLevel9Label: t.string({"required":false}),
  priceLevel9Value: t.float({"required":false}),
  priceLevel10Label: t.string({"required":false}),
  priceLevel10Value: t.float({"required":false}),
  priceLevel11Label: t.string({"required":false}),
  priceLevel11Value: t.float({"required":false}),
});
export const MarginModelCreateWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCreateWithoutHardwareInput>>('MarginModelCreateWithoutHardwareInput').implement({
  fields: MarginModelCreateWithoutHardwareInputFields,
});

export const MarginModelCreateOrConnectWithoutHardwareInputFields = (t: any) => ({
  where: t.field({"required":true,"type":MarginModelWhereUniqueInput}),
  create: t.field({"required":true,"type":MarginModelCreateWithoutHardwareInput}),
});
export const MarginModelCreateOrConnectWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelCreateOrConnectWithoutHardwareInput>>('MarginModelCreateOrConnectWithoutHardwareInput').implement({
  fields: MarginModelCreateOrConnectWithoutHardwareInputFields,
});

export const MarginModelUpsertWithoutHardwareInputFields = (t: any) => ({
  update: t.field({"required":true,"type":MarginModelUpdateWithoutHardwareInput}),
  create: t.field({"required":true,"type":MarginModelCreateWithoutHardwareInput}),
  where: t.field({"required":false,"type":MarginModelWhereInput}),
});
export const MarginModelUpsertWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpsertWithoutHardwareInput>>('MarginModelUpsertWithoutHardwareInput').implement({
  fields: MarginModelUpsertWithoutHardwareInputFields,
});

export const MarginModelUpdateToOneWithWhereWithoutHardwareInputFields = (t: any) => ({
  where: t.field({"required":false,"type":MarginModelWhereInput}),
  data: t.field({"required":true,"type":MarginModelUpdateWithoutHardwareInput}),
});
export const MarginModelUpdateToOneWithWhereWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpdateToOneWithWhereWithoutHardwareInput>>('MarginModelUpdateToOneWithWhereWithoutHardwareInput').implement({
  fields: MarginModelUpdateToOneWithWhereWithoutHardwareInputFields,
});

export const MarginModelUpdateWithoutHardwareInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel1Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel2Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel2Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel3Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel3Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel4Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel4Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel5Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel5Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel6Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel6Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel7Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel7Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel8Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel8Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel9Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel9Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel10Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel10Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  priceLevel11Label: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  priceLevel11Value: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
});
export const MarginModelUpdateWithoutHardwareInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.MarginModelUpdateWithoutHardwareInput>>('MarginModelUpdateWithoutHardwareInput').implement({
  fields: MarginModelUpdateWithoutHardwareInputFields,
});

export const RemarksCreateManyUserInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  content: t.string({"required":true}),
  trashed: t.boolean({"required":false}),
});
export const RemarksCreateManyUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksCreateManyUserInput>>('RemarksCreateManyUserInput').implement({
  fields: RemarksCreateManyUserInputFields,
});

export const LinkUpdateWithoutUsersInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  description: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  url: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  imageUrl: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  category: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
});
export const LinkUpdateWithoutUsersInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.LinkUpdateWithoutUsersInput>>('LinkUpdateWithoutUsersInput').implement({
  fields: LinkUpdateWithoutUsersInputFields,
});

export const RemarksUpdateWithoutUserInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  content: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  trashed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
});
export const RemarksUpdateWithoutUserInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.RemarksUpdateWithoutUserInput>>('RemarksUpdateWithoutUserInput').implement({
  fields: RemarksUpdateWithoutUserInputFields,
});

export const UserCreateManyRoleInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  email: t.string({"required":false}),
  image: t.string({"required":false}),
});
export const UserCreateManyRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserCreateManyRoleInput>>('UserCreateManyRoleInput').implement({
  fields: UserCreateManyRoleInputFields,
});

export const UserUpdateWithoutRoleInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  bookmarks: t.field({"required":false,"type":LinkUpdateManyWithoutUsersNestedInput}),
  remarks: t.field({"required":false,"type":RemarksUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutRoleInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutRoleInput>>('UserUpdateWithoutRoleInput').implement({
  fields: UserUpdateWithoutRoleInputFields,
});

export const UserUpdateWithoutBookmarksInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  email: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  image: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  role: t.field({"required":false,"type":RoleUpdateOneRequiredWithoutUsersNestedInput}),
  remarks: t.field({"required":false,"type":RemarksUpdateManyWithoutUserNestedInput}),
});
export const UserUpdateWithoutBookmarksInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.UserUpdateWithoutBookmarksInput>>('UserUpdateWithoutBookmarksInput').implement({
  fields: UserUpdateWithoutBookmarksInputFields,
});

export const HardwareCreateManySellMarginModelInputFields = (t: any) => ({
  id: t.int({"required":false}),
  createdAt: t.field({"required":false,"type":DateTime}),
  updatedAt: t.field({"required":false,"type":DateTime}),
  productCode: t.string({"required":true}),
  isActive: t.boolean({"required":false}),
  productType: t.string({"required":false}),
  productNameLabel: t.string({"required":false}),
  productNameValue: t.string({"required":false}),
  productShortDescriptionLabel: t.string({"required":false}),
  productShortDescriptionValue: t.string({"required":false}),
  remarksLabel: t.string({"required":false}),
  remarksValue: t.string({"required":false}),
  manufacturerLabel: t.string({"required":false}),
  manufacturerValue: t.string({"required":false}),
  manufPartsNumberLabel: t.string({"required":false}),
  manufPartsNumberValue: t.string({"required":false}),
  speedcastPartsNumberLabel: t.string({"required":false}),
  speedcastPartsNumberValue: t.string({"required":false}),
  standardWarrantyLabel: t.string({"required":false}),
  standardWarrantyValue: t.string({"required":false}),
  delivryLeadTimeLabel: t.string({"required":false}),
  delivryLeadTimeValue: t.string({"required":false}),
  iNCOTERMLabel: t.string({"required":false}),
  iNCOTERMValue: t.string({"required":false}),
  costValue: t.float({"required":false}),
  leaseToOwnMarginModel: t.string({"required":false}),
  leaseToOperateMarginModel: t.string({"required":false}),
  sellRoundup: t.float({"required":false}),
  leaseToOwnRoundup: t.float({"required":false}),
  leaseToOperateRoundup: t.float({"required":false}),
  pickUpLocationValue: t.string({"required":false}),
  packageWeightLabel: t.string({"required":false}),
  packageWeightValue: t.float({"required":false}),
  packageWeightUnit: t.string({"required":false}),
  packageLengthLabel: t.string({"required":false}),
  packageLengthValue: t.float({"required":false}),
  packageLengthUnit: t.string({"required":false}),
  packageWidthLabel: t.string({"required":false}),
  packageWidthValue: t.float({"required":false}),
  packageWidthUnit: t.string({"required":false}),
  packageHeightLabel: t.string({"required":false}),
  packageHeightValue: t.float({"required":false}),
  packageHeightUnit: t.string({"required":false}),
  sellAllowed: t.boolean({"required":false}),
  leaseToOwn1_5MthAllowed: t.boolean({"required":false}),
  leaseToOwn6_11MthAllowed: t.boolean({"required":false}),
  leaseToOwn12_23MthAllowed: t.boolean({"required":false}),
  leaseToOwn24_35MthAllowed: t.boolean({"required":false}),
  leaseToOwn36_47MthAllowed: t.boolean({"required":false}),
  leaseToOwn48_59MthAllowed: t.boolean({"required":false}),
  leaseToOwn60MthAllowed: t.boolean({"required":false}),
  leaseToOperate1_5MthAllowed: t.boolean({"required":false}),
  leaseToOperate6_11MthAllowed: t.boolean({"required":false}),
  leaseToOperate12_23MthAllowed: t.boolean({"required":false}),
  leaseToOperate24_35MthAllowed: t.boolean({"required":false}),
  leaseToOperate36_47MthAllowed: t.boolean({"required":false}),
  leaseToOperate48_59MthAllowed: t.boolean({"required":false}),
  leaseToOperate60MthAllowed: t.boolean({"required":false}),
});
export const HardwareCreateManySellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareCreateManySellMarginModelInput>>('HardwareCreateManySellMarginModelInput').implement({
  fields: HardwareCreateManySellMarginModelInputFields,
});

export const HardwareUpdateWithoutSellMarginModelInputFields = (t: any) => ({
  createdAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  updatedAt: t.field({"required":false,"type":DateTimeFieldUpdateOperationsInput}),
  productCode: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  isActive: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  productType: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productNameValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  productShortDescriptionValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  remarksValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufacturerValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  manufPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  speedcastPartsNumberValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  standardWarrantyValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  delivryLeadTimeValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  iNCOTERMValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  costValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  leaseToOperateMarginModel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOwnRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  leaseToOperateRoundup: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  pickUpLocationValue: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageLengthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageLengthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageWidthValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageWidthUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightLabel: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  packageHeightValue: t.field({"required":false,"type":NullableFloatFieldUpdateOperationsInput}),
  packageHeightUnit: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
  sellAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOwn60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate1_5MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate6_11MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate12_23MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate24_35MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate36_47MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate48_59MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
  leaseToOperate60MthAllowed: t.field({"required":false,"type":BoolFieldUpdateOperationsInput}),
});
export const HardwareUpdateWithoutSellMarginModelInput = builder.inputRef<PrismaUpdateOperationsInputFilter<Prisma.HardwareUpdateWithoutSellMarginModelInput>>('HardwareUpdateWithoutSellMarginModelInput').implement({
  fields: HardwareUpdateWithoutSellMarginModelInputFields,
});