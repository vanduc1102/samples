package com.github.vanduc1102.sendnofitication;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.amazonaws.services.lambda.runtime.events.S3Event;
import com.github.vanduc1102.sendnofitication.services.SendEmailService;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import software.amazon.awssdk.regions.Region;

/**
 * Handler for requests to Lambda function.
 */
public class App implements RequestHandler<S3Event, APIGatewayProxyResponseEvent> {
    private final String bucketName = System.getenv("UPLOAD_BUCKET");
    private final Region region = Region.of(System.getenv("AWS_REGION"));
    private final Gson gson = new GsonBuilder().setPrettyPrinting().create();

    static final String FROM = "vanducld@gmail.com";
    static final String TO = "duc.nguyen@wizeline.com";

    static final String SUBJECT = "Amazon SES test (AWS SDK for Java)";

    // The HTML body for the email.
    static final String HTMLBODY = "<h1>Amazon SES test (AWS SDK for Java)</h1>"
            + "<p>This email was sent with <a href='https://aws.amazon.com/ses/'>"
            + "Amazon SES</a> using the <a href='https://aws.amazon.com/sdk-for-java/'>"
            + "AWS SDK for Java</a>";

    // The email body for recipients with non-HTML email clients.
    static final String TEXTBODY = "This email was sent through Amazon SES "
            + "using the AWS SDK for Java.";

    public APIGatewayProxyResponseEvent handleRequest(final S3Event input, final Context context) {
        Map<String, String> headers = new HashMap<>();
        SendEmailService emailService = new SendEmailService();
        headers.put("Content-Type", "application/json");
        headers.put("X-Custom-Header", "application/json");

        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent()
                .withHeaders(headers);
        try {
            emailService.send(FROM, TO, SUBJECT, gson.toJson(input.getRecords().get(0)),
                    gson.toJson(input.getRecords().get(0)));
        } catch (MessagingException | IOException e) {
            e.printStackTrace();
        }
        return response
                .withStatusCode(200)
                .withBody("");
    }
}
