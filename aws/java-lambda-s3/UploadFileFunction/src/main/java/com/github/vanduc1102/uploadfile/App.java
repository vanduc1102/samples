package com.github.vanduc1102.uploadfile;

import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.github.vanduc1102.uploadfile.dto.GetSignedUrlRequestBody;
import com.github.vanduc1102.uploadfile.dto.GetSignedUrlResponseBody;
import com.github.vanduc1102.uploadfile.dto.Response;
import com.github.vanduc1102.uploadfile.services.S3Service;
import com.github.vanduc1102.uploadfile.util.JsonUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Handler for requests to Lambda function.
 */
public class App implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
    private static final Logger logger = LoggerFactory.getLogger(App.class);
    private final Long MAX_FILE_SIZE = (long) 50 * 1024 * 1024;
    private S3Service s3Service;

    public App() {
        this.s3Service = new S3Service();
    }

    public App(S3Service s3Service) {
        this.s3Service = s3Service;
    }

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
        logger.debug("REQUEST BODY: " + input.getBody().toString());

        GetSignedUrlRequestBody body = JsonUtil.fromJson(input.getBody(), GetSignedUrlRequestBody.class);

        validateRequestBody(body);

        String signedUrl = this.s3Service.getPreSignedUrl(body);

        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent()
                .withHeaders(headers);

        logger.debug("RESPONSE URL: " + signedUrl);

        return response
                .withStatusCode(200)
                .withBody(JsonUtil.toJson(new Response<>(new GetSignedUrlResponseBody(signedUrl))));

    }

    public void validateRequestBody(GetSignedUrlRequestBody requestBody) {
        if (MAX_FILE_SIZE < requestBody.getContentLength()) {
            throw new RuntimeException("Exceeded file size limit");
        }
    }

}
