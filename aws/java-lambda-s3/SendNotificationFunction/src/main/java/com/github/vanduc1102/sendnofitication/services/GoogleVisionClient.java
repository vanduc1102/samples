package com.github.vanduc1102.sendnofitication.services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.apache.http.HttpEntity;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.github.vanduc1102.sendnofitication.util.JsonUtil;
import com.google.api.gax.core.FixedCredentialsProvider;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Feature.Type;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.cloud.vision.v1.ImageAnnotatorSettings;
import com.google.common.collect.Lists;
import com.google.protobuf.ByteString;

public class GoogleVisionClient {
    private static final Logger logger = LoggerFactory.getLogger(GoogleVisionClient.class);

    private static String RECEIPT_LABEL = "Receipt";

    public float getReceiptAnnotation(byte[] imageBytes) {
        logger.debug("GOOGLE_APPLICATION_CREDENTIALS: {} ", System.getenv("GOOGLE_APPLICATION_CREDENTIALS"));
        try {
            InputStream credentialsStream = new ByteArrayInputStream(
                    System.getenv("GOOGLE_APPLICATION_CREDENTIALS").getBytes());

            GoogleCredentials credentials = GoogleCredentials.fromStream(credentialsStream)
                    .createScoped(Lists.newArrayList("https://www.googleapis.com/auth/cloud-platform"));

            ImageAnnotatorSettings imageAnnotatorSettings = ImageAnnotatorSettings.newBuilder()
                    .setCredentialsProvider(FixedCredentialsProvider.create(credentials))
                    .build();

            ImageAnnotatorClient vision = ImageAnnotatorClient.create(imageAnnotatorSettings);

            // Builds the image annotation request
            List<AnnotateImageRequest> requests = new ArrayList<>();
            Image img = Image.newBuilder().setContent(ByteString.copyFrom(imageBytes)).build();
            Feature feat = Feature.newBuilder()
                    .setType(Type.LABEL_DETECTION)
                    .setMaxResults(100).build();
            AnnotateImageRequest request = AnnotateImageRequest
                    .newBuilder()
                    .addFeatures(feat)
                    .setImage(img)
                    .build();

            requests.add(request);

            // Performs label detection on the image file
            BatchAnnotateImagesResponse response = vision.batchAnnotateImages(requests);
            List<AnnotateImageResponse> responses = response.getResponsesList();

            for (AnnotateImageResponse res : responses) {
                if (res.hasError()) {
                    logger.error("Error: {}", res.getError().getMessage());
                    return 0;
                }

                EntityAnnotation annotation = res.getLabelAnnotationsList().stream()
                        .filter(entityAnnotation -> RECEIPT_LABEL.equalsIgnoreCase(entityAnnotation.getDescription()))
                        .findAny()
                        .orElse(null);
                return Objects.isNull(annotation) ? 0 : annotation.getScore();
            }
        } catch (IOException exception) {
            throw new RuntimeException(exception);
        }

        return 0;

    }

    public float getReceiptScoreViaRest(byte[] imageBytes) {
        try {
            HttpPost httpPost = new HttpPost("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBBhMG5VtALnMDWE5UC97ARCMlnBSAjAUY");
            List<AnnotateImageRequest> requestEntity = new ArrayList<>();
            Image img = Image.newBuilder().setContent(ByteString.copyFrom(imageBytes)).build();
            Feature feat = Feature.newBuilder()
                    .setType(Type.LABEL_DETECTION)
                    .setMaxResults(100).build();
            AnnotateImageRequest request = AnnotateImageRequest
                    .newBuilder()
                    .addFeatures(feat)
                    .setImage(img)
                    .build();

            requestEntity.add(request);

            httpPost.setEntity(new StringEntity(JsonUtil.toJson(requestEntity)));

            CloseableHttpClient httpClient = HttpClients.createDefault();
            CloseableHttpResponse response = httpClient.execute(httpPost);

            HttpEntity responseEntity = response.getEntity();
            if (HttpStatus.SC_OK == response.getStatusLine().getStatusCode() && !Objects.isNull(responseEntity)) {
                BatchAnnotateImagesResponse batchAnnotateImagesResponse = JsonUtil
                        .fromJson(EntityUtils.toString(responseEntity), BatchAnnotateImagesResponse.class);
                List<AnnotateImageResponse> annotateImageResponses = batchAnnotateImagesResponse.getResponsesList();

                for (AnnotateImageResponse res : annotateImageResponses) {
                    if (res.hasError()) {
                        logger.error("Error: {}", res.getError().getMessage());
                        return 0;
                    }

                    EntityAnnotation annotation = res.getLabelAnnotationsList().stream()
                            .filter(entityAnnotation -> RECEIPT_LABEL
                                    .equalsIgnoreCase(entityAnnotation.getDescription()))
                            .findAny()
                            .orElse(null);
                    return Objects.isNull(annotation) ? 0 : annotation.getScore();
                }

                return 0;
            }

        } catch (Exception exception) {
            logger.error(exception.getMessage());
        }
        return 0;
    }
}
