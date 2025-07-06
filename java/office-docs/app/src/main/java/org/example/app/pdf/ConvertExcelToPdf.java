package org.example.app.pdf;

import java.awt.Color;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType0Font;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFColor;

public class ConvertExcelToPdf {
    public void convert(String excelFilePath, String pdfFilePath) throws IOException {
        try (PDDocument document = new PDDocument()) {
            PDPage page = new PDPage();
            document.addPage(page);

            try (PDPageContentStream contentStream = new PDPageContentStream(document, page);
                    InputStream is = Files.newInputStream(Paths.get(excelFilePath));
                    Workbook workbook = WorkbookFactory.create(is)) {

                // Load font with fallback
                PDType0Font font = loadFont(document);

                Sheet sheet = workbook.getSheetAt(0);

                // Calculate dynamic cell dimensions based on content
                float[] columnWidths = calculateColumnWidths(sheet);

                // Check if we need to scale down to fit page width
                float totalWidth = getTotalWidth(columnWidths);
                float pageWidth = page.getMediaBox().getWidth() - 40f; // 20pt margins on each side
                float scale = 1.0f;

                if (totalWidth > pageWidth) {
                    scale = pageWidth / totalWidth;
                    // Don't scale too aggressively - minimum scale of 0.5 to keep text readable
                    scale = Math.max(scale, 0.5f);
                    System.out.println("Scaling down by factor: " + scale + " to fit page width");
                    for (int i = 0; i < columnWidths.length; i++) {
                        columnWidths[i] *= scale;
                    }
                }

                float startX = 20f; // Left margin
                float startY = 750f;

                // Process each row
                float currentY = startY;
                for (Row row : sheet) {
                    if (row == null)
                        continue;

                    int rowIndex = row.getRowNum();

                    // Get Excel row height and convert to PDF points
                    float excelRowHeight = row.getHeight();
                    // Excel row height is in units of 1/20th of a point
                    float cellHeight = excelRowHeight / 20f;

                    // More reasonable bounds - allow taller rows for multi-line content
                    cellHeight = Math.max(cellHeight, 12f); // Minimum 12 points
                    cellHeight = Math.min(cellHeight, 80f); // Maximum 80 points

                    // Apply scaling if we scaled down the columns, but maintain minimum height
                    cellHeight *= scale;
                    cellHeight = Math.max(cellHeight, 10f); // Ensure minimum readable height after scaling

                    float rowY = currentY;
                    currentY -= cellHeight; // Update for next row

                    System.out.println("Row " + rowIndex + ": Excel height=" + excelRowHeight +
                            ", PDF height=" + cellHeight);

                    // Process each cell in the row
                    for (Cell cell : row) {
                        if (cell == null)
                            continue;

                        int columnIndex = cell.getColumnIndex();
                        float cellWidth = columnWidths[columnIndex];
                        float cellX = startX + getPreviousColumnsWidth(columnWidths, columnIndex);

                        // Get cell style
                        CellStyle cellStyle = cell.getCellStyle();

                        // Draw cell background
                        drawCellBackground(contentStream, cellStyle, cellX, rowY, cellWidth, cellHeight);

                        // Draw cell borders
                        drawCellBorders(contentStream, cellStyle, cellX, rowY, cellWidth, cellHeight);

                        // Draw cell text with formatting
                        drawCellText(contentStream, cell, cellStyle, font, document, cellX, rowY, cellWidth,
                                cellHeight);
                    }
                }
            }

            document.save(pdfFilePath);
            System.out.println("Excel converted to PDF successfully: " + pdfFilePath);
        }
    }

    public void fillPdfFrom(String pdfFilePath, String data) throws IOException {
        try (PDDocument document = Loader.loadPDF(new File(pdfFilePath))) {
            PDPage page = document.getPage(0);

            try (PDPageContentStream contentStream = new PDPageContentStream(
                    document, page, PDPageContentStream.AppendMode.APPEND, true, true)) {

                // Try to load font, fallback to standard font
                try (InputStream fontStream = getClass().getResourceAsStream("/fonts/arial/ARIAL.TTF")) {
                    if (fontStream != null) {
                        PDType0Font font = PDType0Font.load(document, fontStream);
                        contentStream.setFont(font, 12.0f);
                    } else {
                        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), 12.0f);
                    }
                }

                contentStream.beginText();
                contentStream.newLineAtOffset(50, 700);
                contentStream.showText(cleanText(data));
                contentStream.endText();
            }

