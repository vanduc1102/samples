package org.example.app.pdf;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.cos.COSName;
import org.apache.pdfbox.cos.COSDictionary;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDResources;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.Standard14Fonts;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class PDFFormFiller {

    public static void fillPDFForm(String inputFilePath, String outputFilePath, Map<String, String> fieldValues) {
        try (PDDocument document = Loader.loadPDF(new File(inputFilePath))) {
            PDAcroForm acroForm = document.getDocumentCatalog().getAcroForm();

            if (acroForm != null) {
                System.out.println("Filling PDF form with " + acroForm.getFields().size() + " fields found.");

                // Setup font resources properly
                PDResources resources = acroForm.getDefaultResources();
                if (resources == null) {
                    resources = new PDResources();
                    acroForm.setDefaultResources(resources);
                }

                // Add Helvetica font to form resources with correct name
                try {
                    PDType1Font helvetica = new PDType1Font(Standard14Fonts.FontName.HELVETICA);
                    resources.put(COSName.getPDFName("Helvetica"), helvetica);
                    System.out.println("Added Helvetica font to form resources");
                } catch (Exception e) {
                    System.out.println("Could not add Helvetica font: " + e.getMessage());
                }

                // Fill form fields with error handling
                for (Map.Entry<String, String> entry : fieldValues.entrySet()) {
                    PDField field = acroForm.getField(entry.getKey());
                    if (field != null) {
                        try {
                            // Clean the text value
                            String cleanValue = cleanText(entry.getValue());
                            field.setValue(cleanValue);
                            System.out.println("Filled field: " + entry.getKey() + " = " + cleanValue);
                        } catch (IOException e) {
                            System.err.println("Error filling field " + entry.getKey() + ": " + e.getMessage());
                            // Try alternative approach by removing default appearance
                            try {
                                // Set a default appearance string with font and size (e.g., Helvetica 12pt)
                                field.getCOSObject().setString(COSName.DA, "/Helvetica 18 Tf 0 g");
                                COSDictionary fieldDict = field.getCOSObject();
                                fieldDict.removeItem(COSName.DA); // Remove default appearance
                                field.setValue(cleanText(entry.getValue()));
                                System.out.println(
                                        "Successfully filled field using alternative method: " + entry.getKey());
                            } catch (Exception altE) {
                                System.err.println("Alternative fill method also failed for " + entry.getKey() + ": "
                                        + altE.getMessage());
                            }
                        }
                    } else {
                        System.out.println("Field " + entry.getKey() + " not found in the form.");
                    }
                }

                // Refresh form appearances
                try {
                    acroForm.refreshAppearances();
                    System.out.println("Form appearances refreshed successfully");
                } catch (Exception e) {
                    System.out.println("Warning: Could not refresh appearances: " + e.getMessage());
                }
            } else {
                System.out.println("No AcroForm found in the PDF document.");
            }

            document.save(outputFilePath);
            System.out.println("PDF form filled successfully and saved to: " + outputFilePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String cleanText(String text) {
        if (text == null)
            return "";
        return text
                .replaceAll("[\\r\\n\\t]", " ") // Replace line breaks and tabs with spaces
                .replaceAll("\\p{Cntrl}", "") // Remove control characters
                .replaceAll("\\s+", " ") // Replace multiple spaces with single space
                .trim();
    }

    public static void main(String[] args) {
        Map<String, String> fieldValues = new HashMap<>();
        fieldValues.put("customerName", "NGUYEN VAN DUKE");
        fieldValues.put("date", "2025-12-31");

        fillPDFForm("app/src/main/resources/form-template.pdf",
                "app/build/filled_form.pdf", fieldValues);
    }
}
