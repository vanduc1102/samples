import xlsx from "node-xlsx";
import { formatColumnName, getColumnType, getCellValue } from "./common";

export function getExcelRows({
  filename = "MarginModel",
  showSchema = false,
  showRow = -1,
  showHeader = false,
}: {
  filename?: "MarginModel" | "Hardware";
  showSchema?: Boolean;
  showRow?: number;
  showHeader?: Boolean;
}) {
  const hardwareFile = `${process.cwd()}/upload/input/${filename}.xlsx`;
  const workSheetsFromFile = xlsx.parse(hardwareFile, {
    defval: null,
    raw: true,
    rawNumbers: true,
  });

  const hardware = workSheetsFromFile.find((sheet) => sheet.name === filename);
  if (hardware) {
    const header = hardware.data[0];
    if (showHeader) {
      console.log("Header: ", header);
    }

    const types = hardware.data[1];

    const schema = `
model ${filename} {
  /// @Pothos.omit(create, update)
id        Int      @id @default(autoincrement())
  /// @Pothos.omit()
createdAt DateTime @default(now()) @map("created_at")
  /// @Pothos.omit()
updatedAt DateTime @updatedAt @map("updated_at")

${header
  .map(
    (name, idx) =>
      `  ${formatColumnName(name)} ${getColumnType(name, types[idx])}`
  )
  .join("\n")}

}
`;

    // console.log('3nd row - input: ', hardware.data[2]);
    const dbRows = hardware.data
      .slice(2)
      .filter((row) => row[0] !== "#N/A" && row[0])
      .map((row) =>
        row.reduce(
          (acc, cell, index) => ({
            ...acc,
            [formatColumnName(header[index])]: getCellValue(cell),
          }),
          {}
        )
      );
    if (showRow >= 0) {
      console.log("db Rows: ", dbRows[100]);
    }

    if (showSchema) {
      console.log("schema: ", schema);
    }
    return dbRows;
  }
  return [];
}

// createSchema("MarginModel", false, 1);
// getExcelRows({
//     filename:'Hardware',
//     showRow:1,
//     showHeader:true
// });
