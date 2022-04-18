package com.github.vanduc1102.uploadfile;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.github.vanduc1102.uploadfile.dto.GetSignedUrlRequestBody;
import com.github.vanduc1102.uploadfile.dto.GetSignedUrlResponseBody;
import com.github.vanduc1102.uploadfile.dto.Response;

import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Handler for requests to Lambda function.
 */
public class App implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    private final Long MAX_FILE_SIZE = (long) 50 * 1024 * 1024;
    private final String UPLOAD_BUCKET = System.getenv("UPLOAD_BUCKET");
    private final Region REGION = Region.of(System.getenv("AWS_REGION"));
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    private final Map headers = new HashMap<String, String>() {
        {
            put("Content-Type", "application/json");
            put("Access-Control-Allow-Headers", "Content-Type");
            put("Access-Control-Allow-Origin", "*");
            put("Access-Control-Allow-Methods", "POST");
        }
    };

    public APIGatewayProxyResponseEvent handleRequest(final APIGatewayProxyRequestEvent input,
            final Context context) {
        var logger = context.getLogger();
        logger.log("REQUEST BODY: " + input.getBody().toString());
        logger.log("UPLOAD_BUCKET: " + UPLOAD_BUCKET);
        logger.log("REGION: " + REGION);

        GetSignedUrlRequestBody body = gson.fromJson(input.getBody(), GetSignedUrlRequestBody.class);

        String signedUrl = getPreSignedUrl(body);

        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent()
                .withHeaders(headers);

        logger.log("RESPONSE URL: " + signedUrl);

        return response
                .withStatusCode(200)
                .withBody(gson.toJson(new Response<>(new GetSignedUrlResponseBody(signedUrl))));

    }

    public String getPreSignedUrl(GetSignedUrlRequestBody object) {
        S3Presigner preSigner = S3Presigner.builder()
                .region(REGION)
                .build();

        PutObjectRequest objectRequest = PutObjectRequest.builder()
                .bucket(UPLOAD_BUCKET)
                .key(object.getFileName())
                .contentType(object.getFileType())
                .contentLength(object.getContentLength())
                .metadata(new HashMap<>() {
                    {
                        put("userId", object.getUserId());
                        put("amount", object.getAmount());
                        put("store", object.getStore());
                    }
                })
                .build();

        PutObjectPresignRequest preSignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofMinutes(15))
                .putObjectRequest(objectRequest)
                .build();

        PresignedPutObjectRequest preSignedRequest = preSigner.presignPutObject(preSignRequest);
        return preSignedRequest.url().toString();
    }

    public void validateRequestBody(GetSignedUrlRequestBody requestBody) {
        if (MAX_FILE_SIZE < requestBody.getContentLength()) {
            throw new RuntimeException("Exceeded file size limit");
        }
    }
}
