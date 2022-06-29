package com.github.vanducld.sample;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;


import com.google.api.gax.core.FixedCredentialsProvider;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.vision.v1.*;
import com.google.cloud.vision.v1.Feature.Type;
import com.google.common.collect.Lists;
import com.google.protobuf.ByteString;

import java.util.List;
import java.util.Objects;

public class GoogleVisionClient {
    private static String GOOGLE_CREDENTIALS_JSON_PATH = "/Users/duc.nguyen/Downloads/the-quizz-world-google-vision-demo.json";
    private static ImageAnnotatorClient GOOGLE_VISION_CLIENT = getGoogleVisionClient();

    private static ImageAnnotatorClient getGoogleVisionClient() {
        String JsonContent = """
            {
            "type": "service_account",
                    "project_id": "the-quizz-world",
                    "private_key_id": "7eab3aa095a075de0e00a803ed9bc833041f85cf",
                    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyBZ+LKQy8ynqG\nOJjG5+pH8pSgZtYuLxExdSHpqVEnf2xNk1A/gc+l3XwgIhGbaTNP++dPNSXHiuZF\nnRjurJRJiOupfIobkIcWGr3X+vMaWB600xSCJJwKHo78a2RAdeRa+dPkqrFhWfDn\niY2Le3PfFDbt2HQumW9AjFzgss4NVAXa8AZbEKLBdj5xk8crDftZIFpe7U7zNR4O\nP0qzVWqEZeyw3iMq2bsZ8u+jCFL70s8Z0S+wOVMncRovmXAH9pOxBitaUKo2TgyU\nmbCFnx0welVM63emA8NWkoT3AgZceD8C7NTvZqTtAAxFIh2/xEk1zG7czOz4Y6zw\n5p+jnlopAgMBAAECggEAAtM0BPFR0m0kJJ0hT4a+oQWodiMrou/8Rdyl/R9Cum27\nOj/sNhXJRciN/7SKsvyoY8yLjyY4w0HhBZnIm4EBmWki1D21s1pHyoICITtKQFDF\nq/jtimMqVr7FZhwOKzezt/3e7vIGfpT+za3RITWEUTXw6TVWIqcsrMmNb8Nmoa98\n31DPYR3QPlygeBeH5l2UMKybxSNmuqpaoA0/hk8UrkJVtIpvvX1fkyUqXmc0AKuG\njuEaXaExZfQpYZx7ZETMnq1C6yRm1y9FvFOA8CU2sib4BjNbr2A56wPlDiVGK8Yg\nJ2b1ZqkhmvQt3DxfxTyivljKFmYlduXgcvoaRv+1AQKBgQDhKA2Xeq4Jf/Bbb5C0\nlmbD0TZVGjFxxCymMr5j3aMLLG87ALgyGSxIsPvBlHWIgU/ktJY8U/tXn8jrfR+a\n98woZo3U6ty66w+OJ5l5+GhNJ+pg/g/9IQX3jjOOqxKluObQXOnX3DwD0lrr4/UO\nleR8kMVEdtURJ/T069OzhwvoFQKBgQDKaJ/M7OQ7rKG+ZnFZ/aSeXGT89isofYki\nlpyTQGDl5/W331/2/rIbouApPXKw6OeJT6bzrBrGkhqPvNkX1QqxU9poDyC9LiuP\nQ1eIXHA0nsx2+VkLkdAvamLiGiGD073B9vf1yLJw1kRvC/L3IuHGALZR+5J6FIh6\nw3YPSWA6xQKBgQCkRz4LfQZIhiGQBUm2iVo3m4kh9LeIw1K0fKevY8IXX/dUPIUo\ngHdwHjnCFxjeXUM2opBPOhNT7pCBSUzrG8vI2nK3nBkrBGDYHop7lMQ9L1dyJ0zx\nKswYwJdbi/RSGCPIeVJhHh5nx25xWGSvnKwWOubDulRhbR7sKLjQ70K/tQKBgCXs\nWlxz2gNQQfHBkeVRf6FoIEfA+68XbjU70NRKEJ2iy0gLIxjM+aPx7VvstmttB8yT\nTu2CxnWD9FQQBwDPGrTEyDwM8Y5gcyrhbCoRX7iMNDTqXQOs6zunDCXezX68kmYg\nFq9HTh+UFbhUnc4uC+0kPwS3ROd4p2WQ77LHha8dAoGALxxxBWegn6RarCxyeVuL\n6qD+UFjyVNUsOZ7z0vHXg3G6iaNQCqvjkHhzJKEtGNTtdFbj7eLTbqiU40QgotIj\naafcQkG+1UnUJRl5XNxSf+F4dV/NGsB6Vnyrf2yaIyDR09fbbIneXrru0mFwAyaB\nQD3KuaWVNiYcjFbiBOsERGw=\n-----END PRIVATE KEY-----\n",
                    "client_email": "google-vision-sample@the-quizz-world.iam.gserviceaccount.com",
                    "client_id": "102185904960387944033",
                    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                    "token_uri": "https://oauth2.googleapis.com/token",
                    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/google-vision-sample%40the-quizz-world.iam.gserviceaccount.com"
        }
        """;

        try {
            String jsonContent = Files.readString(Path.of(GOOGLE_CREDENTIALS_JSON_PATH));
            InputStream inputStream = new ByteArrayInputStream(JsonContent.getBytes());

            GoogleCredentials credentials = GoogleCredentials.fromStream(inputStream)
                    .createScoped(Lists.newArrayList("https://www.googleapis.com/auth/cloud-platform"));

            ImageAnnotatorSettings imageAnnotatorSettings = ImageAnnotatorSettings.newBuilder()
                    .setCredentialsProvider(FixedCredentialsProvider.create(credentials))
                    .build();

            ImageAnnotatorClient vision = ImageAnnotatorClient.create(imageAnnotatorSettings);
            return vision;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static void main(String... args) throws Exception {
        // FILE base64 --> ENV:

        // Initialize client that will be used to send requests. This client only needs to be created
        // once, and can be reused for multiple requests. After completing all of your requests, call
        // the "close" method on the client to safely clean up any remaining background resources
        // The path to the image file to annotate
        String filePath = "/Users/duc.nguyen/Downloads/Offline-Receipts/IMG_20220506_154920_822.jpg";
//        String filePath = "/Users/duc.nguyen/Pictures/background-green/doan-tuan-3QFQOxGCVmE-unsplash.jpeg";
        ByteString imgBytes = ByteString.readFrom(new FileInputStream(filePath));
        float receiptScore = getReceiptScore(imgBytes);
        System.out.println(System.nanoTime() + " - Score: " + receiptScore);
    }

    public static float getReceiptScore(ByteString imgBytes) {

        // Builds the image annotation request
        List<AnnotateImageRequest> requests = new ArrayList<>();
        Image img = Image.newBuilder().setContent(imgBytes).build();
        Feature feat = Feature.newBuilder()
                .setType(Type.LABEL_DETECTION)
                .setMaxResults(100).build();
        AnnotateImageRequest request =
                AnnotateImageRequest
                        .newBuilder()
                        .addFeatures(feat)
                        .setImage(img)
                        .build();

        requests.add(request);

        // Performs label detection on the image file
        BatchAnnotateImagesResponse response = GOOGLE_VISION_CLIENT.batchAnnotateImages(requests);
        List<AnnotateImageResponse> responses = response.getResponsesList();

        for (AnnotateImageResponse res : responses) {
            if (res.hasError()) {
                System.out.format("Error: %s%n", res.getError().getMessage());
                return 0;
            }

            EntityAnnotation annotation = res.getLabelAnnotationsList().stream().filter(entityAnnotation -> "Receipt".equalsIgnoreCase(entityAnnotation.getDescription()))
                    .findAny()
                    .orElse(null);
            return Objects.isNull(annotation) ? 0 : annotation.getScore();
        }

        return 0;

    }
}