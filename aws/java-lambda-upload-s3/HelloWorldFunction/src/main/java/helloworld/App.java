package helloworld;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import dto.GetSignedUrlRequestBody;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.GetSignedUrlResponseBody;
import dto.Response;

/**
 * Handler for requests to Lambda function.
 */
public class App implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {
        private final String bucketName = System.getenv("UPLOAD_BUCKET");
        private final Region region = Region.of(System.getenv("AWS_REGION"));
        private final Map headers = new HashMap<String, String>() {
                {
                        put("Content-Type", "application/json");
                        put("X-Custom-Header", "application/json");
                }
        };

        public APIGatewayProxyResponseEvent handleRequest(final APIGatewayProxyRequestEvent input,
                        final Context context) {
                var logger = context.getLogger();
                logger.log("REQUEST BODY: " + input.getBody().toString());

                Gson gson = new GsonBuilder().setPrettyPrinting().create();
                GetSignedUrlRequestBody body = gson.fromJson(input.getBody(), GetSignedUrlRequestBody.class);

                String signedUrl = getPreSignedUrl(body.getFileName(), body.getFileType(), body.getUserId(),
                                body.getStore(),
                                body.getAmount());

                APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent()
                                .withHeaders(headers);

                logger.log("RESPONSE URL: " + signedUrl);

                return response
                                .withStatusCode(200)
                                .withBody(gson.toJson(new Response<>(new GetSignedUrlResponseBody(signedUrl))));

        }

        public String getPreSignedUrl(String fileName, String fileType, String userId, String storeName,
                        String amount) {
                S3Presigner preSigner = S3Presigner.builder()
                                .region(region)
                                .build();

                PutObjectRequest objectRequest = PutObjectRequest.builder()
                                .bucket(bucketName)
                                .key(fileName)
                                // .metadata(new HashMap<>() {
                                // {
                                // put("userId", userId);
                                // put("amount", amount);
                                // put("store", storeName);
                                // }
                                // })
                                .contentType(fileType)
                                .build();

                PutObjectPresignRequest preSignRequest = PutObjectPresignRequest.builder()
                                .signatureDuration(Duration.ofMinutes(15))
                                .putObjectRequest(objectRequest)
                                .build();

                PresignedPutObjectRequest preSignedRequest = preSigner.presignPutObject(preSignRequest);
                return preSignedRequest.url().toString();
        }
}