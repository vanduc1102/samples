package org.example.app.pdf;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AMLFormGenerator {

    private static final float MARGIN = 50;
    private static final float FONT_SIZE_TITLE = 14;
    private static final float FONT_SIZE_NORMAL = 10;
    private static final float FONT_SIZE_SMALL = 8;
    private static final float LINE_HEIGHT = 15;

    public static void main(String[] args) {
        try {
            generateAMLForm("AML_Customer_Risk_Rating_Form.pdf");
            System.out.println("AML form generated successfully!");
        } catch (IOException e) {
            System.err.println("Error generating form: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public static void generateAMLForm(String filename) throws IOException {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage(PDRectangle.A4);
        document.addPage(page);

        PDPageContentStream contentStream = new PDPageContentStream(document, page);

        float yPosition = page.getMediaBox().getHeight() - MARGIN;

        // Title
        yPosition = drawTitle(contentStream, yPosition);

        // Header section
        yPosition = drawHeaderSection(contentStream, yPosition);

        // Section 1 - All Customers
        yPosition = drawSection1(contentStream, yPosition, page);

        // Section 2 - Personal Customers Only
        yPosition = drawSection2(contentStream, yPosition, page);

        // Scoring table
        yPosition = drawScoringTable(contentStream, yPosition);

        // Footer information
        yPosition = drawFooter(page, contentStream, yPosition);

        contentStream.close();
        document.save(filename);
        document.close();
    }

    private static float drawTitle(PDPageContentStream contentStream, float yPosition) throws IOException {
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_TITLE);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("AML CUSTOMER RISK RATING FORM");
        contentStream.endText();

        yPosition -= LINE_HEIGHT * 2;

        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("FOR USE BY BANK OFFICIAL ONLY");
        contentStream.endText();

        return yPosition - LINE_HEIGHT * 2;
    }

    private static float drawHeaderSection(PDPageContentStream contentStream, float yPosition) throws IOException {
        // Header fields
        List<String> headerFields = List.of(
                "Date: _____________________",
                "RIM#: _____________________",
                "Branch / Unit: _____________________",
                "Customer Name: _____________________",
                "Expected Monthly Deposits: _____________________");

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_NORMAL);

        for (String field : headerFields) {
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN, yPosition);
            contentStream.showText(field);
            contentStream.endText();
            yPosition -= LINE_HEIGHT;
        }

        return yPosition - LINE_HEIGHT;
    }

    private static float drawSection1(PDPageContentStream contentStream, float yPosition, PDPage page)
            throws IOException {
        // Section 1 title
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("SECTION 1: TO BE COMPLETED FOR ALL CUSTOMERS");
        contentStream.endText();

        yPosition -= LINE_HEIGHT * 2;

        // Risk factors table
        List<RiskFactor> riskFactors = List.of(
                new RiskFactor("1", "H-OTH", "1",
                        "The customer is registered/located in or conducting business with individual/entities residing in/located in a high risk/ sanctioned country."),
                new RiskFactor("2", "H-HRN", "5",
                        "The customer/agent (appointed by Mandate/Power of Attorney) is a national/ resident of a sanctioned/high risk country whose nationals/citizens are high risk."),
                new RiskFactor("3", "M-MRN", "3",
                        "The customer/agent (appointed by Mandate/Power of Attorney) is a national/ resident of a sanctioned/high risk country whose nationals/citizens are medium risk."));

        yPosition = drawRiskFactorsTable(contentStream, yPosition, riskFactors, page);

        return yPosition - LINE_HEIGHT;
    }

    private static float drawSection2(PDPageContentStream contentStream, float yPosition, PDPage page)
            throws IOException {
        // Section 2 title
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("SECTION 2: TO BE COMPLETED FOR PERSONAL CUSTOMERS ONLY");
        contentStream.endText();

        yPosition -= LINE_HEIGHT * 2;

        // PEP questions
        List<String> pepQuestions = List.of(
                "Have you ever been entrusted with a local/foreign public function?",
                "Position/Office: _____________________",
                "Country where position is/was held: _____________________",
                "Term of Service (Start/End Date): _____________________",
                "",
                "Are you close relative/close personal or professional associate of someone who is/was entrusted with a local/foreign public function?",
                "Name of PEP: _____________________",
                "Position/Office: _____________________",
                "Country where position is/was held: _____________________",
                "Term of Service (Start/End Date): _____________________",
                "Relationship: _____________________");

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_NORMAL);

        for (String question : pepQuestions) {
            if (!question.isEmpty()) {
                contentStream.beginText();
                contentStream.newLineAtOffset(MARGIN, yPosition);
                contentStream.showText(question);
                contentStream.endText();
            }
            yPosition -= LINE_HEIGHT;
        }

        yPosition -= LINE_HEIGHT;

        // PEP risk factors
        List<RiskFactor> pepRiskFactors = List.of(
                new RiskFactor("4", "H-PEP/H-PEFP", "5",
                        "The customer is a local medium risk PEP currently holding public office OR has been out of public office for 2 years or less OR is an International organization PEP."),
                new RiskFactor("5", "H-PEP A/H-PEFP A", "5",
                        "The customer is a relative or close associate of a medium risk PEP (local only) as identified above."),
                new RiskFactor("6", "M-PEP", "3",
                        "The customer is a local medium risk PEP currently holding public office OR has been out of public office for 2 years or less."),
                new RiskFactor("7", "M-PEP A", "3",
                        "The customer is a relative or close associate of a medium risk PEP (local only) as identified above."));

        yPosition = drawRiskFactorsTable(contentStream, yPosition, pepRiskFactors, page);

        return yPosition - LINE_HEIGHT;
    }

    private static float drawRiskFactorsTable(PDPageContentStream contentStream, float yPosition,
            List<RiskFactor> riskFactors, PDPage page) throws IOException {
        float tableWidth = 545; // Fixed width to fit A4 page
        float[] columnWidths = { 50, 80, 80, 80, 255 }; // Score, Column, Response, Extended Score, Description
        float rowHeight = 40;
        float tableHeight = (riskFactors.size() + 1) * rowHeight; // +1 for header

        // Draw table border
        contentStream.setLineWidth(1f);
        contentStream.addRect(MARGIN, yPosition - tableHeight, tableWidth, tableHeight);
        contentStream.stroke();

        // Draw column lines
        float currentX = MARGIN;
        for (int i = 0; i < columnWidths.length - 1; i++) {
            currentX += columnWidths[i];
            contentStream.moveTo(currentX, yPosition);
            contentStream.lineTo(currentX, yPosition - tableHeight);
            contentStream.stroke();
        }

        // Draw header row line
        contentStream.moveTo(MARGIN, yPosition - rowHeight);
        contentStream.lineTo(MARGIN + tableWidth, yPosition - rowHeight);
        contentStream.stroke();

        // Draw row lines
        float currentY = yPosition - rowHeight;
        for (int i = 0; i < riskFactors.size(); i++) {
            currentY -= rowHeight;
            contentStream.moveTo(MARGIN, currentY);
            contentStream.lineTo(MARGIN + tableWidth, currentY);
            contentStream.stroke();
        }

        // Table headers
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN + 5, yPosition - 15);
        contentStream.showText("Score");
        contentStream.endText();

        contentStream.beginText();
        contentStream.newLineAtOffset(MARGIN + columnWidths[0] + 5, yPosition - 15);
        contentStream.showText("Column");
        contentStream.endText();

        contentStream.beginText();
        contentStream.newLineAtOffset(MARGIN + columnWidths[0] + columnWidths[1] + 5, yPosition - 15);
        contentStream.showText("Response");
        contentStream.endText();

        contentStream.beginText();
        contentStream.newLineAtOffset(MARGIN + columnWidths[0] + columnWidths[1] + columnWidths[2] + 5, yPosition - 15);
        contentStream.showText("Extended");
        contentStream.endText();

        contentStream.beginText();
        contentStream.newLineAtOffset(MARGIN + columnWidths[0] + columnWidths[1] + columnWidths[2] + 5, yPosition - 25);
        contentStream.showText("Score");
        contentStream.endText();

        contentStream.beginText();
        contentStream.newLineAtOffset(
                MARGIN + columnWidths[0] + columnWidths[1] + columnWidths[2] + columnWidths[3] + 5, yPosition - 15);
        contentStream.showText("Description");
        contentStream.endText();

        // Risk factors data
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_SMALL);

        currentY = yPosition - rowHeight;
        for (RiskFactor factor : riskFactors) {
            currentY -= rowHeight;

            // Score column
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN + 5, currentY + 25);
            contentStream.showText(factor.score);
            contentStream.endText();

            // Column code
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN + columnWidths[0] + 5, currentY + 25);
            contentStream.showText(factor.column);
            contentStream.endText();

            // Response (Yes/No/N/A checkbox area)
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN + columnWidths[0] + columnWidths[1] + 5, currentY + 25);
            contentStream.showText("Yes/No/N/A");
            contentStream.endText();

            // Extended Score
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN + columnWidths[0] + columnWidths[1] + columnWidths[2] + 5,
                    currentY + 25);
            contentStream.showText(factor.score);
            contentStream.endText();

            // Description (word wrapped within cell)
            drawWrappedTextInCell(contentStream, factor.description,
                    MARGIN + columnWidths[0] + columnWidths[1] + columnWidths[2] + columnWidths[3] + 5,
                    currentY + 35, columnWidths[4] - 10, 35, FONT_SIZE_SMALL);
        }

        return yPosition - tableHeight - LINE_HEIGHT;
    }

    private static float drawScoringTable(PDPageContentStream contentStream, float yPosition) throws IOException {
        // Total score section
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("TOTAL SCORE: _____________________");
        contentStream.endText();

        yPosition -= LINE_HEIGHT * 2;

        // Score legend
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("SCORE LEGEND:");
        contentStream.endText();

        yPosition -= LINE_HEIGHT;

        List<String> scoreRules = List.of(
                ">= 5     High Risk",
                "3       Medium Risk",
                "0, 1 and 2    Low Risk");

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_NORMAL);

        for (String rule : scoreRules) {
            contentStream.beginText();
            contentStream.newLineAtOffset(MARGIN, yPosition);
            contentStream.showText(rule);
            contentStream.endText();
            yPosition -= LINE_HEIGHT;
        }

        yPosition -= LINE_HEIGHT;

        // Suggested risk classification
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("Suggested Risk Classification: _____________________");
        contentStream.endText();

        return yPosition - LINE_HEIGHT * 2;
    }

    private static float drawFooter(PDPage page, PDPageContentStream contentStream, float yPosition)
            throws IOException {
        // Guide
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("GUIDE:");
        contentStream.endText();

        yPosition -= LINE_HEIGHT;

        String guideText = "Interview the customer to obtain responses to applicable questions above. Select the appropriate responses using the picklist options in the 'Response' column. Based on the TOTAL SCORE, use the Score Legend below to determine the customer risk rating.";

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_SMALL);
        yPosition = drawWrappedTextInCell(contentStream, guideText, MARGIN, yPosition,
                page.getMediaBox().getWidth() - MARGIN * 2, 40, FONT_SIZE_SMALL);

        yPosition -= LINE_HEIGHT;

        // Prohibited customers
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA_BOLD), FONT_SIZE_SMALL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("PROHIBITED CUSTOMERS:");
        contentStream.endText();

        yPosition -= LINE_HEIGHT;

        String prohibitedText = "Shell Banks; Anonymous Accounts or Accounts in Fictitious Names; Casinos / Private Members Clubs (\"PMCs\") and other Gaming Related Businesses; Companies that Issue Bearer Shares; Arms Dealers, Manufacturers and Sellers of Arms and Munitions; Cryptocurrency Exchange Business (e.g. Bitcoins, Litecoin, Ethereum); Marijuana Related Businesses and Customers Engaged in Prostitution and/or Pornography.";

        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_SMALL);
        yPosition = drawWrappedTextInCell(contentStream, prohibitedText, MARGIN, yPosition,
                page.getMediaBox().getWidth() - MARGIN * 2, 60, FONT_SIZE_SMALL);

        yPosition -= LINE_HEIGHT * 2;

        // Signatures
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_NORMAL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("Interviewing Officer: _____________________     Supervisor: _____________________");
        contentStream.endText();

        yPosition -= LINE_HEIGHT * 2;

        // Version
        contentStream.beginText();
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), FONT_SIZE_SMALL);
        contentStream.newLineAtOffset(MARGIN, yPosition);
        contentStream.showText("Rev 04/24");
        contentStream.endText();

        return yPosition;
    }

    private static float drawWrappedTextInCell(PDPageContentStream contentStream, String text,
            float x, float y, float width, float height, float fontSize) throws IOException {
        contentStream.setFont(new PDType1Font(Standard14Fonts.FontName.HELVETICA), fontSize);

        String[] words = text.split(" ");
        StringBuilder line = new StringBuilder();
        float currentY = y;
        float lineHeight = fontSize + 2;

        for (String word : words) {
            String testLine = line.length() > 0 ? line + " " + word : word;
            float textWidth = new PDType1Font(Standard14Fonts.FontName.HELVETICA).getStringWidth(testLine) / 1000
                    * fontSize;

            if (textWidth > width && line.length() > 0) {
                // Draw current line
                if (currentY - lineHeight > y - height) {
                    contentStream.beginText();
                    contentStream.newLineAtOffset(x, currentY);
                    contentStream.showText(line.toString());
                    contentStream.endText();

                    currentY -= lineHeight;
                    line = new StringBuilder(word);
                } else {
                    // No more space in cell
                    break;
                }
            } else {
                line = new StringBuilder(testLine);
            }
        }

        // Draw remaining text
        if (line.length() > 0 && currentY - lineHeight > y - height) {
            contentStream.beginText();
            contentStream.newLineAtOffset(x, currentY);
            contentStream.showText(line.toString());
            contentStream.endText();
        }

        return currentY;
    }

    // Helper class for risk factors
    private static class RiskFactor {
        String column;
        String score;
        String description;

        RiskFactor(String column, String code, String score, String description) {
            this.column = column;
            this.score = score;
            this.description = description;
        }
    }
}

// Maven dependency required in pom.xml:
/*
 * <dependency>
 * <groupId>org.apache.pdfbox</groupId>
 * <artifactId>pdfbox</artifactId>
 * <version>3.0.1</version>
 * </dependency>
 */
