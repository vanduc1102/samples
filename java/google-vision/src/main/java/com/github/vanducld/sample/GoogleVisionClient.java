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
import com.google.gson.Gson;
import com.google.protobuf.ByteString;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import software.amazon.awssdk.protocols.json.JsonContent;

import java.util.Base64;
import java.util.List;
import java.util.Objects;

public class GoogleVisionClient {
    public static final String RECEIPT = "Receipt";
    private static String GOOGLE_CREDENTIALS_JSON_PATH = "/Users/duc.nguyen/Downloads/hf-google-vision-demo-the-quizz-world-821e76efd4b8.json";
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
        byte[] imgBytes = (new FileInputStream(filePath)).readAllBytes();
        float receiptScore = getReceiptScore(imgBytes);
        System.out.println(System.nanoTime() + " - Score: " + receiptScore);
    }

    public static float getReceiptScore(byte[] imgBytes) {

        // Builds the image annotation request
        List<AnnotateImageRequest> requests = new ArrayList<>();
        Image img = Image.newBuilder().setContent(ByteString.copyFrom(imgBytes)).build();
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

            EntityAnnotation annotation = res.getLabelAnnotationsList().stream().filter(entityAnnotation -> RECEIPT.equalsIgnoreCase(entityAnnotation.getDescription()))
                    .findAny()
                    .orElse(null);
            return Objects.isNull(annotation) ? 0 : annotation.getScore();
        }

        return 0;

    }

    public static float getReceiptScoreViaRest(byte[] imageBytes) {
        try {
            HttpPost httpPost = new HttpPost("https://vision.googleapis.com/v1/images:annotate?key=" + System.getenv("GOOGLE_API_KEY")
            );
            String body = buildBodyString(imageBytes);
            httpPost.setEntity(new StringEntity(body));
            CloseableHttpResponse response = HttpClients.createDefault().execute(httpPost);

            HttpEntity responseEntity = response.getEntity();
            String responseString = EntityUtils.toString(responseEntity);
            System.out.println("responseEntity: " + responseString);
            System.out.println("dataObject: " + extractReceiptScore(responseString));
        } catch (Exception exception) {
            System.out.println("getReceiptScoreViaRest {} " + exception.getMessage());
        }
        return 0;
    }


    private static Float extractReceiptScore(String jsonResponse) {
        String jsonScores = JsonPath.parse(jsonResponse).read("$['responses'][0]['labelAnnotations'][?(@.description == 'Receipt')].score").toString();
        return  (new Gson()).fromJson(jsonScores, Float[].class)[0];
    }

    private static  String buildBodyString(byte[] imageBytes) {
        String imageBase64 = Base64.getEncoder().encodeToString(imageBytes);
        return String.format("{\"requests\":[{\"image\":{\"content\":\"%s\"},\"features\":[{\"maxResults\":10,\"type\":\"LABEL_DETECTION\"}]}]}", imageBase64);
    }
}