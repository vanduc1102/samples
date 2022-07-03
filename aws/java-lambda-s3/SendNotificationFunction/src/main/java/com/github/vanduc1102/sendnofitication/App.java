package com.github.vanduc1102.sendnofitication;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.amazonaws.services.lambda.runtime.events.models.s3.S3EventNotification.S3EventNotificationRecord;
import com.github.vanduc1102.sendnofitication.services.S3Service;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.github.vanduc1102.sendnofitication.services.EmailService;
import com.github.vanduc1102.sendnofitication.services.GoogleVisionClient;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class App implements RequestHandler<S3Event, APIGatewayProxyResponseEvent> {
    private static final Logger logger = LoggerFactory.getLogger(App.class);

    private final String USER_ID = "userid";
    private final String STORE_NAME = "store";
    private final String AMOUNT = "amount";
    private final Map<String, String> HEADERS = new HashMap<>() {
        {
            put("Content-Type", "application/json");
        }
    };

    private EmailService emailService;
    private S3Service s3Service;
    private GoogleVisionClient googleVisionClient;

    public App() {
        this.emailService = new EmailService();
        this.s3Service = new S3Service();
        this.googleVisionClient = new GoogleVisionClient();
    }

    public App(EmailService emailService, S3Service s3Service, GoogleVisionClient googleVisionClient) {
        this.emailService = emailService;
        this.s3Service = s3Service;
        this.googleVisionClient = googleVisionClient;
    }

    public APIGatewayProxyResponseEvent handleRequest(final S3Event input, final Context context) {
        logger.debug("handleRequest - INPUT: {}", input.getRecords().get(0).getEventName());

        S3EventNotificationRecord record = input.getRecords().get(0);
        var bucketName = record.getS3().getBucket().getName();
        var objectKey = record.getS3().getObject().getKey();

        String preSignedUrl = this.s3Service.getPresignedUrl(bucketName, objectKey);
        String objectUrl = this.s3Service.getURL(bucketName, objectKey);
        Map<String, String> metadata = this.s3Service.getObjectMeta(bucketName, objectKey);
        byte[] imageBytes = this.s3Service.getObject(bucketName, objectKey);
        float receiptScore = this.googleVisionClient.getReceiptScoreViaRest(imageBytes);
        logger.debug("Handle annotation Receipt Score {} ", receiptScore);
        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent()
                .withHeaders(HEADERS);
        try {
            this.emailService.sendUploadNotification(metadata.get(USER_ID), metadata.get(STORE_NAME),
                    metadata.get(AMOUNT),
                    objectUrl, preSignedUrl, receiptScore );
        } catch (MessagingException | IOException e) {
            logger.error("ERROR: {}", e.getMessage());
            return response
                    .withStatusCode(500)
                    .withBody(e.getMessage());
        }
        return response
                .withStatusCode(200)
                .withBody("");
    }
}
