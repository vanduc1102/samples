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

        try {
            String jsonContent = Files.readString(Path.of(GOOGLE_CREDENTIALS_JSON_PATH));
            InputStream inputStream = new ByteArrayInputStream(jsonContent.getBytes());

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