import { getExcelRows } from "../../../import-excels";
import { prisma } from "../../../lib/prisma";

export async function seedMarginModel() {
  try {
    const rows = getExcelRows({ filename: "MarginModel" });
    await prisma.marginModel.createMany({
      data: rows,
      skipDuplicates: true,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function seedHardware() {
  try {
    const rows = getExcelRows({ filename: "Hardware" });
    await prisma.hardware.createMany({
      data: rows.map((row) => ({
        ...row,
        sellMarginModel: undefined,
        sellMarginModelName:
          row.sellMarginModel !== "N/A" ? row.sellMarginModel : null,
        manufPartsNumberValue: String(row.manufPartsNumberValue),
        standardWarrantyValue: String(row.standardWarrantyValue),
        pickUpLocationValue: String(row.pickUpLocationValue),
        packageWeightUnit: String(row.packageWeightUnit),
        packageLengthUnit: String(row.packageLengthUnit),
        packageWidthUnit: String(row.packageWidthUnit),
        packageHeightUnit: String(row.packageHeightUnit),
      })),
      skipDuplicates: true,
    });
  } catch (error) {
    console.log(error);
  }
}