            // Save to a new file
            String outputPath = pdfFilePath.replace(".pdf", "_filled.pdf");
            document.save(outputPath);
            System.out.println("PDF form filled successfully: " + outputPath);
        }
    }

    private PDType0Font loadFont(PDDocument document) throws IOException {
        return loadFont(document, false);
    }

    private PDType0Font loadFont(PDDocument document, boolean bold) throws IOException {
        String fontPath = bold ? "/fonts/arial/ARIALBD.TTF" : "/fonts/arial/ARIAL.TTF";

        try (InputStream fontStream = getClass().getResourceAsStream(fontPath)) {
            if (fontStream != null) {
                return PDType0Font.load(document, fontStream);
            } else {
                // Fallback: try the regular font if bold is not available
                if (bold) {
                    return loadFont(document, false);
                } else {
                    throw new IOException("Arial font not found");
                }
            }
        } catch (IOException e) {
            if (bold) {
                return loadFont(document, false);
            }
            throw new IOException("Could not load font");
        }
    }

    private void drawCellBackground(PDPageContentStream contentStream, CellStyle cellStyle,
            float x, float y, float width, float height) throws IOException {
        // Check if cell has background color
        if (cellStyle.getFillPattern() != FillPatternType.NO_FILL) {
            // Get background color
            Color bgColor = getBackgroundColor(cellStyle);
            if (bgColor != null && !bgColor.equals(Color.WHITE)) {
                contentStream.setNonStrokingColor(bgColor.getRed() / 255f,
                        bgColor.getGreen() / 255f,
                        bgColor.getBlue() / 255f);
                contentStream.addRect(x, y - height, width, height);
                contentStream.fill();
                contentStream.setNonStrokingColor(0, 0, 0); // Reset to black
            }
        }
    }

    private void drawCellBorders(PDPageContentStream contentStream, CellStyle cellStyle,
            float x, float y, float width, float height) throws IOException {
        contentStream.setStrokingColor(0, 0, 0); // Black border color

        // Top border
        if (cellStyle.getBorderTop() != BorderStyle.NONE) {
            float lineWidth = getBorderWidth(cellStyle.getBorderTop());
            contentStream.setLineWidth(lineWidth);
            contentStream.moveTo(x, y);
            contentStream.lineTo(x + width, y);
            contentStream.stroke();
        }

        // Bottom border
        if (cellStyle.getBorderBottom() != BorderStyle.NONE) {
            float lineWidth = getBorderWidth(cellStyle.getBorderBottom());
            contentStream.setLineWidth(lineWidth);
            contentStream.moveTo(x, y - height);
            contentStream.lineTo(x + width, y - height);
            contentStream.stroke();
        }

        // Left border
        if (cellStyle.getBorderLeft() != BorderStyle.NONE) {
            float lineWidth = getBorderWidth(cellStyle.getBorderLeft());
            contentStream.setLineWidth(lineWidth);
            contentStream.moveTo(x, y);
            contentStream.lineTo(x, y - height);
            contentStream.stroke();
        }

        // Right border
        if (cellStyle.getBorderRight() != BorderStyle.NONE) {
            float lineWidth = getBorderWidth(cellStyle.getBorderRight());
            contentStream.setLineWidth(lineWidth);
            contentStream.moveTo(x + width, y);
            contentStream.lineTo(x + width, y - height);
            contentStream.stroke();
        }
    }

    private void drawCellText(PDPageContentStream contentStream, Cell cell, CellStyle cellStyle,
            PDType0Font defaultFont, PDDocument document, float x, float y, float width, float height)
            throws IOException {
        String cellValue = cleanText(cell.toString());
        if (cellValue.isEmpty())
            return;

        // Get font properties from Excel
        Font poiFont = cell.getSheet().getWorkbook().getFontAt(cellStyle.getFontIndex());
        float fontSize = Math.max(poiFont.getFontHeightInPoints(), 7f); // Lower minimum font size
        boolean isBold = poiFont.getBold();

        // Load appropriate font (bold or regular)
        PDType0Font font;
        try {
            font = loadFont(document, isBold);
        } catch (IOException e) {
            font = defaultFont; // Fallback to default font
            // If bold, increase font size slightly to simulate bold
            if (isBold) {
                fontSize += 0.5f;
            }
        }

        // Dynamically adjust font size to fit cell width if needed
        fontSize = adjustFontSizeToFit(font, cellValue, fontSize, width - 4); // Account for padding

        // Set font and size
        contentStream.setFont(font, fontSize);

        // Set text color
        Color textColor = getFontColor(poiFont);
        contentStream.setNonStrokingColor(textColor.getRed() / 255f,
                textColor.getGreen() / 255f,
                textColor.getBlue() / 255f);

        // Better text positioning with improved vertical centering
        float textY = y - (height / 2) + (fontSize / 3); // Improved vertical centering
        float textX = x + 3; // Slightly more padding from left edge

        // Check if text fits in one line, if not, try simple text wrapping
        try {
            float textWidth = font.getStringWidth(cellValue) / 1000 * fontSize;
            if (textWidth <= width - 6) { // Single line fits
                contentStream.beginText();
                contentStream.newLineAtOffset(textX, textY);
                contentStream.showText(cellValue);
                contentStream.endText();
            } else {
                // Simple text wrapping for long text
                drawWrappedText(contentStream, cellValue, font, fontSize, textX, textY, width - 6, height);
            }
        } catch (IOException e) {
            // Fallback: just draw the text as is
            contentStream.beginText();
            contentStream.newLineAtOffset(textX, textY);
            contentStream.showText(cellValue);
            contentStream.endText();
        }

        // Reset text color to black
        contentStream.setNonStrokingColor(0, 0, 0);
    }

    private Color getBackgroundColor(CellStyle cellStyle) {
        try {
            // Try XSSF color first (for .xlsx files)
            if (cellStyle.getFillForegroundColorColor() instanceof XSSFColor) {
                XSSFColor xssfColor = (XSSFColor) cellStyle.getFillForegroundColorColor();
                byte[] rgb = xssfColor.getRGB();
                if (rgb != null && rgb.length >= 3) {
                    return new Color(rgb[0] & 0xFF, rgb[1] & 0xFF, rgb[2] & 0xFF);
                }
            }

            // Try indexed color approach
            short colorIndex = cellStyle.getFillForegroundColor();
            if (colorIndex != 64 && colorIndex != 0) { // 64 is automatic, 0 is black (but often means no color)
                // Expanded color mapping for common indexed colors
                switch (colorIndex) {
                    case 8:
                        return new Color(0, 0, 0); // Black
                    case 9:
                        return new Color(255, 255, 255); // White
                    case 10:
                        return new Color(255, 0, 0); // Red
                    case 11:
                        return new Color(0, 255, 0); // Bright Green
                    case 12:
                        return new Color(0, 0, 255); // Blue
                    case 13:
                        return new Color(255, 255, 0); // Yellow
                    case 14:
                        return new Color(255, 0, 255); // Magenta
                    case 15:
                        return new Color(0, 255, 255); // Cyan
                    case 16:
                        return new Color(128, 0, 0); // Dark Red
                    case 17:
                        return new Color(0, 128, 0); // Green
                    case 18:
                        return new Color(0, 0, 128); // Dark Blue
                    case 19:
                        return new Color(128, 128, 0); // Dark Yellow
                    case 20:
                        return new Color(128, 0, 128); // Dark Magenta
                    case 21:
                        return new Color(0, 128, 128); // Dark Cyan
                    case 22:
                        return new Color(192, 192, 192); // Light Gray
                    case 23:
                        return new Color(128, 128, 128); // Dark Gray
                    case 40:
                        return new Color(0, 0, 0); // System foreground
                    case 41:
                        return new Color(255, 255, 255); // System background
                    case 42:
                        return new Color(240, 240, 240); // Light Gray 25%
                    case 43:
                        return new Color(166, 166, 166); // Gray 25%
                    case 44:
                        return new Color(217, 217, 217); // Light Gray 40%
                    case 45:
                        return new Color(191, 191, 191); // Gray 40%
                    case 46:
                        return new Color(102, 102, 102); // Dark Gray 80%
                    case 47:
                        return new Color(76, 76, 76); // Gray 80%
                    case 48:
                        return new Color(153, 204, 255); // Light Blue
                    case 49:
                        return new Color(204, 255, 204); // Light Green
                    case 50:
                        return new Color(255, 255, 153); // Light Yellow
                    case 51:
                        return new Color(255, 204, 153); // Light Orange
                    case 52:
                        return new Color(255, 153, 204); // Light Pink
                    case 53:
                        return new Color(204, 153, 255); // Light Purple
                    case 54:
                        return new Color(255, 204, 204); // Light Red
                    case 55:
                        return new Color(51, 102, 255); // Blue
                    case 56:
                        return new Color(51, 204, 204); // Turquoise
                    case 57:
                        return new Color(153, 204, 0); // Bright Green
                    default:
                        // For other colors, return a very light gray to indicate some fill
                        return new Color(248, 248, 248);
                }
            }
        } catch (Exception e) {
            // Fallback to default
        }
        return null; // No background color
    }

    private Color getFontColor(Font font) {
        try {
            if (font instanceof org.apache.poi.xssf.usermodel.XSSFFont) {
                org.apache.poi.xssf.usermodel.XSSFFont xssfFont = (org.apache.poi.xssf.usermodel.XSSFFont) font;
                XSSFColor color = xssfFont.getXSSFColor();
                if (color != null) {
                    byte[] rgb = color.getRGB();
                    if (rgb != null && rgb.length >= 3) {
                        return new Color(rgb[0] & 0xFF, rgb[1] & 0xFF, rgb[2] & 0xFF);
                    }
                }
            }
        } catch (Exception e) {
            // Fallback to black
        }
        return Color.BLACK;
    }

    private float getBorderWidth(BorderStyle borderStyle) {
        switch (borderStyle) {
            case THIN:
                return 0.5f;
            case MEDIUM:
                return 1.0f;
            case THICK:
                return 1.5f;
            case DOUBLE:
                return 0.5f; // We'll draw double as single for simplicity
            default:
                return 0.5f;
        }
    }

    private String cleanText(String text) {
        if (text == null)
            return "";
        return text
                .replaceAll("[\\r\\n\\t]", " ") // Replace line breaks and tabs with spaces
                .replaceAll("\\p{Cntrl}", "") // Remove control characters
                .replaceAll("\\s+", " ") // Replace multiple spaces with single space
                .trim();
    }

    private float[] calculateColumnWidths(Sheet sheet) {
        // Find the maximum number of columns
        int maxColumns = 0;
        for (Row row : sheet) {
            if (row != null && row.getLastCellNum() > maxColumns) {
                maxColumns = row.getLastCellNum();
            }
        }

        float[] columnWidths = new float[maxColumns];

        // Use Excel's actual column widths properly converted
        for (int col = 0; col < maxColumns; col++) {
            // Get Excel column width (in Excel's character units)
            float excelWidth = sheet.getColumnWidth(col);

            // Convert Excel units to points more accurately
            // Excel width is in units of 1/256 of the maximum digit width of default font
            // Better conversion: 1 Excel unit ≈ 0.18 points for more accurate sizing
            float pdfWidth = excelWidth * 0.18f;

            // More reasonable bounds - allow wider columns for text
            pdfWidth = Math.max(pdfWidth, 40f); // Minimum 40 points
            pdfWidth = Math.min(pdfWidth, 400f); // Maximum 400 points (much higher)

            columnWidths[col] = pdfWidth;

            System.out.println("Column " + col + ": Excel width=" + excelWidth +
                    " units, PDF width=" + pdfWidth + " points");
        }

        return columnWidths;
    }

    private float getPreviousColumnsWidth(float[] columnWidths, int currentColumn) {
        float totalWidth = 0f;
        for (int i = 0; i < currentColumn && i < columnWidths.length; i++) {
            totalWidth += columnWidths[i];
        }
        return totalWidth;
    }

    private float getTotalWidth(float[] columnWidths) {
        float total = 0f;
        for (float width : columnWidths) {
            total += width;
        }
        return total;
    }

    private float adjustFontSizeToFit(PDType0Font font, String text, float originalSize, float maxWidth) {
        try {
            float textWidth = font.getStringWidth(text) / 1000 * originalSize;
            if (textWidth <= maxWidth) {
                return originalSize; // Text fits at original size
            }

            // Calculate scale factor to fit text
            float scaleFactor = maxWidth / textWidth;
            float newSize = originalSize * scaleFactor;

            // Don't make text too small
            return Math.max(newSize, 6f);
        } catch (IOException e) {
            return originalSize; // Return original size if measurement fails
        }
    }

    private void drawWrappedText(PDPageContentStream contentStream, String text, PDType0Font font,
            float fontSize, float x, float y, float maxWidth, float maxHeight)
            throws IOException {
        String[] words = text.split("\\s+");
        if (words.length == 0)
            return;

        StringBuilder currentLine = new StringBuilder();
        float lineHeight = fontSize * 1.2f; // Line spacing
        float currentY = y;

        contentStream.beginText();

        for (String word : words) {
            String testLine = currentLine.length() > 0 ? currentLine + " " + word : word;
            float testWidth = font.getStringWidth(testLine) / 1000 * fontSize;

            if (testWidth <= maxWidth) {
                currentLine.append(currentLine.length() > 0 ? " " + word : word);
            } else {
                // Draw current line and start new line
                if (currentLine.length() > 0) {
                    contentStream.newLineAtOffset(x, currentY);
                    contentStream.showText(currentLine.toString());
                    currentY -= lineHeight;

                    // Check if we have space for another line
                    if (currentY < y - maxHeight + lineHeight) {
                        break; // No more space
                    }

                    contentStream.newLineAtOffset(-x, -currentY); // Reset position
                }
                currentLine = new StringBuilder(word);
            }
        }

        // Draw the last line
        if (currentLine.length() > 0 && currentY >= y - maxHeight + lineHeight) {
            contentStream.newLineAtOffset(x, currentY);
            contentStream.showText(currentLine.toString());
        }

        contentStream.endText();
    }
}
