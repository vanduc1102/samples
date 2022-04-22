package com.github.vanduc1102.uploadfile;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.github.vanduc1102.uploadfile.dto.GetSignedUrlRequestBody;
import com.github.vanduc1102.uploadfile.services.S3Service;
import com.github.vanduc1102.uploadfile.util.JsonUtil;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class AppTest {
    S3Service mockS3Service;
    App app;

    @BeforeEach
    void setup() {
        this.mockS3Service = Mockito.mock(S3Service.class);
        app = new App(this.mockS3Service);
    }

    @Test
    public void successfulResponse() {
        var mockSignedUrl = "https:://s3.aws.com/presiged-url";
        var requestBody = new GetSignedUrlRequestBody("fileName", "fileType", "userId", "amount", "store", (long) 1024);
        APIGatewayProxyRequestEvent request = new APIGatewayProxyRequestEvent()
                .withBody(JsonUtil.toJson(requestBody));

        when(this.mockS3Service.getPreSignedUrl(any()))
                .thenReturn(mockSignedUrl);

        APIGatewayProxyResponseEvent result = this.app.handleRequest(request, Mockito.mock(Context.class));

        assertEquals(200, result.getStatusCode().intValue());
        assertEquals("application/json", result.getHeaders().get("Content-Type"));
        String content = result.getBody();

        assertNotNull(content);
        assertTrue(content.contains(mockSignedUrl));
    }

    @Test
    public void errorFileExceededLimitation() {
        Throwable exception = assertThrows(RuntimeException.class, () -> {
            var requestBody = new GetSignedUrlRequestBody("fileName", "fileType", "userId", "amount", "store",
                    (long) 51 * 1024 * 1024);
            APIGatewayProxyRequestEvent request = new APIGatewayProxyRequestEvent()
                    .withBody(JsonUtil.toJson(requestBody));
            this.app.handleRequest(request, Mockito.mock(Context.class));

        });
        assertEquals(exception.getMessage(), "Exceeded file size limit");
    }
}
