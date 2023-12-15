-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Remarks" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "trashed" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Remarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarginModel" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "productType" TEXT,
    "productNameLabel" TEXT,
    "productNameValue" TEXT NOT NULL,
    "remarksLabel" TEXT,
    "remarksValue" TEXT,
    "priceLevel1Label" TEXT,
    "priceLevel1Value" DOUBLE PRECISION,
    "priceLevel2Label" TEXT,
    "priceLevel2Value" DOUBLE PRECISION,
    "priceLevel3Label" TEXT,
    "priceLevel3Value" DOUBLE PRECISION,
    "priceLevel4Label" TEXT,
    "priceLevel4Value" DOUBLE PRECISION,
    "priceLevel5Label" TEXT,
    "priceLevel5Value" DOUBLE PRECISION,
    "priceLevel6Label" TEXT,
    "priceLevel6Value" DOUBLE PRECISION,
    "priceLevel7Label" TEXT,
    "priceLevel7Value" DOUBLE PRECISION,
    "priceLevel8Label" TEXT,
    "priceLevel8Value" DOUBLE PRECISION,
    "priceLevel9Label" TEXT,
    "priceLevel9Value" DOUBLE PRECISION,
    "priceLevel10Label" TEXT,
    "priceLevel10Value" DOUBLE PRECISION,
    "priceLevel11Label" TEXT,
    "priceLevel11Value" DOUBLE PRECISION,

    CONSTRAINT "MarginModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hardware" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "productCode" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "productType" TEXT,
    "productNameLabel" TEXT,
    "productNameValue" TEXT,
    "productShortDescriptionLabel" TEXT,
    "productShortDescriptionValue" TEXT,
    "remarksLabel" TEXT,
    "remarksValue" TEXT,
    "manufacturerLabel" TEXT,
    "manufacturerValue" TEXT,
    "manufPartsNumberLabel" TEXT,
    "manufPartsNumberValue" TEXT,
    "speedcastPartsNumberLabel" TEXT,
    "speedcastPartsNumberValue" TEXT,
    "standardWarrantyLabel" TEXT,
    "standardWarrantyValue" TEXT,
    "delivryLeadTimeLabel" TEXT,
    "delivryLeadTimeValue" TEXT,
    "iNCOTERMLabel" TEXT,
    "iNCOTERMValue" TEXT,
    "costValue" DOUBLE PRECISION,
    "leaseToOwnMarginModel" TEXT,
    "leaseToOperateMarginModel" TEXT,
    "sellRoundup" DOUBLE PRECISION,
    "leaseToOwnRoundup" DOUBLE PRECISION,
    "leaseToOperateRoundup" DOUBLE PRECISION,
    "pickUpLocationValue" TEXT,
    "packageWeightLabel" TEXT,
    "packageWeightValue" DOUBLE PRECISION,
    "packageWeightUnit" TEXT,
    "packageLengthLabel" TEXT,
    "packageLengthValue" DOUBLE PRECISION,
    "packageLengthUnit" TEXT,
    "packageWidthLabel" TEXT,
    "packageWidthValue" DOUBLE PRECISION,
    "packageWidthUnit" TEXT,
    "packageHeightLabel" TEXT,
    "packageHeightValue" DOUBLE PRECISION,
    "packageHeightUnit" TEXT,
    "sellAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn1_5MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn6_11MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn12_23MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn24_35MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn36_47MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn48_59MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOwn60MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate1_5MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate6_11MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate12_23MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate24_35MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate36_47MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate48_59MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "leaseToOperate60MthAllowed" BOOLEAN NOT NULL DEFAULT false,
    "sellMarginModelName" TEXT NOT NULL,

    CONSTRAINT "Hardware_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LinkToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Role_code_key" ON "Role"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Remarks_content_key" ON "Remarks"("content");

-- CreateIndex
CREATE UNIQUE INDEX "MarginModel_productCode_key" ON "MarginModel"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "MarginModel_productNameValue_key" ON "MarginModel"("productNameValue");

-- CreateIndex
CREATE UNIQUE INDEX "Hardware_productCode_key" ON "Hardware"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "_LinkToUser_AB_unique" ON "_LinkToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkToUser_B_index" ON "_LinkToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Remarks" ADD CONSTRAINT "Remarks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hardware" ADD CONSTRAINT "Hardware_sellMarginModelName_fkey" FOREIGN KEY ("sellMarginModelName") REFERENCES "MarginModel"("productNameValue") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToUser" ADD CONSTRAINT "_LinkToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToUser" ADD CONSTRAINT "_LinkToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
