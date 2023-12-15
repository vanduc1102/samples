import { lowerFirst } from "lodash";

export function formatColumnName(name: string): string {
  return lowerFirst(name.replace("-", "_"));
}

export function getCellValue(value: string): unknown {
  if (value === "NO" || value === "YES") {
    return value === "YES";
  }
  return value;
}

export function getColumnType(name: string, excelType: string): string {
  if (
    name === "IsActive" ||
    name.includes("MthAllowed") ||
    name.includes("SellAllowed")
  ) {
    return "Boolean @default(false) ";
  }

  if (
    [
      "VALUE10",
      "INFONUMBER10",
      "VALUE10YESA0B1",
      "VALUE10YESA1B0",
      "VALUE10YESA2B0",
      "VALUE10YESA4B0",
      "VALUE10YESA12B0"
    ].includes(excelType)
  ) {
    return "Float?";
  }
  return "String?";
}
